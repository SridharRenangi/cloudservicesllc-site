---
title: "Amazon Bedrock AgentCore Memory now supports flexible namespace variables"
date: "2026-08-28"
---

# Amazon Bedrock AgentCore Memory now supports flexible namespace variables

<p>Amazon Bedrock AgentCore Memory now lets developers define flexible namespace variables to scope long-term memories along any application-specific dimension - such as organization, tenant, team, or environment - without creating duplicate strategies or overloading built-in variables. This gives multi-tenant and complex-hierarchy applications fine-grained control over how memories are organized, isolated, and accessed.<br /> <br /> Define keys on the memory resource, reference them in a strategy's namespace template, and supply values at runtime through the CreateEvent API. The service substitutes them into namespace templates during long-term memory extraction. Up to five keys can be defined per memory resource, each referenceable across multiple strategies.<br /> <br /> Flexible namespace variables are available today in all AWS Regions where Amazon Bedrock AgentCore Memory is generally available, at no additional cost. To get started, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/specify-long-term-memory-organization.html">Specify long-term memory organization with namespaces</a> in the Amazon Bedrock AgentCore Developer Guide.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-flexible-namespaces)