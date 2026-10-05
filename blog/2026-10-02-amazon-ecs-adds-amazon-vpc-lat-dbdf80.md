---
title: "Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments"
date: "2026-10-02"
---

# Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments

<p><a href="https://aws.amazon.com/ecs/" rel="noopener noreferrer" target="_blank">Amazon Elastic Container Service</a> (Amazon ECS) now supports built-in blue/green, linear, and canary deployment strategies for ECS services using <a href="https://aws.amazon.com/vpc/lattice/" target="_blank">Amazon VPC Lattice</a>. Applications that use VPC Lattice for service-to-service communication across VPCs and AWS accounts can now take advantage of managed traffic shifting natively from Amazon ECS when rolling out updates.</p>
<p>With this launch, ECS customers using VPC Lattice can shift traffic in a controlled manner during deployments, choosing how quickly traffic moves based on their confidence in each release: all at once with blue/green, in equal increments with linear, or starting with a small percentage with canary. Teams can validate new versions with test traffic before shifting production traffic, and run custom validation steps or manual approvals with deployment lifecycle hooks, including Lambda and pause hooks. These services can also use Amazon CloudWatch alarms and the Amazon ECS deployment circuit breaker to automatically roll back deployments if issues are detected, with bake time keeping the previous version ready for a quick rollback without downtime.</p>
<p>To get started, select your VPC Lattice target groups, listener rule, and preferred deployment strategy in the ECS service configuration using the AWS Management Console, AWS CLI, AWS SDKs, or Infrastructure-as-Code tools. This functionality can be enabled for both new and existing ECS services in all AWS <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/" rel="noopener noreferrer" target="_blank">Regions</a> where VPC Lattice is available. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/vpc-lattice-resources-for-blue-green.html" rel="noopener noreferrer" target="_blank">Amazon ECS deployments with VPC Lattice</a>.
 <br /></p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)