---
layout: page
title: IVF — Deep Learning for Follicle Growth and Trigger-Day Decisions
description: Transformer and agent-based ML for assisted reproduction; collaboration with Imperial College London and Prof. Scott Nelson.
img: assets/img/proj_ivf.png
importance: 3
related_publications: false
---

A multi-year line of work in collaboration with **Prof. Waljit Dhillo's group at Imperial College London**, the **Wolfson Fertility Centre**, and **Prof. Scott Nelson** (University of Glasgow), applying modern machine learning to assisted conception.

**Agent-based AI for individual follicular growth (first-author, latest work).** I led the development of an **agent-based artificial intelligence** model that simulates the growth of *individual* follicles during ovarian stimulation — a technically novel approach that overcomes the limitations of population-level models. The framework lets clinicians forecast individualised final follicle profiles from sparse early-cycle scans, with direct implications for trigger-day timing and oocyte yield. Published in _The Journal of Clinical Endocrinology & Metabolism_ (Hramyka, Kelsey, Abbara, Hanassab, Nelson, Dhillo, et al.).

**Decoder-only transformer for follicle distribution prediction.** Traditional methods for predicting ovarian follicle growth rely on the clinically infeasible assumption of tracking individual follicles between ultrasound scans. We built a **decoder-only, GPT-style transformer** that autoregressively forecasts the _full follicle size distribution_ from sequential scan data — the first application of a transformer architecture to distribution-level follicle prediction. Trained on **28,125 IVF/ICSI cycles (2005–2023) from 11 clinics in the UK and Poland**, with a composite loss combining Earth Mover's Distance, Chi-Square, and Quadratic Chi-Square distance. Hyperparameters optimised with Optuna. Manuscript in preparation.

**Explainable AI for trigger-day decisions.** With colleagues at Imperial and Glasgow we developed interpretable ML to determine the follicle sizes on the day of trigger that maximise mature oocyte yield, published in _Nature Communications_ and _Fertility & Sterility_.

**Earlier work** characterised endocrine requirements for oocyte maturation following hCG, GnRH agonist, and kisspeptin during IVF (_Frontiers in Endocrinology_) and the use of anti-müllerian hormone in PCOS diagnosis.
