---
title: "Amazon CloudWatch pipelines now supports drop and conditional processing"
date: "2026-04-10"
---

# Amazon CloudWatch pipelines now supports drop and conditional processing

<p>Amazon CloudWatch pipelines now supports conditional processing and a new drop events processor, giving you more control over how your log data is transformed. CloudWatch pipelines is a fully managed service that ingests, transforms, and routes log data to CloudWatch without requiring you to manage infrastructure. Until now, processors applied to all log entries uniformly. With conditional processing, you can define rules that determine when a processor runs and which individual log entries it acts on, so you only transform the data that matters.</p> 
<p>Conditional processing is available across 21 processors including Add Entries, Delete Entries, Copy Values, Grok, Rename Key, and more. For each processor, you can set a "run when" condition to skip the entire processor if the condition is not met, or an entry-level condition to control whether each individual action within the processor is applied. The new Drop Events processor lets you filter out unwanted log entries from third-party pipeline connectors based on conditions you define, helping reduce noise and lower costs.</p> 
<p>Conditional processing and the Drop Events processor are available at no additional cost in all AWS Regions where CloudWatch pipelines is generally available. Standard CloudWatch Logs ingestion and storage rates still apply.</p> 
<p>To get started, visit the CloudWatch pipelines page in the Amazon CloudWatch console. To learn more, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html">CloudWatch pipelines documentation</a>.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-pipelines-conditional/)