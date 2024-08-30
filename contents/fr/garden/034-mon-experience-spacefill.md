---
title: Mon expérience de CTO chez Spacefill de 2019 à 2023
published_at: 2024-04-15
last_updated_at: 2024-08-30
---
# Mon expérience de CTO chez Spacefill d'avril 2019 à juin 2023

J'ai rejoint Spacefill parmi les tout premiers employés. En tant que CTO, j'étais responsable des choix techniques, du recrutement et du management des développeurs, le tout en étroite collaboration avec le CPO — cofondateur.

J'ai commencé par développer une [marketplace](https://en.wikipedia.org/wiki/Online_marketplace) de stockage en entrepôt, ensuite une web application de type [OMS (Order Management System)](https://en.wikipedia.org/wiki/Order_management_system) et une Web API publique.

Cette Web API publique permettait de communiquer avec des applications de l'univers logistique, du type [WMS](https://en.wikipedia.org/wiki/Warehouse_management_system), [OMS](https://en.wikipedia.org/wiki/Order_management_system),
[TMS](https://en.wikipedia.org/wiki/Transportation_management_system), [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning).

J'ai travaillé sur l'implémentation et de déploiement de nombreuses intégrations dites ["EDI"](https://en.wikipedia.org/wiki/Electronic_data_interchange), concrètement des programmes (de type worker) de transfert d'information d'un système à un autre — lecture de données via Web API ou via des fichiers exposés par le protocole FTP, puis transformation de ces données et pour finir, écriture de ces données sur une Web API ou à nouveau dans des fichiers via le protocole FTP.

**Quelques-unes de mes activités de manageur :**

* Recrutement : rédaction et publication des fiches de postes, définition des critères de rémunérations,
  sourcing de candidats, tenue d'entretiens de recrutement , suivi d'"onboarding" des nouvelles recrues…
* Discussion 2 fois par mois en tête-à-tête avec chaque membre de l'équipe tech et produit — généralement
  sous la forme de walking meeting — afin de garder du lien, recevoir du feedback, comprendre le ressenti
  de chaque personne, partager ma vision, répondre aux questions, partager des conseils.
* Proposer des mises à jour des process de développement ou de management produit… pour répondre aux
  besoins du produit, aux difficultés et aux idées des développeurs. Mon objectif était de créer une
  direction commune tout en essayant d'atteindre un certain niveau de consensus.

**Voici ce à quoi ressemblaient mes activités de développeur :**

* Coder en React et un peu en Node.JS ;
* Écriture de query et mutation GraphQL ;
* Faire évoluer la base de données PostgreSQL :
  * modélisation des données (tables) ;
  * écriture de migration de données ;
  * écritures de triggers en [pgSQL](https://fr.wikipedia.org/wiki/PL/pgSQL).
* Écriture de fonctions [PL/pgSQL](https://fr.wikipedia.org/wiki/PL/pgSQL) pour implémenter des [Queries](https://www.graphile.org/postgraphile/custom-queries)
  ou [Mutations](https://www.graphile.org/postgraphile/custom-mutations/) GraphQL customs ;
* Rédiger, améliorer et commenter des issues ;
* Prendre soin de mes Merge Requests afin de les pousser le plus rapidement possible en production ;
* Faire de la revue de code ;
* Écrire des spécifications techniques et parfois participer aux specifications produits ;
* Guider les nouveaux développeurs ;
* Améliorer continuellement la documentation du projet ;
* Écrire des tests UI ;
* Des interventions ponctuelles DevOps (Terraform / Ansible) ;
* Écrire, faire évoluer quelques scripts Python.

**Technologies utilisées :**

* Backend :
  * [PostgreSQL 12](https://en.wikipedia.org/wiki/PostgreSQL), utilisation de :
    * du langage [PL/pgSQL](https://www.postgresql.org/docs/12/plpgsql.html) ;
    * des [Trigger Functions](https://www.postgresql.org/docs/12/plpgsql-trigger.html) ;
    * des extensions :
      * [PostGIS](https://postgis.net/) ;
      * [pg_cron](https://github.com/citusdata/pg_cron).
  - [PostGraphile](https://www.graphile.org/postgraphile/) (Extensible high-performance automatic GraphQL API for PostgreSQL) ;
  - [graphile-worker](https://github.com/graphile/worker) (Job queue for PostgreSQL running on Node.js).
- Frontend :
  - [React JS](https://reactjs.org/) ([State Hook](https://reactjs.org/docs/hooks-overview.html#state-hook)) :
    - [react-router](https://github.com/ReactTraining/react-router) ;
    - [Apollo GraphQL](https://github.com/apollographql) ;
    - [Leaflet](https://leafletjs.com) ;
    - Un maximum de composants "headless" couplés avec [TailwindCSS](https://tailwindcss.com) (avant cela [mineral-ui](https://github.com/mineral-ui/mineral-ui) et [Emotion](https://github.com/emotion-js/emotion)) ;
    - [React Hook Form](https://react-hook-form.com) (avant cela [Formik](https://formik.org)) ;
    - ...
  - Utilisation de [storybook](https://github.com/storybookjs/storybook).
- Testing :
  - [Jest](https://github.com/facebook/jest) ;
  - [Puppeteer](https://github.com/GoogleChrome/puppeteer).
- Infra As Code :
  - Terraform ;
  - Ansible.
- Hosting on AWS et [Scaleway Dedibox](https://www.scaleway.com/en/dedibox/) ;
- Ubuntu ;
- Docker ;
- Sentry ;
- GitLab (pour les Git repository et pour les issues et merge requests) ;
- [GitLab Review App](https://docs.gitlab.com/ce/ci/review_apps/) pour toutes les Merge Requests ;
- GitLab-CI.

**Quelques informations supplémentaires concernant le fonctionnement du backend :**

L'API GraphQL était auto-générée par [Postgraphile](https://www.graphile.org/postgraphile/), qui est un serveur OpenSource écrit en NodeJS et se connecte "au-dessus" de PostgreSQL.  
Cela ressemble à [Hasura](https://hasura.io/), [Supabase](https://supabase.io/) ou [Firebase](https://en.m.wikipedia.org/wiki/Firebase).  
Les paramétrages, adaptations pouvaient se faire soit via des [commentaires sur des ressources PostgreSQL (tables, champs)](https://www.graphile.org/postgraphile/smart-comments/#gatsby-focus-wrapper), soit via la création de [Views](https://www.graphile.org/postgraphile/views/) ou [de functions PostgreSQL](https://www.graphile.org/postgraphile/functions/).  
Les tâches qui ne pouvaient pas être effectuées par PostgreSQL, comme par exemple l'envoi de mails, la génération de PDF… sont effectuées par un "service worker", avec du code NodeJS "classique".

**Méthode de travail**

Nous essayions autant que possible de suivre la méthode [Scrum](https://www.scrumguides.org/scrum-guide.html).

Ce qui était mis en place :

- [Sprints](https://www.scrumguides.org/scrum-guide.html#the-sprint) : 2 semaines ;
- [Daily Scrum](https://www.scrumguides.org/scrum-guide.html#daily-scrum) : entre 5 et 15 minutes tous les matins E
- [Sprint Retrospective](https://www.scrumguides.org/scrum-guide.html#sprint-retrospective) + [Sprint Planning](https://www.scrumguides.org/scrum-guide.html#sprint-planning) : une après-midi en fin de Sprint ;
  - Session de [Planning poker](https://fr.wikipedia.org/wiki/Planning_poker) ;
- [Scrum Team](https://www.scrumguides.org/scrum-guide.html#scrum-team) : entre 3 et 6 personnes organisées en [Feature Team](https://www.scaledagileframework.com/features-and-components/) ;
- [Definition of Done](https://www.scrumguides.org/scrum-guide.html#increment) : un template de Merge Request de GitLab contient la checklist de notre "définition of done" ;
- Une journée de [« Spike and learn »](/fr/posts/2024-04-06_spike-and-learn-day/).

Nous utilisions [GitLab](https://fr.wikipedia.org/wiki/GitLab) pour :

- la gestion des [issues](https://docs.gitlab.com/ee/user/project/issues/) ;
- le suivi des sprints, via les fonctions [milestones](https://docs.gitlab.com/ee/user/project/milestones/) et [boards](https://docs.gitlab.com/ee/user/project/issue_board.html#issue-boards).

Tout changement dans le code ou la documentation passait par une [Merge Request](https://docs.gitlab.com/ee/user/project/merge_requests/index.html#merge-requests) avec un process de review.
