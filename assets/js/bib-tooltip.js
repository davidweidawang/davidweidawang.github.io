/* BibTeX preview on hover and copy on click. */
(function () {
  var buttons = document.querySelectorAll('.btn-bib');
  if (!buttons.length) return;

  function parseBib(text) {
    var entries = {};
    var index = 0;

    while (index < text.length) {
      if (text[index] !== '@') {
        index += 1;
        continue;
      }

      var start = index;
      var openingBrace = text.indexOf('{', index);
      if (openingBrace < 0) break;

      var depth = 1;
      var cursor = openingBrace + 1;
      while (cursor < text.length && depth > 0) {
        if (text[cursor] === '{') depth += 1;
        if (text[cursor] === '}') depth -= 1;
        if (depth === 0) break;
        cursor += 1;
      }

      if (depth !== 0) break;
      var entry = text.substring(start, cursor + 1);
      var keyMatch = entry.match(/^@\w+\s*\{\s*([\w-]+)\s*,/);
      if (keyMatch) entries[keyMatch[1]] = entry;
      index = cursor + 1;
    }

    return entries;
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var input = document.createElement('textarea');
      input.value = text;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand('copy') ? resolve() : reject(new Error('copy failed'));
      } catch (error) {
        reject(error);
      }
      document.body.removeChild(input);
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  fetch('/files/papers.bib')
    .then(function (response) {
      if (!response.ok) throw new Error('BibTeX request failed: ' + response.status);
      return response.text();
    })
    .then(function (text) {
      var entries = parseBib(text);
      var tooltip = document.createElement('div');
      tooltip.className = 'bib-tooltip';
      tooltip.setAttribute('role', 'tooltip');
      document.body.appendChild(tooltip);

      Array.prototype.forEach.call(buttons, function (button) {
        var entry = entries[button.getAttribute('data-bib-key')];
        if (!entry) return;

        button.addEventListener('click', function (event) {
          event.preventDefault();
          copyText(entry).then(function () {
            var original = button.textContent;
            button.textContent = 'Copied';
            window.setTimeout(function () { button.textContent = original; }, 1800);
          });
        });

        button.addEventListener('mouseenter', function () {
          if (window.matchMedia('(hover: none)').matches) return;
          tooltip.textContent = entry;
          tooltip.style.display = 'block';
          var rect = button.getBoundingClientRect();
          var left = Math.min(rect.left, window.innerWidth - tooltip.offsetWidth - 16);
          tooltip.style.left = Math.max(16, left + window.scrollX) + 'px';
          tooltip.style.top = (rect.bottom + window.scrollY + 7) + 'px';
        });

        button.addEventListener('mouseleave', function () {
          tooltip.style.display = 'none';
        });
      });
    })
    .catch(function (error) {
      if (window.console) console.warn('[bib-tooltip]', error);
    });
})();
