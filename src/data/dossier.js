export const coursework = [
  {
    id: 'aiml-core',
    title: 'Core AIML — Models from Scratch',
    tag: 'Classical ML · 7 notebooks',
    items: [
      'Linear Regression (NumPy, batch GD, MSE, R² overlays)',
      'PCA via eigendecomposition + K-Means from scratch',
      'LightGBM multiclass with stratified K-fold, log-loss, confusion matrices',
      '5-class flowers: custom CNN vs VGG16 / ResNet50 / ViT',
      'Cats-vs-Dogs PyTorch CNN with augmentation + early stopping',
      'Shakespeare generation: char embeddings, LSTM/GRU/BiRNN, temperature sampling',
      'TinyML keyword spotting: INT8 TFLite, 13,700 params, 53.5 KB',
    ],
  },
  {
    id: 'dl-lab',
    title: 'Deep Learning Labs',
    tag: 'PyTorch · Apple MPS',
    items: [
      'Butterfly small-data curation (Canny edge-density filter) — ≈96% val, 30/30 held-out',
      'Diabetes MLP (Pima, leak-free imputation, recall-first) — Acc 0.747 · Recall 0.862 · F1 0.719 · AUC 0.851',
      'Blood-cell 8-class: custom ResNet 98.75% vs HOG+SVM baselines; CLAHE, pHash dedup, AdamW + cosine',
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI & Multimodal',
    tag: 'VAE · CLIP · GAN',
    items: [
      'Conv VAE on MNIST (16-D latent, KL annealing, interpolations)',
      'FER2013 ethics study: MLP ≈0.37 vs CNN ≈0.55, macro-F1 0.43 — documented no-deploy stance',
      'CLIP ViT-B/16+B/32 zero-shot + Flickr30k adapters (Recall@K) + Fashion-MNIST DCGAN',
    ],
  },
  {
    id: 'data-stats',
    title: 'Data Science & Statistics (R / Quarto)',
    tag: 'Tidyverse · ggplot2',
    items: [
      'Tidy-data + Wilcoxon rank-sum on cricket / board-game mess',
      'Log-linear regression and market modelling with prediction intervals',
    ],
  },
  {
    id: 'cs-algo',
    title: 'Computer Science & Algorithms',
    tag: 'Python · SQL',
    items: ['Algorithmic problem sets, complexity analysis and SQL query workflows.'],
  },
  {
    id: 'cyber-labs',
    title: 'Cybersecurity Labs & SOC',
    tag: 'Splunk · Sysmon · Wazuh',
    items: [
      'SIEM hunting, Sysmon telemetry, HIDS/FIM rules mapped to MITRE ATT&CK.',
      'Nmap/SNMP enumeration and hardening exercises.',
    ],
  },
  {
    id: 'robotics-iot',
    title: 'Robotics, Embedded & IoT',
    tag: 'ROS · RealSense · Jetson',
    items: [
      'ROS/rospy nodes, RealSense D435 RGB-D, Jetson Xavier NX experiments.',
      'Godot 4 game systems, FastAPI telemetry bridges, Dynamixel servos.',
    ],
  },
  {
    id: 'uiux-pm',
    title: 'UI/UX, Web, Project Management & Policy',
    tag: 'Figma · PMBOK · NIST AI RMF',
    items: [
      'Figma UCD flows, WCAG 2.1 testing, WBS/risk registers, design-thinking surveys.',
      'Responsible-AI: fairness audits, EU AI Act mapping, C2PA provenance, human-in-the-loop.',
      'Exploratory Android and quantum-computing work.',
    ],
  },
]

export const skills = [
  { domain: 'Programming & Query', items: ['Python', 'TypeScript', 'JavaScript', 'Swift/SwiftUI', 'C/C++', 'R', 'SQL', 'GDScript'], accent: ['Python', 'TypeScript', 'Swift/SwiftUI'] },
  { domain: 'Classical ML', items: ['LightGBM', 'Gradient Boosting', 'Huber', 'PCA', 'K-Means', 'Stratified K-Fold', 'ROC-AUC', 'F1/Macro-F1'], accent: ['LightGBM', 'Gradient Boosting'] },
  { domain: 'Deep Learning', items: ['PyTorch', 'Apple MLX', 'Metal GPU', 'TensorFlow', 'Qwen2-VL 4-bit', 'DeepLabV3+', 'YOLOv8', 'ViT', 'VAE', 'TFLite'], accent: ['PyTorch', 'Apple MLX', 'Qwen2-VL 4-bit'] },
  { domain: 'RL & LLMs', items: ['PPO', 'DPO', 'SFT', 'Reward Modeling', 'GAE', 'KL Penalties', 'RAG', 'Prompt Eng.'], accent: ['PPO', 'DPO', 'Reward Modeling'] },
  { domain: 'Computer Vision', items: ['OpenCV', 'RGB-D', 'NAFNet', 'Segmentation', 'Detection/Tracking', 'CLAHE', 'CLIP', '3D Geometry'], accent: ['OpenCV', 'RGB-D', 'NAFNet'] },
  { domain: 'Speech & Audio', items: ['wav2vec2', 'faster-whisper', 'SpeechT5 + HiFi-GAN', 'OmniVoice', 'YuE', 'Edge TTS', 'MFCC', 'InfoNCE'], accent: ['wav2vec2', 'faster-whisper', 'SpeechT5 + HiFi-GAN'] },
  { domain: 'Web & Full-Stack', items: ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'WebGL2', 'Express', 'MongoDB', 'MV3 Extensions', 'JSZip', 'IndexedDB', 'Web Audio'], accent: ['React 19', 'TypeScript', 'WebGL2'] },
  { domain: 'Web3 & Crypto', items: ['web3.js', 'Wallet Integration', 'NFT Marketplaces', 'PBKDF2-HMAC-SHA256', 'Stateless KDF'], accent: ['web3.js', 'PBKDF2-HMAC-SHA256'] },
  { domain: 'Robotics & Embedded', items: ['Raspberry Pi', 'Arduino/PID', 'ESP32-CAM', 'ROS', 'RealSense', 'Jetson'], accent: ['Raspberry Pi', 'Arduino/PID', 'ROS'] },
  { domain: 'Desktop & Games', items: ['SwiftUI', 'AppKit', 'PyQt6', 'AppleScript', 'Godot 4', 'WebGL Shaders'], accent: ['SwiftUI', 'Godot 4'] },
  { domain: 'Security & SOC', items: ['Splunk', 'Sysmon', 'Wazuh HIDS', 'MITRE ATT&CK', 'Log4Shell', 'NIST CSF', 'ISO 27001', 'ACSC E8'], accent: ['Splunk', 'Wazuh HIDS', 'NIST CSF'] },
  { domain: 'Data & Research', items: ['R Tidyverse', 'Quarto', 'ggplot2', 'Hypothesis Testing', 'Lit. Synthesis', 'Paper Writing'], accent: ['R Tidyverse', 'Quarto'] },
  { domain: 'Engineering Practice', items: ['Git/GitHub', 'TDD', 'Atomic Commits', 'Deterministic Seeds', 'Checkpointing', 'Kaggle GPUs', 'LaTeX'], accent: ['Git/GitHub'] },
  { domain: 'PM & UI/UX', items: ['Figma', 'UCD', 'PMBOK', 'WBS', 'Risk Registers', 'WCAG 2.1', 'Usability Testing'], accent: ['Figma', 'UCD'] },
  { domain: 'Responsible AI', items: ['Fairness Audits', 'NIST AI RMF', 'EU AI Act', 'C2PA', 'Human-in-the-Loop'], accent: ['NIST AI RMF', 'Fairness Audits'] },
]

