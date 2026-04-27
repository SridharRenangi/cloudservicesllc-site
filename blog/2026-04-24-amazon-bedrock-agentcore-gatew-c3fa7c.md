---
title: "Amazon Bedrock AgentCore Gateway and Identity support VPC egress"
date: "2026-04-24"
---

# Amazon Bedrock AgentCore Gateway and Identity support VPC egress

<p>Amazon Bedrock AgentCore Gateway and Identity now provide secure and controlled egress traffic management for your applications, enabling seamless communication with resources in your Virtual Private Cloud (VPC). VPC egress for AgentCore Gateway targets and Identity credential providers are offered in both managed and self-managed configurations.</p> 
<p>With VPC egress support, customers can now invoke private resources (e.g., EKS-hosted MCP servers) directly from their AgentCore Gateway. Managed VPC egress covers most customer use cases. For more complex networking setups, customers can configure their own VPC Lattice resources. AgentCore Identity VPC egress supports connectivity to Identity Providers (IdPs) running inside a customer’s VPC. This enables two key capabilities: validating inbound access tokens issued by your private IdP and fetching tokens from your IdP for outbound request authentication. Finally, this launch supports private DNS resolution for managed VPC egress resources across Gateway and Identity.</p> 
<p>AgentCore Gateway and Identity are available in<a>&nbsp;fourteen AWS Regions</a>: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Asia Pacific (Mumbai), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), and Europe (Stockholm).</p> 
<p>Learn more about VPC egress capabilities through AgentCore Gateway&nbsp;<a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-quick-start.html">documentation,</a> and AgentCore Identity <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity-private-idp.html">documentation</a>. Get started with the&nbsp;<a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-cli.html">AgentCore CLI</a>.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2024/04/agentcore-gateway-identity-vpc/)