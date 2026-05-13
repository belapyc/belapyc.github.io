---
layout: page
title: Transformer Posterior Estimator (TPE)
description: Amortised Bayesian calibration of cancer microsimulation models using transformers.
img: assets/img/3.jpg
importance: 2
category: current
related_publications: false
---

The **Transformer Posterior Estimator (TPE)** is a transformer-based amortised posterior estimator with age-window masking — a capability unavailable in conventional sequential methods.

On a 48-cell oracle benchmark covering four cancers, three model complexities (4/6/8-state), and four methods (IMABC, BayCANN, PNPE, TPE), TPE matches or beats sequential methods at one-shot amortised cost: a single training run versus per-cell calibration.

The work also delivers a cross-method benchmark showing that **identifiability is a model–data property, consistent across inference methods on the same oracle data — not a method artefact**, and that identifiability degrades systematically with model complexity.

Paper in preparation; target: *Medical Decision Making*.
