---
title: "Amazon SES click tracking now supports custom URL paths for mobile app deep linking"
date: "2026-08-14"
---

# Amazon SES click tracking now supports custom URL paths for mobile app deep linking

<p><a href="https://aws.amazon.com/ses/">Amazon Simple Email Service (SES)</a>&nbsp;now makes it easier to support mobile deep linking with the new ses:custom-path HTML attribute. When you add this attribute to an &lt;a&gt; tag, SES carries your path segment through to the tracking URL, so mobile operating systems can match it to your app's Universal Links (iOS) or App Links (Android) configuration. This enables you to use mobile deep linking without disabling engagement tracking.</p> 
<p>This feature is available in all AWS Regions where Amazon SES is available. To use this feature, you need a custom redirect domain for click tracking with an Apple App Site Association (AASA) or Digital Asset Links verification file hosted on that domain. Then, add the ses:custom-path attribute to links in your HTML emails.</p> 
<p>To learn more, see <a href="https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html">Configuring custom domains to handle open and click tracking</a> and the <a href="https://docs.aws.amazon.com/ses/latest/dg/faqs-metrics.html">Amazon SES email sending metrics FAQs</a> in the Amazon SES Developer Guide.</p>

[Read original post](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ses-supports-customurl-deeplinking)