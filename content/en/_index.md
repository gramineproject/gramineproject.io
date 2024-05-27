---
title: Gramine
showHeader: false
layout: single
---
{{< columns count=2 >}}
{{< column >}}

{{< img src="/img/gramine-logo-dark.svg" width=400 height="113" alt="Gramine logo" >}}

## A Library OS for Unmodified Applications

{{< intro >}}
Open-Source community project driven by a core team of contributors. Previously Graphene.
{{< /intro >}}

{{< button link="https://github.com/gramineproject" text="GitHub" >}}{{< button link="https://gramine.readthedocs.io/en/latest/" style="secondary" text="Docs" >}}

{{< /column >}}
{{< column >}}
{{< spacer >}}

{{< img src="/img/blob.jpg" alt="Circuits" width="582" >}}

{{< /column >}}
{{< /columns >}}

## A few words about Gramine

Applications programmed for one system often do not work on another. Gramine bridges this gap by hoisting application-facing code from the operating system (OS) kernel into a userspace library. Gramine uses a platform adaptation layer (PAL) that is easy to implement on a new host system. As long as a system implements the PAL interface, all of POSIX/Linux will follow. Gramine is a library OS, similar to a unikernel. Compared to running a complete guest OS in a virtual machine (VM), Gramine is much lighter weight. Work is ongoing to integrate Gramine with Docker containers.A particular use case for Gramine is Intel® Software Guard Extensions (Intel® SGX), where applications do not work out-of-the-box. Gramine solves this problem, with the added security benefits. Gramine can serve as a compatibility layer on other platforms.

## Intel SGX integration made simple

Applications can benefit from confidentiality and integrity guarantees of Intel SGX, but developers need to be very skilled for effective partitioning and code modification for Intel SGX environment. Gramine runs unmodified applications inside Intel SGX. It supports dynamically loaded libraries, runtime linking, multi-process abstractions, and file authentication. For additional security, Gramine performs cryptographic and semantic checks at untrusted host interface. Developers provide a manifest file to configure the application environment and isolation policies, Gramine automatically does the rest.

{{< spacer 40 >}}
{{< img width=900 src="/img/diagram_reg_integration.svg" alt="Regular integration of Intel SGX" caption="Regular integration of Intel SGX">}}
{{< spacer 60 >}}
{{< img width=600 src="/img/diagram_gramine_integration.svg" alt="Integration of Intel SGX with Gramine" caption="Integration of Intel SGX with Gramine">}}
{{< spacer >}}

The commitment behind Gramine Graphene started as a research project at Stony Brook University, led by Chia-Che Tsai and Don Porter. Over time, scientists at other universities and labs have contributed to Graphene to accelerate their research on emerging hardware platforms. In 2015, Intel Labs recognized the potential for Graphene to be an open-source compatibility layer for Intel SGX, and has contributed to Graphene development since. Golem and Invisible Things Lab (ITL) have identified similarly opportunity for Graphene to play a huge role in the decentralized ecosystem, where data integrity, confidentiality, and security are cornerstones to the robust development of infrastructure and applications.

Driving Graphene and ensuring its usability is part of Golem's commitment. Today, there is a strong team of developers and researchers from these companies working together with the founders of the project (now faculty at UNC and Texas A&M) to make sure it meets the highest quality standards with the easiness of integration. Gramine has a growing user and contributor community. It has the potential to become a standard in the Intel SGX world and can be adopted by a broad variety of use cases in a diverse technological landscape.

## The commitment behind Gramine

{{< columns count=3 >}}
{{< column >}}
{{< img src="/img/intel.svg" width=200 alt="Intel logo" >}}
{{< /column >}}
{{< column >}}
{{< img src="/img/golem.svg" width=200 alt="Golem logo" >}}
{{< /column >}}
{{< column >}}
{{< img src="/img/invisible_things.svg" width=200 alt="Invisible Things logo" >}}
{{< /column >}}
{{< column >}}
{{< img src="/img/unc.svg" width=200 alt="UNC logo" >}}
{{< /column >}}
{{< column >}}
{{< img src="/img/texas_am.svg" width=200 alt="Texas A&M logo" >}}
{{< /column >}}
{{< /columns >}}