export const experience = [
  {
    role: 'UI/UX Intern — Web Synergies',
    period: 'Sep 2023 – Nov 2023 · Hyderabad / Remote',
    desc: 'Client deliverables with senior designers and front-end teams: research protocols, journey maps, high-fidelity Figma, usability testing, WCAG 2.1.',
  },
  {
    role: 'Data Science / AI-ML & Robotics Pitch Intern — Vistan Nextgen',
    period: 'Jul 2024 – Sep 2024 · Hyderabad',
    desc: 'Applied data-science and AI/ML contributions, plus live technical demos and pitches for the company’s robotics products.',
  },
  {
    role: 'Web Development Intern — Infidata Technologies',
    period: 'Training + project work',
    desc: 'HTML/CSS/JS, AngularJS, Bootstrap, PHP/MySQL, SDLC and cross-browser testing.',
  },
  {
    role: 'Consumer Electronics Associate — Reliance Digital',
    period: 'Bengaluru, India',
    desc: 'Front-line advice across phones, computing, audio and smart-home IoT; specs, warranties and post-sales support.',
  },
  {
    role: 'Leadership & Community',
    period: 'University of Adelaide',
    desc: 'AUSA/YouX crew volunteer (logistics, pop-ups); FORCE club event photographer; Behance UI/UX cases.',
    link: { label: 'Behance', url: 'https://www.behance.net/gallery/184968613/my-UIUX-portfolio' },
  },
]

export const profiles = [
  { id: 1, title: 'Machine Learning Researcher', desc: 'Lettuce biomass, accent-adaptive speech, RLHF PPO vs DPO, voice cloning, YuE music generation.' },
  { id: 2, title: 'Computer Vision & Multimodal Engineer', desc: 'Qwen2-VL screen agent, deblur + YOLOv8, RGB-D segmentation, CLIP adapters, WebGL photo editing.' },
  { id: 3, title: 'macOS, Desktop & Systems Engineer', desc: 'Agent Hub, Notch, Clicky MLX agent, DetPass iOS, Roolie PID robot.' },
  { id: 4, title: 'Full-Stack & Web Developer', desc: 'Secret Password Generator (Chrome Web Store), Roots archive, Pixo NFT marketplace, Lightroom-style web editor.' },
  { id: 5, title: 'Cybersecurity & Responsible AI', desc: 'PBKDF2 password design, Log4Shell post-mortem, aged-care risk assessment, Wazuh/Splunk, NIST AI RMF.' },
  { id: 6, title: 'Games & Creative Tech', desc: 'Techtopia (Godot 4), PixelAnimate UV shaders, recipe posters.' },
]
