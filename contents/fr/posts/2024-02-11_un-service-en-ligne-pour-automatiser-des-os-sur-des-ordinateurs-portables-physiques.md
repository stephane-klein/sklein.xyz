---
title: Un service en ligne pour automatiser des OS sur des ordinateurs portables physiques ?
published_at: 2024-02-11
english_url: /en/posts/2024-02-11_automated-os-testing-on-physical-laptops-as-a-service/
---

Bonjour,

Pour faciliter le travail des développeurs kernel, des distributions et des environnements de bureau et, par conséquent, améliorer la fiabilité des distributions Linux, je me demande s'il serait possible de mettre en place un service qui ressemblerait à ceci :

- Des laptops pilotables à distance et accessibles via une API et une console web accessible via Internet. Exemples d'éléments pilotables :
  - installation de l'OS via iPXE
  - contrôle de l'alimentation (reset, power up, power down…)
  - visualisation de la sortie d'écran à distance
  - contrôle du clavier et de la souris à distance
  - contrôle les ports USB à distance
  - contrôle des paramètres du BIOS
- Possibilité de mise en place des système d'[intégration continues](https://fr.wikipedia.org/wiki/Int%C3%A9gration_continue) pour automatiser des tests

Je pense à cette idée en ce moment, parce que je me demande comment les développeurs kernel auraient pu plus facilement identifier les bugs suivants :

- [Thinkpad T14S AMD Gen3 - drm/amd firmware bug since Kernel 6.6.8](https://discussion.fedoraproject.org/t/thinkpad-t14s-amd-gen3-drm-amd-firmware-bug-since-kernel-6-6-8/104888)
- [Thinkpad T14s AMD Gen3 - 6.7.x kernels suspend crashes (QCNFA765 ath11k wifi issue)](https://discussion.fedoraproject.org/t/thinkpad-t14s-amd-gen3-6-7-x-kernels-suspend-crashes-qcnfa765-ath11k-wifi-issue/104887)

Idéalement, j'aimerais qu'une CI détecte automatiquement ce type de problèmes.

J'imagine une technologie qui ressemblerait à l'[IPMI](https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface) et [KVM](https://en.wikipedia.org/wiki/KVM_switch) que l'on retrouve sur les serveurs en data center.

Hier, j'ai passé un peu de temps à chercher si ce type de projet existe.

Pour le moment, je suis tombé uniquement sur ce super projet de mai 2022 : [Automated OS testing on physical laptops](https://www.qubes-os.org/news/2022/05/05/automated-os-testing-on-physical-laptops/) (pour le projet _Qubes OS_).

Ce projet est basé sur [PiKVM - Open and inexpensive DIY IP-KVM on Raspberry Pi](https://pikvm.org/).  
Je ne l'ai pas testé, mais d'après l'article, ce projet permet, entre autres, de de contrôler à distance l'alimentation, du laptop physique, de booter sur USB ou sur le réseau, de capturer la sortie vidéo, simuler un clavier ou souris…
Pour plus de précision, je vous invite à consulter l'article [en détail](https://www.qubes-os.org/news/2022/05/05/automated-os-testing-on-physical-laptops/).

Je pense que ce type de projet pourrait être financé ou/et soutenu par la [Linux Fondation](https://www.linuxfoundation.org/), RedHat, [la communauté Fedora Project](https://en.wikipedia.org/wiki/Fedora_Project), [Canonical](<https://en.wikipedia.org/wiki/Canonical_(company)>), ou même des constructeurs de puces ou de hardware comme Intel, AMD, Lenovo, Dell…

Ce type de service pourrait être de type "as a service", payant à la minute, tout comme l'achat de serveur à la minute.

Je pense que ce service pourrait être utile à d'autres communautés logicielles, par exemple, toute l'industrie qui développe des drivers pour Microsoft.

[Phronix](https://www.phoronix.com/) ou [Notebook Check](https://www.notebookcheck.net) pourrait utiliser aussi ce service pour faire des tests de performances, de durée d'autonomie de batteries…

## Questions

- Est-ce que ce type de service existe déjà ?
- Avez-vous connaissance si Apple, Microsoft… utilisent ce type de systèmes en interne pour automatiser les tests de leur OS et hardware ?
- Et plus globalement, est-ce que vous pensez que ce type de service pourrait diminuer significativement le nombre de bugs dans les releases kernel… ?
- Pensez-vous que ce type de projet serait très difficile à implémenter ? Financer ?
- S'il n'existe pas, quelle en est d'après vous la raison ?

Cordialement,  
Stéphane

---

Crossposting:

- On [Fedora Discussion](https://discussion.fedoraproject.org/t/automated-os-testing-on-physical-laptops-as-a-service/105051)
