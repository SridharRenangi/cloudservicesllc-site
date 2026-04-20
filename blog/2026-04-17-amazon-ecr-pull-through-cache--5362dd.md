---
title: "Amazon ECR Pull Through Cache Now Supports Referrer Discovery and Sync"
date: "2026-04-17"
---

# Amazon ECR Pull Through Cache Now Supports Referrer Discovery and Sync

<p>Amazon Elastic Container Registry (Amazon ECR) now automatically discovers and syncs OCI referrers, such as image signatures, SBOMs, and attestations, from upstream registries into your Amazon ECR private repositories with its pull through cache feature.<br /> <br /> Previously,&nbsp;when you listed referrers on a repository with a matching pull through cache rule, Amazon ECR would not return or sync referrers from the upstream repository. This meant that you had to manually list and fetch the upstream referrers.<br /> <br /> With today's launch, Amazon ECR's pull through cache will now reach upstream during referrers API requests and automatically cache related referrer artifacts in your private repository. This enables end-to-end image signature verification, SBOM discovery, and attestation retrieval workflows to work seamlessly with pull through cache repositories without requiring any client-side workarounds.<br /> <br /> This feature is available today in all AWS Regions where Amazon ECR pull through cache is supported. To learn more, visit the&nbsp;<a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html">Amazon ECR documentation</a>.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ecr-pull-through-cache-referrers/)