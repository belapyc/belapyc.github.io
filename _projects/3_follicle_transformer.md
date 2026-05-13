---
layout: page
title: Decoder-only Transformer for Follicle Growth
description: A GPT-style transformer that predicts full follicle size distributions during IVF.
img: assets/img/1.jpg
importance: 3
category: past
related_publications: false
---

Traditional methods for predicting ovarian follicle growth rely on the clinically infeasible assumption of tracking individual follicles between ultrasound scans. We instead built a **decoder-only, GPT-style transformer** that autoregressively forecasts the *full follicle size distribution* from sequential scan data — the first application of a transformer architecture to distribution-level follicle prediction.

The model was trained on **28,125 IVF/ICSI cycles (2005–2023) from 11 clinics in the UK and Poland**, with a composite loss combining Earth Mover's Distance, Chi-Square, and Quadratic Chi-Square. Hyperparameters were optimised with Optuna.

Manuscript in preparation. This work originated during my PhD at the University of St Andrews and is a collaboration with the Wolfson Fertility Centre, Imperial College London.
