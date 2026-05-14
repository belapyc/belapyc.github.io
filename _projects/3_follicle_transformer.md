---
layout: page
title: IVF — Deep Learning for Follicle Growth and Trigger-Day Decisions
description: Transformer and ML methods for assisted reproduction in collaboration with Imperial College London.
img: assets/img/1.jpg
importance: 3
related_publications: false
---

A multi-year line of work in collaboration with **Prof. Waljit Dhillo's group at Imperial College London** and the **Wolfson Fertility Centre**, applying modern machine learning to assisted conception.

**Decoder-only transformer for follicle growth.** Traditional methods for predicting ovarian follicle growth rely on the clinically infeasible assumption of tracking individual follicles between ultrasound scans. We built a **decoder-only, GPT-style transformer** that autoregressively forecasts the _full follicle size distribution_ from sequential scan data — the first application of a transformer architecture to distribution-level follicle prediction. Trained on **28,125 IVF/ICSI cycles (2005–2023) from 11 clinics in the UK and Poland**, with a composite loss combining Earth Mover's Distance, Chi-Square, and Quadratic Chi-Square. Hyperparameters were optimised with Optuna. Manuscript in preparation.

**Explainable AI for trigger-day decisions.** With colleagues at Imperial we developed interpretable ML to determine the follicle sizes on the day of trigger that maximise mature oocyte yield, published in _Nature Communications_ and _Fertility & Sterility_.

**Earlier work** modelled follicular growth using agent-based artificial intelligence (_The Journal of Clinical Endocrinology & Metabolism_) and characterised endocrine requirements for oocyte maturation following hCG, GnRH agonist, and kisspeptin during IVF (_Frontiers in Endocrinology_).
