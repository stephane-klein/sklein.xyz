---
title: Mon expérience de DevOps Engineer, Product Owner chez Scaleway de janvier 2018 à avril 2019
published_at: 2024-04-15
last_updated_at: 2024-08-30
---
# Mon expérience de DevOps Engineer, Product Owner chez Scaleway de janvier 2018 à avril 2019

J'ai été pendant 10 mois leader d'une petite équipe de trois personnes ([Alexandre](https://www.linkedin.com/in/its-alex/), [Albert](https://www.linkedin.com/in/albertlebatteux/) et moi) dont le but était de développer un nouveau produit [IaaS](https://en.wikipedia.org/wiki/Infrastructure_as_a_service) de type [baremetal-server](https://en.wikipedia.org/wiki/Bare-metal_server) as service".

Ce projet était assez technique, plutôt "bas niveau". Mon expérience en administration système du début des années 2000 chez LinBox, mes lectures des [Linux Magazine](https://fr.wikipedia.org/wiki/GNU/Linux_Magazine_France) et [linuxfr](https://fr.wikipedia.org/wiki/Linuxfr) m'ont été très utiles.

Concrètement, une application [CLI](https://fr.wikipedia.org/wiki/Interface_en_ligne_de_commande) permettait de gérer tout le cycle de vie — create, login, restart, debug, destroy… — de serveurs préalablement provisionnés et configurés en datacenter.  
Cette application CLI communiquait avec un serveur central via le protocole [gRPC](https://en.wikipedia.org/wiki/GRPC)/[Protobuf](https://en.wikipedia.org/wiki/Protocol_Buffers).  
Ces deux composants étaient développés en langage [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), avec des librairies du type gRPC, GenProto, [SQLx](https://github.com/jmoiron/sqlx), [Cobra](https://github.com/spf13/cobra)/[Viper](https://github.com/spf13/viper), [Logrus](https://github.com/sirupsen/logrus), [Migrate](https://github.com/golang-migrate/migrate)… (ce projet date de 2018, ces librairies ne sont peut-être plus pertinentes), la persistance était assurée par une base de données [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) et [Minio](https://github.com/minio/minio) pour le stockage des images disques.

Les technologies suivantes étaient utilisées pour piloter à distance les serveurs : [DHCP server](https://en.wikipedia.org/wiki/Dhcp), [iPXE](https://en.wikipedia.org/wiki/IPXE), [TFTP](https://en.wikipedia.org/wiki/Trivial_File_Transfer_Protocol), [IPMI](https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface).

Les différentes images des systèmes d'exploitation étaient préparées avec [Packer](https://github.com/hashicorp/packer) pour fournir une expérience la plus proche de celle de l'utilisation des serveurs virtuels.

Le projet était testé presque entièrement avec Vagrant, [Mock IPMI with Virtualbox](https://github.com/stephane-klein/ipmi_mock_with_virtualbox) et quelques conteneurs Docker. Le projet était entièrement déployé en [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code), avec Ansible et quelques scripts Bash.

L'enseignement majeur que j'ai pu tirer de cette expérience est la méthode de travail en équipe que nous avons réussi à mettre en place.  
Au départ, l'inspiration m'est venue de mes observations du fonctionnement interne de chez GitLab, visible à travers leur [Handbook](https://handbook.gitlab.com/handbook/).  
Cette méthode s'est matérialisée par un environnement de développement de qualité, un concept que je nomme _"Development Kit"_, et par des pratiques telles que le ["Readme Driven Development"](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=readme%20driven%20development&sort=byDate&type=comment), toute action de plus de 10 minutes [commencent toujours par une issue ou une merge request](https://handbook.gitlab.com/handbook/communication/#start-with-a-merge-request), une étape de code review pour chaque Merge Request, effectuée par une personne ou plus quand le changement était impactant.

Cette méthode a eu entre autres les effets suivants : les contributions sur le projet étaient équilibrées — nous n'étions pas dans la situation où un développeur faisait 80% du travail —, très faible [bus factor](https://fr.wikipedia.org/wiki/Bus_factor) sur le projet, [fort sentiment de possession](https://fr.wikipedia.org/wiki/Effet_Ikea) du projet par tous les membres de l'équipe.

Je pense qu'encore maintenant, Albert et Alexandre gardent un agréable souvenir de travail sur ce projet.

Par la suite, j'ai essayé en tant que CTO chez Spacefill de construire une équipe en me basant sur cette expérience positive.

---

Les 6 mois suivants, j'ai rejoint l'équipe qui travaillait sur le produit _"Kubernetes as a Service"_.  
[Kubernetes](https://fr.wikipedia.org/wiki/Kubernetes) n'était pas nouveau pour moi, parce que j'avais travaillé sur cette technologie presque à plein temps pendant 2 ans, de 2016 à 2018 chez Tech-Angels.

Ce projet avait dépassé la phase de "prototypage", il fonctionnait et à mon arrivée, l'objectif était de finir toutes les tâches nécessaires pour le mettre en les mains des clients finaux.

Le déploiement de ce projet complexe — par nécessité — était entièrement automatisé via les outils [Terraform](https://github.com/hashicorp/terraform) et [Ansible](https://github.com/ansible/ansible).

Ce projet était développé en Go et utilisait PostgreSQL.


