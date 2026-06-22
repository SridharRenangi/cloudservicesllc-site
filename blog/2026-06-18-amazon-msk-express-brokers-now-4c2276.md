---
title: "Amazon MSK Express brokers now support Intelligent Rebalancing on existing clusters"
date: "2026-06-18"
---

# Amazon MSK Express brokers now support Intelligent Rebalancing on existing clusters

<p>Amazon MSK Provisioned clusters with Express brokers now support Intelligent Rebalancing on all existing clusters, at no additional cost. Previously available only on newly created clusters, Intelligent Rebalancing is now available on all MSK Provisioned clusters running Express brokers, making it effortless for customers to benefit from automatic partition balancing when scaling their Express-based clusters up or down.</p> 
<p>Intelligent Rebalancing maximizes the capacity utilization of MSK Express-based clusters by optimally rebalancing Kafka resources for better performance, eliminating the need for customers to manage partitions themselves or via third-party tools. Intelligent Rebalancing performs these operations up to 180 times faster compared to Standard brokers. Clusters are continuously monitored for resource imbalance or overload based on intelligent Amazon MSK defaults to maximize cluster performance. When required, brokers are efficiently scaled without affecting cluster availability for clients to produce and consume data.</p> 
<p>Intelligent Rebalancing is now available on all MSK Provisioned clusters with Express brokers in all AWS Regions where Express brokers are available. To learn more, see the <a href="https://docs.aws.amazon.com/msk/latest/developerguide/intelligent-rebalancing.html">Amazon MSK Developer Guide</a>.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-msk-express-intelligent/)