(function () {
  function formatStars(value) {
    return new Intl.NumberFormat().format(value);
  }

  function loadStars(link) {
    var repo = link.getAttribute('data-github-repo');
    var count = link.querySelector('[data-github-stars-count]');
    var fallback = Number(link.getAttribute('data-stars-fallback'));

    if (!repo || !count) {
      return;
    }

    if (!Number.isNaN(fallback)) {
      count.textContent = formatStars(fallback);
    }

    fetch('https://api.github.com/repos/' + repo, {
      headers: { Accept: 'application/vnd.github+json' }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('GitHub API request failed');
        }
        return response.json();
      })
      .then(function (data) {
        if (typeof data.stargazers_count === 'number') {
          count.textContent = formatStars(data.stargazers_count);
        }
      })
      .catch(function () {
        // Keep the build-time fallback when the API is unavailable.
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.js-github-stars').forEach(loadStars);
  });
}());
