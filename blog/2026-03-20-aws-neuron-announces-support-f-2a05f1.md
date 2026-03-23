---
title: "AWS Neuron announces support for Dynamic Resource Allocation with Amazon EKS"
date: "2026-03-20"
---

# AWS Neuron announces support for Dynamic Resource Allocation with Amazon EKS

<p>AWS announces the Neuron Dynamic Resource Allocation (DRA) driver for Amazon Elastic Kubernetes Service (EKS), bringing Kubernetes-native hardware-aware scheduling to AWS Trainium-based instances. The Neuron DRA driver publishes rich device attributes directly to the Kubernetes scheduler, enabling topology-aware placement decisions without custom scheduler extensions.<br /> <br /> Deploying AI workloads on Kubernetes requires ML engineers to make infrastructure decisions that are not directly related to model development, such as determining device counts, understanding hardware and network topologies, and writing accelerator-specific manifests. This creates friction, slows iteration, and tightly couples workloads to underlying infrastructure. As use cases expand to distributed training, long-context inference, and disaggregated architectures, this complexity becomes a scaling bottleneck.<br /> <br /> The Neuron DRA driver removes this burden by separating infrastructure concerns from ML workflows. Infrastructure teams define reusable ResourceClaimTemplates that capture device topology, allocation, and networking policies. ML engineers can simply reference these templates in their manifests, without needing to reason about hardware details. This enables consistent deployment across workload types while allowing per-workload configuration so multiple workloads can efficiently share the same nodes.<br /> <br /> The Neuron DRA driver supports all AWS Trainium instance types&nbsp; and is available in all AWS Regions where AWS Trainium is available.</p> 
<p>For documentation, sample templates, and implementation guides, visit <a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/containers/neuron-dra.html">the Neuron DRA documentation.</a></p> 
<p><b>Learn more:</b><br /> </p> 
<ul> 
 <li><a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/containers/neuron-dra.html">Neuron EKS DRA templates</a></li> 
 <li><a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/containers/kubernetes-getting-started.html" style="background-color: rgb(255,255,255);">Neuron EKS documentation</a></li> 
 <li><a href="https://docs.aws.amazon.com/eks/latest/userguide/device-management-neuron.html">Amazon EKS documentation</a></li> 
</ul>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/03/neuron-eks-dra-support/)