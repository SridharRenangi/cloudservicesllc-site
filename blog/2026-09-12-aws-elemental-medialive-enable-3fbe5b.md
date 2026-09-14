---
title: "AWS Elemental MediaLive enables frame-accurate pipeline locking for streams without timecode"
date: "2026-09-12"
---

# AWS Elemental MediaLive enables frame-accurate pipeline locking for streams without timecode

<p>AWS Elemental MediaLive now supports Video Aligned Locking, a new feature to synchronize video pipelines without requiring timecode from the source. Previously, achieving frame-accurate locking across video outputs required investing in specialized hardware or managing complex, external synchronization workflows. While timecode is generally standard for highly produced, traditional broadcast content, it is often unavailable and difficult to manage in typical digital streaming workflows. The new capability uses visual signatures to automatically identify and align specific frames across multiple video streams, enabling customers to achieve frame-accurate input switching across standard pipeline channels, as well as linked, cross-region single-pipeline channels.</p> 
<p>Video Aligned Locking supports outputs including HLS, MediaPackage, CMAF Ingest, UDP and SRT. To learn more about how to configure this feature, visit the <a href="https://docs.aws.amazon.com/medialive/latest/ug/pipeline-locking-verify-input.html#pipeline-locking-video-alignment-inputs">Requirements for Video Aligned Locking</a> documentation. For a deeper dive into channel synchronization, visit the guide on <a href="https://docs.aws.amazon.com/medialive/latest/ug/pipeline-lock.html">Implementing Pipeline Locking</a>.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/09/medialive-pipeline-locking/)