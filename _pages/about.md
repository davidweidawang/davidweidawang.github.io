---
permalink: /
title: ""
excerpt: "Weida Wang — Ph.D. student at Fudan University working on scientific reasoning and AI for Science."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about-me"></span>

<section class="hero-intro">
  <p class="hero-eyebrow">Ph.D. Student · Fudan University · Shanghai AI Laboratory</p>
  <h1>Building reliable reasoning systems for scientific discovery.</h1>
  <p class="hero-lead">I am <strong>Weida Wang (王蔚达)</strong>, also known as David. My research sits at the intersection of large language model reasoning, scientific agents, and AI for physical science.</p>
  <div class="research-pills" aria-label="Research interests">
    <span>LLM Reasoning</span>
    <span>Scientific Agents</span>
    <span>AI for Chemistry</span>
    <span>AI for Physics &amp; Materials</span>
  </div>
  <div class="hero-actions">
    <a class="action-link action-link--primary" href="mailto:tjudavidwang@gmail.com"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
    <a class="action-link" href="https://github.com/davidweidawang"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
    <a class="action-link" href="https://scholar.google.com/citations?hl=zh-CN&amp;user=eQXqmG8AAAAJ"><i class="ai ai-google-scholar" aria-hidden="true"></i> Scholar</a>
    <a class="action-link" href="https://huggingface.co/weidawang">🤗 Hugging Face</a>
    <a class="action-link" href="https://orcid.org/0009-0005-5893-525X"><i class="ai ai-orcid" aria-hidden="true"></i> ORCID</a>
  </div>
</section>

