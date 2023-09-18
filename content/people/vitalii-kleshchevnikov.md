---
bg_image: images/bg.jpg
category: Speakers
description: 
draft: false
image: images/people/vitalii-kleshchevnikov.jpg
information:
- info: "NGSchool2023"
  label: Events
- info: speaker
  label: Role
- info: "Wellcome Sanger Institute, United Kingdom"
  label: Affiliation
title: Vitalii Kleshchevnikov
---

Cell identity drives cell-cell communication and tissue architecture and is in return regulated by cell extrinsic cues. Cell identity is determined by the combination of intrinsic developmentally established transcription factor use (TF) and constitutive as well as cell communication-dependent TF activities. We developed two probabilistic models that advance the understanding of these processes using single-cell and spatial genomic data.

Spatial transcriptomic technologies promise to resolve cellular wiring diagrams of tissues in health and disease, but comprehensive mapping of cell types in situ remains a challenge. We present cell2location, a Bayesian model that can resolve fine-grained cell types in spatial transcriptomic data and create comprehensive cellular maps of diverse tissues. Cell2location accounts for technical sources of variation and borrows statistical strength across locations, thereby enabling the integration of single cell and spatial transcriptomics with higher sensitivity and resolution than existing tools. We assess cell2location in three different tissues and demonstrate improved mapping of fine-grained cell types. Collectively our results present cell2location as a versatile analysis tool for mapping tissue architectures in a comprehensive
manner.

Cell identity and plasticity is regulated by a combinatorial code mediated by transcription factors and the cell communication environment. Systematically dissecting how the regulatory code robustly defines the vast complexity of cell populations across tissues is a long-standing challenge. Measured using the assay for transposase-accessible chromatin with sequencing (ATAC-seq), DNA accessibility provides a readout of intermediate gene regulation steps at single-cell resolution. Existing methods address one or several subproblems of modelling DNA accessibility. We are missing an end-to-end mechanistic model that represents all steps of the biological process, that generalises to both new DNA sequences and TF abundance combinations and can simultaneously characterise hundreds to thousands of cell states observed in single-cell genomics atlases. To address this, we formulated cell2state, a mechanistic end-to-end probabilistic model of TF recruitment to a chromatin locus and downstream TF effect on DNA accessibility. Cell2state outperforms the state-of-the-art deep learning models and enables simulating the possible chromatin states given TF abundance of source cell types.
