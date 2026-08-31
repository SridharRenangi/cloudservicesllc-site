---
title: "Amazon Bedrock AgentCore Memory now supports fine-grained access control"
date: "2026-08-28"
---

# Amazon Bedrock AgentCore Memory now supports fine-grained access control

<p>Amazon Bedrock AgentCore Memory now supports fine-grained access control (FGAC), enabling you to enforce per-user and per-tenant memory isolation through AgentCore Gateway without building custom authorization logic.</p> 
<p><br /> With FGAC, you can front your Memory resource with an AgentCore Gateway configured for OAuth (JWT) authentication and attach Cedar policies that restrict access based on the authenticated caller's identity. You can enforce that each user only accesses their own actor's data, restrict memory records to namespaces derived from the user's token claims, and allow or deny specific Memory operations per caller. This lets you move access control enforcement from application code to the infrastructure layer using cryptographic proof of identity. FGAC for Memory is built on the AgentCore Memory connector, a managed gateway connector that wires a gateway target to the Memory data plane and exposes 12 Memory operations as Cedar actions with their request attributes available for policy conditions.</p> 
<p>To get started, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-gateway-fgac.html">Fine-grained access control for Memory</a> in the Amazon Bedrock AgentCore Developer Guide.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-fine-grained-access-control)