I am a first-year Ph.D. student at the [College of Computer Science and Artificial Intelligence, Fudan University](https://cs.fudan.edu.cn/), advised by [Prof. Wanli Ouyang](https://scholar.google.com/citations?user=pw_0Z_UAAAAJ). I also conduct AI for Science research with the [Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/).

Before joining Fudan, I received my B.Eng. in Software Engineering from [Tongji University](https://cs.tongji.edu.cn/) in 2025, where I worked with [Prof. Jin Zeng](https://scholar.google.com/citations?user=jBxf3FYAAAAJ), [Prof. Lin Zhang](https://scholar.google.com/citations?user=8VOk_S4AAAAJ), and [Prof. Guanjie Zheng](https://scholar.google.com/citations?user=jJpqDQIAAAAJ). My current work asks how language models can reason faithfully, use scientific tools, and move from benchmark problem solving toward practical scientific workflows.

<div class="collaboration-note"><strong>Collaboration.</strong> I am always happy to discuss LLM reasoning and AI for Science. If our interests overlap, please feel free to <a href="mailto:tjudavidwang@gmail.com">get in touch</a>.</div>

# News

<div class="news-list" role="list">
  <div class="news-item" role="listitem"><time>2026.08</time><p><a href="https://doi.org/10.1145/3770855.3818854"><strong>Chem-R</strong></a> and <a href="https://doi.org/10.1145/3770855.3817473"><strong>Speak-to-Structure (S²-Bench)</strong></a> were published at <strong>KDD 2026</strong>. See you in Jeju!</p></div>
  <div class="news-item" role="listitem"><time>2026.08</time><p>Released <a href="https://arxiv.org/abs/2608.23104"><strong>Molecular LLM Agents</strong></a>, a framework and autonomy ladder for molecular-science agents.</p></div>
  <div class="news-item" role="listitem"><time>2026.07</time><p>Released two studies on molecular reasoning: <a href="https://arxiv.org/abs/2607.20935">Chemical Chain-of-Thought</a> and <a href="https://arxiv.org/abs/2607.01800">Molecular Generalization</a>.</p></div>
  <div class="news-item" role="listitem"><time>2026.07</time><p><a href="https://aclanthology.org/2026.acl-long.990/"><strong>Step-GRPO</strong></a> appeared at <strong>ACL 2026</strong>.</p></div>
  <div class="news-item" role="listitem"><time>2026.05</time><p><a href="https://doi.org/10.1109/TKDE.2026.3674348"><strong>TRACK</strong></a> was published in <strong>IEEE TKDE</strong>.</p></div>
  <div class="news-item" role="listitem"><time>2026.04</time><p><a href="https://polyreal-benchmark.github.io/"><strong>PolyReal</strong></a>, a benchmark grounded in real polymer-science workflows, appeared at <strong>CVPR 2026</strong>.</p></div>
  <div class="news-item" role="listitem"><time>2026.01</time><p><a href="https://openreview.net/forum?id=3d0FRYx0D0"><strong>CMPhysBench</strong></a> was accepted to <strong>ICLR 2026</strong>.</p></div>
  <div class="news-item" role="listitem"><time>2025.10</time><p><a href="https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Consistent_Time-of-Flight_Depth_Denoising_via_Graph-Informed_Geometric_Attention_ICCV_2025_paper.html"><strong>GIGA-ToF</strong></a> appeared at <strong>ICCV 2025</strong>.</p></div>
</div>

# Selected Publications

<p class="section-intro">Selected work organized around my current research agenda. <strong>*</strong> denotes equal contribution.</p>

## Scientific Reasoning &amp; Agents

<article class="publication-card">
  <div class="publication-meta"><span class="venue-badge venue-badge--blue">KDD 2026</span><span>AI for Chemistry</span></div>
  <h3><a href="https://doi.org/10.1145/3770855.3818854">Chem-R: Learning to Reason as a Chemist</a></h3>
  <p class="publication-authors"><strong><u>Weida Wang*</u></strong>, Benteng Chen*, Di Zhang*, Wanhao Liu, Shuchen Pu, Ben Gao, Jin Zeng, et al.</p>
  <p class="publication-summary">A three-stage post-training framework that equips language models with chemical foundations, expert-like reasoning protocols, and balanced multi-task reasoning.</p>
  <div class="publication-links"><a href="https://doi.org/10.1145/3770855.3818854">Paper</a><a href="https://github.com/davidweidawang/Chem-R">Code</a><a href="https://huggingface.co/weidawang/Chem-R-8B">Model</a></div>
</article>

<article class="publication-card">
  <div class="publication-meta"><span class="venue-badge venue-badge--blue">ICLR 2026</span><span>AI for Physics</span></div>
  <h3><a href="https://openreview.net/forum?id=3d0FRYx0D0">CMPhysBench: A Benchmark for Evaluating Large Language Models in Condensed Matter Physics</a></h3>
  <p class="publication-authors"><strong><u>Weida Wang*</u></strong>, Dongchen Huang*, Jiatong Li*, Tengchao Yang*, Ziyang Zheng*, Chuyi Peng, et al.</p>
  <p class="publication-summary">A calculation-focused benchmark with more than 520 graduate-level problems and a fine-grained expression-based scoring protocol.</p>
  <div class="publication-links"><a href="https://arxiv.org/abs/2508.18124">Paper</a><a href="https://github.com/CMPhysBench/CMPhysBench">Code</a><a href="https://huggingface.co/datasets/weidawang/CMPhysBench">Dataset</a></div>
</article>

<article class="publication-card">
  <div class="publication-meta"><span class="venue-badge venue-badge--blue">KDD 2026</span><span>Molecule Generation</span></div>
  <h3><a href="https://doi.org/10.1145/3770855.3817473">Speak-to-Structure: Evaluating LLMs in Open-domain Natural Language-Driven Molecule Generation</a></h3>
  <p class="publication-authors">Jiatong Li, Junxian Li, <strong><u>Weida Wang</u></strong>, Yunqing Liu, Changmeng Zheng, Yatao Bian, Dongzhan Zhou, Xiao-Yong Wei, Qing Li</p>
  <p class="publication-summary">S²-Bench evaluates open-ended molecular editing, optimization, and customized generation rather than single-answer retrieval.</p>
  <div class="publication-links"><a href="https://arxiv.org/abs/2412.14642">Paper</a><a href="https://huggingface.co/datasets/phenixace/S2-TOMG-Bench">Dataset</a></div>
</article>

<article class="publication-card">
  <div class="publication-meta"><span class="venue-badge venue-badge--blue">CVPR 2026</span><span>Scientific Workflows</span></div>
  <h3><a href="https://polyreal-benchmark.github.io/">PolyReal: A Benchmark for Real-World Polymer Science Workflows</a></h3>
  <p class="publication-authors">Wanhao Liu*, <strong><u>Weida Wang*</u></strong>, Jiaqing Xie, Suorong Yang, Jue Wang, Benteng Chen, et al.</p>
  <p class="publication-summary">A multimodal benchmark spanning laboratory safety, mechanism reasoning, raw-data analysis, and application exploration in polymer science.</p>
  <div class="publication-links"><a href="https://arxiv.org/abs/2604.02934">Paper</a><a href="https://github.com/wanhaoliu/PolyReal">Code</a><a href="https://huggingface.co/datasets/wanhaoliu/PolyReal">Dataset</a></div>
</article>

## Efficient &amp; Structured Reasoning

<article class="publication-card">
  <div class="publication-meta"><span class="venue-badge venue-badge--violet">ACL 2026</span><span>Efficient Reasoning</span></div>
  <h3><a href="https://aclanthology.org/2026.acl-long.990/">Step-GRPO: Internalizing Dynamic Early Exit for Efficient Reasoning</a></h3>
  <p class="publication-authors">Benteng Chen*, <strong><u>Weida Wang*</u></strong>, Shufei Zhang, Mingbao Lin, Min Zhang</p>
  <p class="publication-summary">A step-aware reinforcement-learning method that internalizes early exit and reduces redundant reasoning without an inference-time controller.</p>
  <div class="publication-links"><a href="https://aclanthology.org/2026.acl-long.990/">Paper</a><a href="https://arxiv.org/abs/2604.16890">arXiv</a></div>
</article>

<article class="publication-card">
  <div class="publication-meta"><span class="venue-badge venue-badge--violet">ICCV 2025</span><span>Geometric Learning</span></div>
  <h3><a href="https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Consistent_Time-of-Flight_Depth_Denoising_via_Graph-Informed_Geometric_Attention_ICCV_2025_paper.html">Consistent Time-of-Flight Depth Denoising via Graph-Informed Geometric Attention</a></h3>
  <p class="publication-authors"><strong><u>Weida Wang*</u></strong>, Changyong He*, Jin Zeng, Di Qiu</p>
  <p class="publication-summary">GIGA-ToF uses motion-invariant graph fusion to improve both temporal stability and spatial sharpness in depth video.</p>
  <div class="publication-links"><a href="https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Consistent_Time-of-Flight_Depth_Denoising_via_Graph-Informed_Geometric_Attention_ICCV_2025_paper.html">Paper</a><a href="https://github.com/davidweidawang/GIGA-ToF">Code</a></div>
</article>

<article class="publication-card">
  <div class="publication-meta"><span class="venue-badge venue-badge--violet">IEEE TKDE 2026</span><span>Spatio-temporal Learning</span></div>
  <h3><a href="https://doi.org/10.1109/TKDE.2026.3674348">TRACK: Temporal Decoupled Kriging for Inductive Spatio-Temporal Graph</a></h3>
  <p class="publication-authors">Jianping Zhou, <strong><u>Weida Wang</u></strong>, Bin Lu, Guanjie Zheng, Lei Bai, Xinbing Wang, Chenghu Zhou</p>
  <p class="publication-summary">A temporal-decoupling approach that separates node-specific properties from dynamic correlations for inductive spatio-temporal kriging.</p>
  <div class="publication-links"><a href="https://doi.org/10.1109/TKDE.2026.3674348">Paper</a><a href="https://github.com/JeremyChou28/TRACK">Code</a></div>
</article>

## Recent Preprints

<div class="compact-publications">
  <p><span>2026.08</span> <a href="https://arxiv.org/abs/2608.23104"><strong>Molecular LLM Agents: From Architectural Design to Scientific Autonomy</strong></a><br>Jiatong Li, Wengyu Zhang, <u>Weida Wang</u>, Yuxuan Ren, et al.</p>
  <p><span>2026.07</span> <a href="https://arxiv.org/abs/2607.20935"><strong>Chemical Chain-of-Thought Functions as a Hallucination-Prone Molecular Scratchpad</strong></a><br>Jiatong Li, Yuxuan Ren, <u>Weida Wang</u>, Xiaoyong Wei, Yatao Bian</p>
  <p><span>2026.07</span> <a href="https://arxiv.org/abs/2607.01800"><strong>Do LLMs Truly Generalize in the Molecular Domain? A Perturbation-Based Analysis</strong></a><br>Jiatong Li, <u>Weida Wang</u>, Changmeng Zheng, Shufei Zhang, et al.</p>
  <p><span>2026.05</span> <a href="https://arxiv.org/abs/2605.29833"><strong>OmniMatBench: A Human-Calibrated Multimodal Reasoning Benchmark Across 19 Materials Science Subfields</strong></a><br>Wanhao Liu, Jiaqing Xie, Qian Tan, <u>Weida Wang</u>, et al.</p>
  <p><span>2026.05</span> <a href="https://arxiv.org/abs/2605.02351"><strong>MolViBench: Evaluating LLMs on Molecular Vibe Coding</strong></a><br>Jiatong Li, Yuxuan Ren, <u>Weida Wang</u>, Changmeng Zheng, et al.</p>
</div>

# Education &amp; Experience

<div class="timeline">
  <div class="timeline-item"><div class="timeline-date">2025 — 2030</div><div><h3>Fudan University</h3><p>Ph.D. in Computer Science and Technology · Advisor: <a href="https://scholar.google.com/citations?user=pw_0Z_UAAAAJ">Prof. Wanli Ouyang</a></p></div></div>
  <div class="timeline-item"><div class="timeline-date">2024 — Present</div><div><h3>Shanghai Artificial Intelligence Laboratory</h3><p>Research Intern · AI for Science / OpenScienceLab</p></div></div>
  <div class="timeline-item"><div class="timeline-date">2021 — 2025</div><div><h3>Tongji University</h3><p>B.Eng. in Software Engineering · Advisors: <a href="https://scholar.google.com/citations?user=jBxf3FYAAAAJ">Prof. Jin Zeng</a> and <a href="https://scholar.google.com/citations?user=8VOk_S4AAAAJ">Prof. Lin Zhang</a></p></div></div>
</div>

<details class="earlier-experience">
  <summary>Earlier research experience</summary>
  <ul>
    <li><strong>Graph Signal Processing Lab, Tongji University</strong> · 2023.07–2025.03</li>
    <li><strong>Intelligent Internet of Things Research Center, Shanghai Jiao Tong University</strong> · 2023.11–2024.08</li>
    <li><strong>City Science Lab@Shanghai, MIT Media Lab</strong> · 2023.11–2024.03</li>
    <li><strong>Key Laboratory of Geotechnical and Underground Engineering, Tongji University</strong> · 2023.03–2024.03</li>
    <li><strong>Hundsun Technologies</strong> · 2023.07–2023.08</li>
  </ul>
</details>

# Selected Honors

<div class="honors-grid">
  <div><span>2025</span><strong>Outstanding Graduate of Shanghai</strong></div>
  <div><span>2023</span><strong>National Scholarship</strong></div>
  <div><span>2023</span><strong>iGEM Gold Medal · AI &amp; Software Track</strong></div>
  <div><span>2023</span><strong>First Prize · China Undergraduate Computer Design Competition</strong></div>
  <div><span>2023</span><strong>Second Prize · China Collegiate Computing Contest HCI Innovation Competition</strong></div>
  <div><span>2024</span><strong>Third Prize · China Collegiate Computing Contest Mobile Application Innovation Competition</strong></div>
  <div><span>2023</span><strong>First Prize · National Undergraduate Mathematics Competition</strong></div>
  <div><span>2022–2024</span><strong>Merit Student · Tongji University</strong></div>
</div>

# Selected Projects

<div class="project-grid">
  <article class="project-card">
    <img src="/images/projects/long_imagitale.jpg" alt="ImagiTale application preview">
    <div><span class="project-label">Human–AI Interaction</span><h3><a href="https://www.bilibili.com/video/BV1FdHreAESo/">ImagiTale</a></h3><p>An AI-assisted interactive storybook for children, built for iPad with SwiftUI, speech interaction, visual segmentation, and personalized feedback.</p><p class="project-award">CCCC HCI 2023 · Best Innovation Award · National Second Prize</p></div>
  </article>
  <article class="project-card">
    <img src="/images/projects/igem.png" alt="CASleuth project preview">
    <div><span class="project-label">AI for Biology</span><h3><a href="https://2023.igem.wiki/tongji-software/">CASleuth — the Virus Detective</a></h3><p>An educational game and bioinformatics tool for CRISPR-Cas virus detection, created with the Tongji-Software iGEM team.</p><p class="project-award">iGEM 2023 · Gold Medal · Software &amp; AI Track</p></div>
  </article>
</div>

<p class="page-updated">Last updated: August 2026.</p>
