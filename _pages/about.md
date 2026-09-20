---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about-me"></span>

# About Me

<p class="about-copy">My name is <strong>Weida Wang (王蔚达)</strong>, and I also go by David. I am currently a first-year Ph.D. student at the College of Computer Science and Artificial Intelligence, <a class="org-chip org-chip--fudan" href="https://www.fudan.edu.cn/"><img src="/images/logos/fudan.png" alt="">Fudan University</a>, advised by <a href="https://scholar.google.com/citations?user=pw_0Z_UAAAAJ">Prof. Wanli Ouyang</a>. I also conduct AI for Science research with the <a class="org-chip org-chip--shlab" href="https://www.shlab.org.cn/"><img src="/images/logos/shlab.png" alt="">Shanghai AI Laboratory</a>, where I work closely with <a href="https://dblp.org/pid/152/7935.html">Dr. Shufei Zhang</a>.</p>

<p class="about-copy">Prior to this, I received my B.Eng. in Software Engineering from the School of Computer Science and Technology, <a class="org-chip org-chip--tongji" href="https://www.tongji.edu.cn/"><img src="/images/logos/tongji.png" alt="">Tongji University</a> in 2025. I worked closely with <a href="https://scholar.google.com/citations?user=jBxf3FYAAAAJ">Prof. Jin Zeng</a>, <a href="https://scholar.google.com/citations?user=8VOk_S4AAAAJ">Prof. Lin Zhang</a>, and <a href="https://scholar.google.com/citations?user=jJpqDQIAAAAJ">Prof. Guanjie Zheng</a>.</p>

<p class="about-copy">My research interests focus on <strong>AI Scientist, Agent for Science, and LLM Post-Traing</strong>. I am particularly interested in building autonomous systems that can reason, learn, and continually improve through real scientific workflows.</p>

<p class="collaboration-line"> <strong>Collaboration:</strong> I am always happy to discuss AI Scientist,  Cognitive Science and Science of Science. If our interests overlap, please feel free to <a href="mailto:tjudavidwang@gmail.com">contact me</a>.</p>

# 🔥 News

<div class="news-list" role="list">
  <div class="news-item" role="listitem"><time>2026.05</time><p>🎉 Our chemical reasoning model <a href="https://huggingface.co/weidawang/Chem-R-8B"><strong><em>Chem-R</em></strong></a> and molecule generation benchmark <a href="https://arxiv.org/pdf/2412.14642"><strong><em>S²-Bench</em></strong></a> were accepted to <strong>KDD 2026</strong>.</p></div>
  <div class="news-item" role="listitem"><time>2026.04</time><p>🚀 Our efficient reasoning method <a href="https://arxiv.org/pdf/2604.16890"><strong><em>Step-GRPO</em></strong></a> was accepted to <strong>ACL 2026</strong>. Many thanks to Dr. Mingbao Lin and Prof. Min Zhang.</p></div>
  <div class="news-item" role="listitem"><time>2026.01</time><p>🎉 Our condensed matter physics benchmark <a href="https://github.com/CMPhysBench/CMPhysBench"><strong><em>CMPhysBench</em></strong></a> was accepted to <strong>ICLR 2026</strong>. Many thanks to all my collaborators.</p></div>
  <div class="news-item" role="listitem"><time>2025.07</time><p>🎉 Our work <a href="https://github.com/davidweidawang/GIGA-ToF"><strong><em>GIGA-ToF</em></strong></a> was accepted to <strong>ICCV 2025</strong>. Many thanks to my collaborators.</p></div>
  <div class="news-item" role="listitem"><time>2024.09</time><p>📣 Joined the <a href="https://science.openxlab.org.cn/">OpenScienceLab</a> at the <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a> as a research intern in the AI for Science group.</p></div>
  <div class="news-item" role="listitem"><time>2022.09</time><p>🎉 Selected for Tongji University’s <a href="https://mp.weixin.qq.com/s/bFF-IJLT49Ftm5x48avsCw">Outstanding Science and Innovation Talent — Youth Enlightenment Program</a>.</p></div>
