---
title: "Amazon EC2 Dedicated Hosts now support host resource groups without self-managed licenses"
date: "2026-07-24"
---

# Amazon EC2 Dedicated Hosts now support host resource groups without self-managed licenses

<p>Starting today, customers can create Host Resource Groups (HRGs) for EC2 Dedicated Hosts without the previously required step of creating Self-Managed Licenses (SMLs) and associating AMIs through AWS License Manager.</p> 
<p>This flexibility is particularly valuable for EC2 Mac Instance customers and for customers who need Dedicated Hosts for hardware-level isolation rather than Bring Your Own License (BYOL). Customers with BYOL workloads can continue to create HRGs with SMLs to ensure that only instances from associated AMIs can be launched on the host and track host-level license consumption.</p> 
<p>To create an HRG without SML, uncheck the "Restrict to AMIs associated with self-managed license" option when creating a Host Resource Group in the EC2 Console, or set instance-launch-option to license-configuration-required via the AWS CLI.</p> 
<p>This feature is available in all AWS Regions where Host Resource Groups are supported. To learn more, visit the <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/host-resource-groups.html">Host Resource Group User Guide</a></p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/07/ec2-dedicated-hosts-hrg/)