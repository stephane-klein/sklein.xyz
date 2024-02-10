---
title: Automated OS testing on physical laptops as a service?
published_at: 2024-02-11
french_url: /fr/posts/2024-02-11_un-service-en-ligne-pour-automatiser-des-os-sur-des-ordinateurs-portables-physiques/
---

Hello,

To facilitate the work of kernel developers, distributions and Open Source desktop environments and, consequently, improve the reliability of Linux distributions, I wonder if it would be possible to set up a service that would look like this:

- Remotely controllable Physical laptops accessible via an API and a web console. Examples of controllable elements:
  - OS installation via iPXE
  - remote power control (reset, power up, power down...)
  - remote display of screen output
  - remote keyboard and mouse control
  - remote control of USB ports
  - control of BIOS parameters
- Possibility of setting up [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) system to automate tests

I'm thinking about this idea right now, because I'm wondering how kernel developers could have more easily identified the following bugs:

- [Thinkpad T14S AMD Gen3 - drm/amd firmware bug since Kernel 6.6.8](https://discussion.fedoraproject.org/t/thinkpad-t14s-amd-gen3-drm-amd-firmware-bug-since-kernel-6-6-8/104888)
- [Thinkpad T14s AMD Gen3 - 6.7.x kernels suspend crashes (QCNFA765 ath11k wifi issue)](https://discussion.fedoraproject.org/t/thinkpad-t14s-amd-gen3-6-7-x-kernels-suspend-crashes-qcnfa765-ath11k-wifi-issue/104887)

Ideally, I'd like an IC to automatically detect this type of problem.

I'm imagining a technology similar to the [IPMI](https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface) and [KVM](https://en.wikipedia.org/wiki/KVM_switch) found on servers in data centers.
Yesterday, I spent some time researching whether this type of project exists.

So far, I've only come across this great project from May 2022: [Automated OS testing on physical laptops](https://www.qubes-os.org/news/2022/05/05/automated-os-testing-on-physical-laptops/) (for the _Qubes OS_ project).

This project is based on [PiKVM - Open and inexpensive DIY IP-KVM on Raspberry Pi](https://pikvm.org/).  
I haven't tested it, but according to the article, this project lets you, among other things, remotely control the power supply, the physical laptop, boot on USB or the network, capture the video output, simulate a keyboard or mouse...
For more details, please see the article [in detail](https://www.qubes-os.org/news/2022/05/05/automated-os-testing-on-physical-laptops/).

I think this type of project could be funded or/and supported by the [Linux Foundation](https://www.linuxfoundation.org/), RedHat, [the Fedora Project community](https://en.wikipedia.org/wiki/Fedora_Project), [Canonical](<https://en.wikipedia.org/wiki/Canonical_(company)>), or even chip or hardware manufacturers like Intel, AMD, Lenovo, Dell...

This type of service could be "as a service", paying by the minute, just like buying a server by the minute.

I think this service could be useful to other software communities, for example, the whole industry that develops drivers for Microsoft.

[Phronix](https://www.phoronix.com/) or [Notebook Check](https://www.notebookcheck.net) could also use this service to test performance, battery life...

## Questions

- Does this type of service already exist?
- Do you know if Apple, Microsoft... use this type of system internally to automate testing of their OS and hardware?
- And more generally, do you think this type of service could significantly reduce the number of bugs in kernel releases?
- Do you think this type of project would be very difficult to implement? To finance?
- If it doesn't exist, what do you think is the reason?

Best regards,  
Stéphane

---

Crossposting:

- On [Fedora Discussion](https://discussion.fedoraproject.org/t/automated-os-testing-on-physical-laptops-as-a-service/105051)