</div>

<span class="anchor" id="-publications"></span>

# 📝 Selected Publication ([Full List](https://scholar.google.com/citations?hl=zh-CN&amp;user=eQXqmG8AAAAJ))

<p class="publication-legend"><strong>*</strong> Equal contribution. <strong>†</strong> Corresponding author.</p>

<article class="paper-box publication-item">
  <div class="paper-box-image">
    <a href="https://arxiv.org/abs/2510.16880" aria-label="Read Chem-R"><span class="paper-badge">KDD 2026</span><img src="/images/publications/chem-r.webp" alt="Overview of the three-stage Chem-R training framework"></a>
  </div>
  <div class="paper-box-text">
    <h3><a href="https://arxiv.org/abs/2510.16880">Chem-R: Learning to Reason as a Chemist</a></h3>
    <p class="paper-authors"><strong><u>Weida Wang*</u></strong>, Benteng Chen*, Di Zhang*, Wanhao Liu, Shuchen Pu, Ben Gao, Jin Zeng, et al.</p>
    <div class="paper-actions">
      <a class="btn-link btn-paper" href="https://arxiv.org/abs/2510.16880">Paper</a>
      <a class="btn-link btn-hf" href="https://huggingface.co/weidawang/Chem-R-8B">🤗 HF</a>
      <a class="btn-link btn-scholar" href="https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=eQXqmG8AAAAJ&amp;citation_for_view=eQXqmG8AAAAJ:hqOjcs7Dif8C"><i class="ai ai-google-scholar" aria-hidden="true"></i><span class="show_paper_citations" data="eQXqmG8AAAAJ:hqOjcs7Dif8C">Scholar</span></a>
      <a class="btn-link btn-code" href="https://github.com/davidweidawang/Chem-R">Code</a>
      <a href="#" class="btn-link btn-bib" data-bib-key="wang2026chemr">BIB</a>
    </div>
    <ul class="paper-contribution"><li>A three-stage post-training framework that builds chemical foundations, distills expert reasoning protocols, and balances molecular and reaction tasks with multi-task GRPO.</li></ul>
  </div>
</article>

<article class="paper-box publication-item">
  <div class="paper-box-image">
    <a href="https://openreview.net/forum?id=3d0FRYx0D0" aria-label="Read CMPhysBench"><span class="paper-badge">ICLR 2026</span><img src="/images/publications/cmphysbench.webp" alt="CMPhysBench sample problem and fine-grained expression scoring"></a>
  </div>
  <div class="paper-box-text">
    <h3><a href="https://openreview.net/forum?id=3d0FRYx0D0">CMPhysBench: Evaluating LLMs in Condensed Matter Physics</a></h3>
    <p class="paper-authors"><strong><u>Weida Wang*</u></strong>, Dongchen Huang*, Jiatong Li*, Tengchao Yang*, Ziyang Zheng*, Di Zhang, Dong Han, et al.</p>
    <div class="paper-actions">
      <a class="btn-link btn-paper" href="https://arxiv.org/abs/2508.18124">Paper</a>
      <a class="btn-link btn-hf" href="https://huggingface.co/datasets/weidawang/CMPhysBench">🤗 HF</a>
      <a class="btn-link btn-scholar" href="https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=eQXqmG8AAAAJ&amp;citation_for_view=eQXqmG8AAAAJ:hC7cP41nSMkC"><i class="ai ai-google-scholar" aria-hidden="true"></i><span class="show_paper_citations" data="eQXqmG8AAAAJ:hC7cP41nSMkC">Scholar</span></a>
      <a class="btn-link btn-code" href="https://github.com/CMPhysBench/CMPhysBench">Code</a>
      <a href="#" class="btn-link btn-bib" data-bib-key="wang2026cmphysbench">BIB</a>
    </div>
    <ul class="paper-contribution"><li>A calculation-focused benchmark of 520+ graduate-level problems, paired with expression-structure scoring that reveals errors missed by exact-match accuracy.</li></ul>
  </div>
</article>

<article class="paper-box publication-item">
  <div class="paper-box-image">
    <a href="https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Consistent_Time-of-Flight_Depth_Denoising_via_Graph-Informed_Geometric_Attention_ICCV_2025_paper.html" aria-label="Read GIGA-ToF"><span class="paper-badge">ICCV 2025</span><img src="/images/publications/giga-tof.webp" alt="Qualitative depth denoising comparison for GIGA-ToF" loading="lazy"></a>
  </div>
  <div class="paper-box-text">
    <h3><a href="https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Consistent_Time-of-Flight_Depth_Denoising_via_Graph-Informed_Geometric_Attention_ICCV_2025_paper.html">Consistent Time-of-Flight Depth Denoising via Graph-Informed Geometric Attention</a></h3>
    <p class="paper-authors"><strong><u>Weida Wang*</u></strong>, Changyong He*, Jin Zeng, Di Qiu</p>
    <div class="paper-actions">
      <a class="btn-link btn-paper" href="https://arxiv.org/abs/2506.23542">Paper</a>
      <a class="btn-link btn-scholar" href="https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=eQXqmG8AAAAJ&amp;citation_for_view=eQXqmG8AAAAJ:M3ejUd6NZC8C"><i class="ai ai-google-scholar" aria-hidden="true"></i><span class="show_paper_citations" data="eQXqmG8AAAAJ:M3ejUd6NZC8C">Scholar</span></a>
      <a class="btn-link btn-code" href="https://github.com/davidweidawang/GIGA-ToF">Code</a>
      <a href="#" class="btn-link btn-bib" data-bib-key="wang2025gigatof">BIB</a>
    </div>
    <ul class="paper-contribution"><li>GIGA-ToF combines graph-informed geometric attention with motion-invariant fusion to improve both temporal stability and spatial sharpness in depth video.</li></ul>
  </div>
</article>

<article class="paper-box publication-item">
  <div class="paper-box-image">
    <a href="https://aclanthology.org/2026.acl-long.990/" aria-label="Read Step-GRPO"><span class="paper-badge">ACL 2026</span><img src="/images/publications/step-grpo.webp" alt="Dynamic truncated rollout and step-aware relative reward in Step-GRPO" loading="lazy"></a>
  </div>
  <div class="paper-box-text">
    <h3><a href="https://aclanthology.org/2026.acl-long.990/">Step-GRPO: Internalizing Dynamic Early Exit for Efficient Reasoning</a></h3>
    <p class="paper-authors">Benteng Chen*, <strong><u>Weida Wang*</u></strong>, Shufei Zhang†, Mingbao Lin, Min Zhang†</p>
    <div class="paper-actions">
      <a class="btn-link btn-paper" href="https://aclanthology.org/2026.acl-long.990/">Paper</a>
      <a class="btn-link btn-hf" href="https://huggingface.co/papers/2604.16890">🤗 HF</a>
      <a class="btn-link btn-scholar" href="https://scholar.google.com/scholar?q=%22Step-GRPO%3A+Internalizing+Dynamic+Early+Exit+for+Efficient+Reasoning%22"><i class="ai ai-google-scholar" aria-hidden="true"></i>Scholar</a>
      <a class="btn-link btn-code" href="https://github.com/davidweidawang/Step-GRPO">Code</a>
      <a href="#" class="btn-link btn-bib" data-bib-key="chen2026stepgrpo">BIB</a>
    </div>
    <ul class="paper-contribution"><li>Step-aware reinforcement learning internalizes early exit into the model itself, reducing redundant reasoning without adding an inference-time controller.</li></ul>
  </div>
</article>

<article class="paper-box publication-item">
  <div class="paper-box-image">
    <a href="https://polyreal-benchmark.github.io/" aria-label="Visit the PolyReal project"><span class="paper-badge">CVPR 2026</span><img src="/images/publications/polyreal.webp" alt="Five real-world polymer science workflows covered by PolyReal" loading="lazy"></a>
  </div>
  <div class="paper-box-text">
    <h3><a href="https://polyreal-benchmark.github.io/">PolyReal: A Benchmark for Real-World Polymer Science Workflows</a></h3>
    <p class="paper-authors">Wanhao Liu*, <strong><u>Weida Wang*</u></strong>, Jiaqing Xie, Suorong Yang, Jue Wang, Benteng Chen, Guangtao Mei, et al.</p>
    <div class="paper-actions">
      <a class="btn-link btn-paper" href="https://arxiv.org/abs/2604.02934">Paper</a>
      <a class="btn-link btn-hf" href="https://huggingface.co/datasets/wanhaoliu/PolyReal">🤗 HF</a>
      <a class="btn-link btn-scholar" href="https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=eQXqmG8AAAAJ&amp;citation_for_view=eQXqmG8AAAAJ:-f6ydRqryjwC"><i class="ai ai-google-scholar" aria-hidden="true"></i><span class="show_paper_citations" data="eQXqmG8AAAAJ:-f6ydRqryjwC">Scholar</span></a>
      <a class="btn-link btn-code" href="https://github.com/wanhaoliu/PolyReal">Code</a>
      <a href="#" class="btn-link btn-bib" data-bib-key="liu2026polyreal">BIB</a>
    </div>
    <ul class="paper-contribution"><li>A multimodal benchmark grounded in real polymer-science workflows, spanning laboratory safety, mechanism reasoning, raw-data analysis, and application exploration.</li></ul>
  </div>
</article>

<article class="paper-box publication-item">
  <div class="paper-box-image">
    <a href="https://ieeexplore.ieee.org/document/11434965/" aria-label="Read TRACK"><span class="paper-badge">TKDE 2026</span><img src="/images/publications/track.webp" alt="Overview of temporal decoupled kriging in TRACK" loading="lazy"></a>
  </div>
  <div class="paper-box-text">
    <h3><a href="https://ieeexplore.ieee.org/document/11434965/">TRACK: Temporal Decoupled Kriging for Inductive Spatio-Temporal Graph</a></h3>
    <p class="paper-authors">Jianping Zhou, <strong><u>Weida Wang</u></strong>, Bin Lu, Guanjie Zheng, Lei Bai, Xinbing Wang, Chenghu Zhou</p>
    <div class="paper-actions">
      <a class="btn-link btn-paper" href="https://ieeexplore.ieee.org/document/11434965/">Paper</a>
      <a class="btn-link btn-scholar" href="https://scholar.google.com/scholar?q=%22TRACK%3A+Temporal+Decoupled+Kriging+for+Inductive+Spatio-Temporal+Graph%22"><i class="ai ai-google-scholar" aria-hidden="true"></i>Scholar</a>
      <a class="btn-link btn-code" href="https://github.com/JeremyChou28/TRACK">Code</a>
      <a href="#" class="btn-link btn-bib" data-bib-key="zhou2026track">BIB</a>
    </div>
    <ul class="paper-contribution"><li>TRACK separates node-specific inherency from dynamic correlations to improve inductive spatio-temporal kriging across traffic and air-quality datasets.</li></ul>
  </div>
</article>

# 🏅 Honors and Awards
- *2023* National Scholarship (top 0.2% nation-wide)
- *2025* Outstanding Graduate Award of Shanghai
- *2022,2023,2024* Merit Student in Tongji University
- *2023* 🥇 Gold Medal of International Genetically Engineered Machine Competition (iGEM) AI & Software Track
- *2023* 🥇 First Prize of National Undergraduate Mathematics Competition (Non-mathematics Category)
- *2023* 🥇 First Prize of China Undergraduate Computer Design Competition (top 0.1% nation-wide)
- *2023* 🥈 Second Prize of China Collegiate Computing Contest HCI Innovation Competition (top 0.4% nation-wide)
- *2024* 🥉Third Prize of China Collegiate Computing Contest  Mobile Application Innovation Contest (top 1% nation-wide)
- *2023* 🥇 First Prize of HuaShu Cup National Undergraduate Mathematical Modeling Contest  (top 2% nation-wide)
- *2023* 🥈 Honorable Mention of Mathematical Contest in Modeling
- *2022* 🥇 First Prize of Undergraduate Mathematics Competition (Non-mathematics Category) in Shanghai

# 📖 Educations
- *2025-2030*, College of Computer Science and Artificial Intelligence, Fudan University, Shanghai, China
  - Supervised by [Prof. Wanli Ouyang](https://scholar.google.com/citations?hl=zh-CN&user=pw_0Z_UAAAAJ)


- *2021-2025*, School of Computer Science and Technology, Tongji University, Shanghai, China
  - Supervised by [AP. Jin Zeng](https://scholar.google.com/citations?hl=en&user=jBxf3FYAAAAJ) and [Prof. Lin Zhang](https://scholar.google.com/citations?hl=en&user=8VOk_S4AAAAJ)

# 💻 Internships
- *2026.08 - Present*, Agent System Center, Shanghai AI Laboratory [[link]](https://www.shlab.org.cn/)
- *2024.10 - 2026.08*, AI for Science Group, Shanghai AI Laboratory [[link]](https://www.shlab.org.cn/)
- *2023.07 - 2025.03*, Graph Signal Processing Lab, Tongji University
- *2023.11 - 2024.08*, Intelligent Internet of Things Research Center (IIOT), Shanghai Jiao Tong University [[link]](https://iiot.sjtu.edu.cn/#/)
- *2023.11 - 2024.03*, City Science Lab@Shanghai (MIT Media Lab) [[link]](https://www.media.mit.edu/projects/city-science-lab-shanghai/overview/)
- *2023.03 - 2024.03*, Key Laboratory of Geotechnical and Underground Engineering of the Ministry of Education, Tongji University [[link]](https://geokeylab.tongji.edu.cn/)
- *2023.07 - 2023.08*, Hundsun Technologies Inc. [[link]](https://en.hundsun.com/)

# 🧩 Projects

<div class="project-grid">
  <article class="project-card">
    <img src="/images/projects/long_imagitale.jpg" alt="ImagiTale application preview">
    <div><span class="project-label">Human–AI Interaction</span><h3><a href="https://www.bilibili.com/video/BV1FdHreAESo/">ImagiTale</a></h3><p>An AI-assisted interactive storybook for children, built for iPad with SwiftUI, speech interaction, visual segmentation, and personalized feedback.</p><p class="project-award">CCCC HCI 2023 · Best Innovation Award · National Second Prize</p></div>
  </article>
  <article class="project-card">
    <img src="/images/projects/igem.png" alt="CASleuth project preview">
    <div><span class="project-label">AI for Biology</span><h3><a href="https://2023.igem.wiki/tongji-software/">CASleuth — the Virus Detective</a></h3><p>An educational game and bioinformatics tool for CRISPR-Cas virus detection, created with the Tongji-Software iGEM team.</p><p class="project-award">iGEM 2023 · Gold Medal · Software &amp; AI Track</p></div>
  </article>
  <article class="project-card project-card--repository">
    <img src="/images/projects/how-claude-code-works.webp" alt="Architecture overview from How Claude Code Works">
    <div><span class="project-label">Agent Systems</span><h3><a href="https://github.com/Windy3f3f3f3f/how-claude-code-works">How Claude Code Works</a></h3><p>A deep dive into Claude Code internals, covering its architecture, agent loop, context engineering, and tool system.</p><p class="project-stars"><a class="project-stars__link js-github-stars" href="https://github.com/Windy3f3f3f3f/how-claude-code-works" data-github-repo="Windy3f3f3f3f/how-claude-code-works" data-stars-fallback="3650" aria-label="View how-claude-code-works on GitHub"><i class="fas fa-star" aria-hidden="true"></i> <span data-github-stars-count>3,650</span> stars</a></p></div>
  </article>
</div>



<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=V-15SBhVlTGZkkzGvASAzWa1Gz7gqKFjVUUDiBiDCaw&cl=ffffff&w=a"></script>
