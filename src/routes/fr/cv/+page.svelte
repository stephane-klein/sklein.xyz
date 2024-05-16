<script>
    import Layout from "../layout.svelte";
</script>

<Layout
    ><div>
        <p style="text-align: right; font-size: 0.8em;">Dernière mise à jour : 16 mai 2024</p>

        <h2>Qui suis-je ?</h2>

        <p>
            Stéphane Klein, artisan développeur de plus de 20 ans d'expérience, basé à <a
                href="https://fr.wikipedia.org/wiki/Montrouge">Montrouge</a
            >, au sud de Paris.
        </p>

        <p>
            De 2019 à 2023, j'ai occupé le poste de CTO dans une startup parisienne, que j'ai rejointe juste après son
            financement initial. Avec mes collègues, nous avons élargi l'équipe <em>tech</em> de 1 à 16 personnes au cours
            de deux levées de fonds successives d'environ 5 et ensuite 20 millions d'euros.
        </p>

        <p>
            Depuis septembre 2023, je travaille sur le développement d'une application du type <a
                href="https://en.wikipedia.org/wiki/Personal_knowledge_base">"knowledge management"</a> que j'ai lancée avec
            trois co-fondateurs.
        </p>

        <h2>Contact</h2>

        <p>
            Vous pouvez me contacter par mail à <a href="mailto:contact@stephane-klein.info"
                >contact@stephane-klein.info</a>
            ou au <a href="tel:+33661487604">06 61 48 76 04</a>, il est préférable de m'envoyer un SMS avant de me
            téléphoner.
        </p>

        <h2>Mes objectifs professionnels</h2>

        <p>
            Depuis mai 2024, je suis à la recherche de missions freelance de 4 à 8 jours par mois.<br />
            À partir de septembre 2024, il est possible que je sois à la recherche de missions de 16 jours par mois, en freelance
            ou en tant que salarié.
        </p>

        <p>Vous pouvez consulter la liste de <a href="/fr/services-freelance/">mes prestations en freelance</a>.</p>

        <h2>Projets susceptibles de m'intéresser</h2>

        <p>
            Je suis ouvert aux missions de <a
                href="https://www.urbandictionary.com/define.php?term=Individual+Contributor"
                >Contributeur Individuel</a> ou de management, au sein de toutes petites structures ou des ETI.
        </p>

        <h2>Types de projets qui ne m'intéressent pas</h2>

        <p>
            Actuellement, les secteurs tels que les DeFi, l'AdTech et les jeux vidéo ne m'intéressent pas.<br />
            Les projets d'applications mobiles natives ne sont pas non plus dans mes recherches actuelles, bien que ce soit
            un domaine qui m'intéresse, je n'ai pas encore développé de compétences spécifiques dans ce secteur.
        </p>

        <p>
            Je ne souhaite pas manager une équipe non francophone. Le management demande de la finesse et de la
            subtilité en communication, en raison de mon niveau d'anglais oral, je ne me sens pas en mesure de gérer
            efficacement une équipe non francophone.
        </p>

        <h2>Domaines d'expertise</h2>

        <p>Frontend Development : JavaScript (front), ReactJS, Svelte, SvelteKit, HTML/CSS avancé, TailwindCSS, Yjs</p>
        <p>
            Backend Development : Go, Python, JavaScript (back), GraphQL, REST, gRPC, Playwright, écriture basique de
            script Bash, Singer (ETL)
        </p>
        <p>Database : SQL, PostgreSQL avancé, PL/pgSQL, SQLite, Redis, Clickhouse, Neo4j (Cypher), Metabase</p>
        <p>
            DevOps : Docker, Vagrant, Postfix, Nginx, Ansible, Terraform, Grafana, Prometheus, Loki, Kubernetes,
            Debian/Ubuntu/RedHat, Baremetal, AWS, Scaleway, OVH, Vector (data pipeline)
        </p>
        <p>Software Engineering : Git, Scrum, TDD, Lean, GitOps</p>

        <h2>Expériences professionnelles</h2>

        <h3 class="professional-experience-section">
            <span class="left">Cofondateur — Value Props</span>
            <span class="right">Depuis septembre 2024</span>
        </h3>

        <p>
            Je travaille depuis septembre 2023, en mode « solo dev » sur une application du type « <a
                href="https://en.wikipedia.org/wiki/Personal_knowledge_base">knowledge management</a> » que nous avons lancée
            avec trois co-fondateurs.
        </p>

        <p>
            L'objectif de cette solution est de permettre aux entreprises de présenter leur produit via tous types
            de supports — page web, discours, fiches produits… —, toujours à jour, qui ont été créés et mis à jour via
            une webapp qui organise et présente de manière dynamique toutes les données marketing ou autrement dit,
            « la proposition de valeur ».
        </p>

        <p>
            Pour en savoir plus vous pouvez consulter mon article « <a
                href="https://sklein.xyz/fr/posts/2024-04-07_stack-projet-value-props/"
                >Liste des choix technologiques du projet Value Props</a> ».
        </p>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">CTO — Spacefill</span>
            <span class="right">Avril 2019 - Juin 2023</span>
        </h3>

        <p>
            J'ai rejoint Spacefill parmi les tout premiers employés. En tant que CTO, j'étais responsable des choix
            techniques, du recrutement et du management des développeurs, le tout en étroite collaboration
            avec le CPO — cofondateur.
        </p>

        <p>
            J'ai commencé par développer une <a href="https://en.wikipedia.org/wiki/Online_marketplace">marketplace</a>
            de stockage en entrepôt, ensuite une web application de type
            <a href="https://en.wikipedia.org/wiki/Order_management_system">OMS (Order Management System)</a> et une web
            API publique.
        </p>

        <p>
            Cette web API publique permettait de communiquer avec des applications de l'univers logistique, du type <a
                href="https://en.wikipedia.org/wiki/Warehouse_management_system">WMS</a
            >,
            <a href="https://en.wikipedia.org/wiki/Order_management_system">OMS</a>,
            <a href="https://en.wikipedia.org/wiki/Transportation_management_system">TMS</a>,
            <a href="https://en.wikipedia.org/wiki/Enterprise_resource_planning">ERP</a>.
        </p>

        <p>
            J'ai travaillé sur l'implémentation et de déploiement de nombreuses intégrations dites <a
                href="https://en.wikipedia.org/wiki/Electronic_data_interchange">"EDI"</a
            >, concrètement des programmes (de type worker) de transfert d'information d'un système à un autre — lecture
            de données via Web API ou via des fichiers exposés par le protocole FTP, puis transformation de ces données
            et pour finir, écriture de ces données sur une Web API ou à nouveau dans des fichiers via le protocole FTP.
        </p>

        <p><strong>Quelques-unes de mes activités de manageur :</strong></p>

        <ul>
            <li>
                Recrutement : rédaction et publication des fiches de postes, définition des critères de rémunérations,
                sourcing de candidats, tenue d'entretiens de recrutement , suivi d'"onboarding" des nouvelles recrues…
            </li>
            <li>
                Discussion 2 fois par mois en tête-à-tête avec chaque membre de l'équipe tech et produit — généralement
                sous la forme de walking meeting — afin de garder du lien, recevoir du feedback, comprendre le ressenti
                de chaque personne, partager ma vision, répondre aux questions, partager des conseils.
            </li>
            <li>
                Proposer des mises à jour des process de développement ou de management produit… pour répondre aux
                besoins du produit, aux difficultés et aux idées des développeurs. Mon objectif était de créer une
                direction commune tout en essayant d'atteindre un certain niveau de consensus.
            </li>
        </ul>

        <p><strong>Voici ce à quoi ressemblaient mes activités de développeur :</strong></p>

        <ul>
            <li>Coder en React et un peu en Node.JS</li>
            <li>Écriture de query et mutation GraphQL</li>
            <li>Faire évoluer la base de données PostgreSQL</li>
            <ul>
                <li>modélisation des données (tables)</li>
                <li>écriture de migration de données</li>
                <li>écritures de triggers en <a href="https://fr.wikipedia.org/wiki/PL/pgSQL">pgSQL</a></li>
                <li>...</li>
            </ul>
            <li>
                Écriture de fonctions <a href="https://fr.wikipedia.org/wiki/PL/pgSQL">PL/pgSQL</a> pour implémenter des
                <a href="https://www.graphile.org/postgraphile/custom-queries">Queries</a>
                ou <a href="https://www.graphile.org/postgraphile/custom-mutations/">Mutations</a> GraphQL customs
            </li>
            <li>Rédiger, améliorer et commenter des issues</li>
            <li>Prendre soin de mes Merge Requests afin de les pousser le plus rapidement possible en production</li>
            <li>Faire de la revue de code</li>
            <li>Écrire des spécifications techniques et parfois participer aux specifications produits</li>
            <li>Guider les nouveaux développeurs</li>
            <li>Améliorer continuellement la documentation du projet</li>
            <li>Écrire des tests UI</li>
            <li>Des interventions ponctuelles DevOps (Terraform / Ansible)</li>
            <li>Écrire, faire évoluer quelques scripts Python</li>
        </ul>

        <p><strong>Technologies utilisées :</strong></p>

        <ul>
            <li>
                Backend :
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/PostgreSQL">PostgreSQL 12</a>, utilisation de :
                        <ul>
                            <li>du langage <a href="https://www.postgresql.org/docs/12/plpgsql.html">PL/pgSQL</a></li>
                            <li>
                                des <a href="https://www.postgresql.org/docs/12/plpgsql-trigger.html"
                                    >Trigger Functions</a>
                            </li>
                            <li>
                                des extensions :
                                <ul>
                                    <li><a href="https://postgis.net/">PostGIS</a></li>
                                    <li><a href="https://github.com/citusdata/pg_cron">pg_cron</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.graphile.org/postgraphile/">PostGraphile</a> (Extensible high-performance
                        automatic GraphQL API for PostgreSQL)<br />
                    </li>
                    <li>
                        <a href="https://github.com/graphile/worker">graphile-worker</a> (Job queue for PostgreSQL running
                        on Node.js)
                    </li>
                </ul>
            </li>
            <li>
                Frontend :
                <ul>
                    <li>
                        <a href="https://reactjs.org/">React JS</a> (<a
                            href="https://reactjs.org/docs/hooks-overview.html#state-hook">State Hook</a
                        >)
                        <ul>
                            <li><a href="https://github.com/ReactTraining/react-router">react-router</a></li>
                            <li><a href="https://github.com/apollographql">Apollo GraphQL</a></li>
                            <li><a href="https://leafletjs.com/">Leaflet</a></li>
                            <li>
                                Un maximum de composants "headless" couplés avec <a href="https://tailwindcss.com/"
                                    >TailwindCSS</a>
                                (avant cela <a href="https://github.com/mineral-ui/mineral-ui">mineral-ui</a> et
                                <a href="https://github.com/emotion-js/emotion">Emotion</a>)
                            </li>
                            <li>
                                <a href="https://react-hook-form.com/">React Hook Form</a> (avant cela
                                <a href="https://formik.org/">Formik</a>)
                            </li>
                            <li>...</li>
                        </ul>
                    </li>
                    <li>Utilisation de <a href="https://github.com/storybookjs/storybook">Storybook</a></li>
                </ul>
            </li>
            <li>
                Testing :
                <ul>
                    <li><a href="https://github.com/facebook/jest">Jest</a></li>
                    <li><a href="https://github.com/GoogleChrome/puppeteer">Puppeteer</a></li>
                </ul>
            </li>
            <li>
                Infra As Code :
                <ul>
                    <li>Terraform</li>
                    <li>Ansible</li>
                </ul>
            </li>
            <li>Hosting on AWS et <a href="https://www.scaleway.com/en/dedibox/">Scaleway Dedibox</a></li>
            <li>Ubuntu</li>
            <li>Docker</li>
            <li>Sentry</li>
            <li>GitLab (pour les Git repository et pour les issues et merge requests)</li>
            <li>
                <a href="https://docs.gitlab.com/ce/ci/review_apps/">GitLab Review App</a> pour toutes les Merge Requests
            </li>
            <li>GitLab-CI</li>
        </ul>

        <p><strong>Quelques informations supplémentaires concernant le fonctionnement du backend :</strong></p>

        <p>
            L'API GraphQL était auto générée par <a href="https://www.graphile.org/postgraphile/">Postgraphile</a> qui
            est un serveur OpenSource écrit en NodeJS qui se connecte "au dessus" de PostgreSQL.<br />
            Cela ressemble à <a href="https://hasura.io/">Hasura</a>, <a href="https://supabase.io/">Supabase</a> ou
            <a href="https://en.m.wikipedia.org/wiki/Firebase">Firebase</a>.<br />
            Les paramétrages, adaptations pouvaient se faire soit via des
            <a href="https://www.graphile.org/postgraphile/smart-comments/#gatsby-focus-wrapper"
                >commentaires sur des ressources PostgreSQL (tables, champs)</a
            >, soit via la création de <a href="https://www.graphile.org/postgraphile/views/">Views</a> ou
            <a href="https://www.graphile.org/postgraphile/functions/">de functions PostgreSQL</a>.<br />
            Les tâches qui ne pouvaient pas être effectuées par PostgreSQL, comme par exemple l'envoi de mails, la génération
            de PDF… sont effectuées par un "service worker", avec du code NodeJS "classique".
        </p>

        <p><strong>Méthode de travail</strong></p>

        <p>
            Nous essayions autant que possible de suivre la méthode <a
                href="https://www.scrumguides.org/scrum-guide.html">Scrum</a
            >.
        </p>

        <p>Ce qui était mis en place :</p>

        <ul>
            <li><a href="https://www.scrumguides.org/scrum-guide.html#the-sprint">Sprints</a> : 2 semaines</li>
            <li>
                <a href="https://www.scrumguides.org/scrum-guide.html#daily-scrum">Daily Scrum</a> : entre 5 et 15 minutes
                tous les matins
            </li>
            <li>
                <a href="https://www.scrumguides.org/scrum-guide.html#sprint-retrospective">Sprint Retrospective</a> +
                <a href="https://www.scrumguides.org/scrum-guide.html#sprint-planning">Sprint Planning</a>
                : une après midi en fin de Sprint
                <ul>
                    <li>Session de <a href="https://fr.wikipedia.org/wiki/Planning_poker">Planning poker</a></li>
                </ul>
            </li>
            <li>
                <a href="https://www.scrumguides.org/scrum-guide.html#scrum-team">Scrum Team</a> : entre 3 et 6
                personnes organisées en
                <a href="https://www.scaledagileframework.com/features-and-components/">Feature Team</a>
            </li>
            <li>
                <a href="https://www.scrumguides.org/scrum-guide.html#increment">Definition of Done</a> : un template de
                Merge Request de GitLab contient la checklist de notre "définition of done"
            </li>
            <li>Une journée de <a href="/fr/posts/2024-04-06_spike-and-learn-day/">« Spike and learn »</a></li>
        </ul>

        <p>Nous utilisions <a href="https://fr.wikipedia.org/wiki/GitLab">GitLab</a> pour :</p>

        <ul>
            <li>la gestion des <a href="https://docs.gitlab.com/ee/user/project/issues/">issues</a></li>
            <li>
                le suivi des sprints, via les fonctions <a href="https://docs.gitlab.com/ee/user/project/milestones/"
                    >milestones</a>
                et <a href="https://docs.gitlab.com/ee/user/project/issue_board.html#issue-boards">boards</a>
            </li>
        </ul>

        <p>
            Tout changement dans le code ou la documentation passait par une <a
                href="https://docs.gitlab.com/ee/user/project/merge_requests/index.html#merge-requests"
                >Merge Request</a> avec un process de review.
        </p>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">Devops Engineer, Product Owner — Scaleway</span>
            <span class="right">Janvier 2018 - Avril 2019</span>
        </h3>

        <p>
            J'ai été pendant 10 mois leader d'une petite équipe de trois personnes (<a
                href="https://www.linkedin.com/in/its-alex/">Alexandre</a
            >,
            <a href="https://www.linkedin.com/in/albertlebatteux/">Albert</a> et moi) dont le but était de développer un
            nouveau produit
            <a href="https://en.wikipedia.org/wiki/Infrastructure_as_a_service">IaaS</a> de type
            <a href="https://en.wikipedia.org/wiki/Bare-metal_server">baremetal-server</a> as service".
        </p>

        <p>
            Ce projet était assez technique, plutôt "bas niveau". Mon expérience en administration système du début des
            années 2000 chez LinBox, mes lectures des <a href="https://fr.wikipedia.org/wiki/GNU/Linux_Magazine_France"
                >Linux Magazine</a>
            et <a href="https://fr.wikipedia.org/wiki/Linuxfr">linuxfr</a> m'ont été très utiles.
        </p>

        <p>
            Concrètement, une application <a href="https://fr.wikipedia.org/wiki/Interface_en_ligne_de_commande">CLI</a>
            permettait de gérer tout le cycle de vie — create, login, restart, debug, destroy… — de serveurs préalablement
            provisionnés et configurés en datacenter.<br />
            Cette application CLI communiquait avec un serveur central via le protocole
            <a href="https://en.wikipedia.org/wiki/GRPC">gRPC</a>/<a
                href="https://en.wikipedia.org/wiki/Protocol_Buffers">Protobuf</a
            >.<br />
            Ces deux composants étaient développés en langage
            <a href="https://en.wikipedia.org/wiki/Go_(programming_language)">Go</a>, avec des librairies du type gRPC,
            GenProto,
            <a href="https://github.com/jmoiron/sqlx">SQLx</a>, <a href="https://github.com/spf13/cobra">Cobra</a>/<a
                href="https://github.com/spf13/viper">Viper</a
            >, <a href="https://github.com/sirupsen/logrus">Logrus</a>,
            <a href="https://github.com/golang-migrate/migrate">Migrate</a>… (ce projet date de 2018, ces librairies ne
            sont peut-être plus pertinentes), la persistance était assurée par une base de données
            <a href="https://en.wikipedia.org/wiki/PostgreSQL">PostgreSQL</a>
            et
            <a href="https://github.com/minio/minio">Minio</a> pour le stockage des images disques.
        </p>

        <p>
            Les technologies suivantes étaient utilisées pour piloter à distance les serveurs : <a
                href="https://en.wikipedia.org/wiki/Dhcp">DHCP server</a
            >, <a href="https://en.wikipedia.org/wiki/IPXE">iPXE</a>,
            <a href="https://en.wikipedia.org/wiki/Trivial_File_Transfer_Protocol">TFTP</a>,
            <a href="https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface">IPMI</a>.
        </p>

        <p>
            Les différentes images des systèmes d'exploitation étaient préparées avec <a
                href="https://github.com/hashicorp/packer">Packer</a> pour fournir une expérience la plus proche de celle
            de l'utilisation des serveurs virtuels.
        </p>

        <p>
            Le projet était testé presque entièrement avec Vagrant, <a
                href="https://github.com/stephane-klein/ipmi_mock_with_virtualbox">Mock IPMI with Virtualbox</a>
            et quelques conteneurs Docker. Le projet était entiérement déployé en
            <a href="https://en.wikipedia.org/wiki/Infrastructure_as_code">infrastructure as code</a>, avec Ansible et
            quelques scripts Bash.
        </p>

        <p>
            L'enseignement majeur que j'ai pu tirer de cette expérience est la méthode de travail en équipe que nous
            avons réussie à mettre en place.<br />
            Au départ, l'inspiration m'est venu de mes observations du fonctionnement interne de chez GitLab, visible à travers
            leur <a href="https://handbook.gitlab.com/handbook/">Handbook</a>.<br />
            Cette méthode s'est matérialisés par un environnement de développment de qualité, un concept que je nomme
            <em>"Development Kit"</em>, et par des pratiques telles que le
            <a
                href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=readme%20driven%20development&sort=byDate&type=comment"
                >"Readme Driven Development"</a
            >, toute action de plus de 10 minutes
            <a href="https://handbook.gitlab.com/handbook/communication/#start-with-a-merge-request"
                >commencent toujours par une issue ou une merge request</a
            >, une étape de code review pour chaque Merge Request, effectuée par une personne ou plus quand le
            changement était impactant.
        </p>

        <p>
            Cette méthode a eu entre autres les effets suivants : les contributions sur le projet étaient équilibrées —
            nous n'étions pas dans la situation où un développeur faisait 80% du travail —, très faible <a
                href="https://fr.wikipedia.org/wiki/Bus_factor">bus factor</a>
            sur le projet, <a href="https://fr.wikipedia.org/wiki/Effet_Ikea">fort sentiment de possession</a> du projet
            par tous les membres de l'équipe.
        </p>

        <p>Je pense qu'encore maintenant, Albert et Alexandre gardent un agréable souvenir de travail sur ce projet.</p>

        <p>
            Par la suite, j'ai essayé en tant que CTO chez Spacefill de construire une équipe en me basant sur cette
            expérience positive.
        </p>

        <hr style="width: 4em; margin: auto;" />

        <p>
            Les 6 mois suivants, j'ai rejoint l'équipe qui travaillait sur le produit <em>"Kubernetes as a Service"</em
            >.
        </p>
        <p>
            <a href="https://fr.wikipedia.org/wiki/Kubernetes">Kubernetes</a> n'était pas nouveau pour moi, parce que j'avais
            travaillé sur cette technologie presque à plein temps pendant 2 ans, de 2016 à 2018 chez Tech-Angels.
        </p>

        <p>
            Ce projet avait dépassé la phase de "prototypage", il fonctionnait et à mon arrivée, l'objectif était de
            finir toutes les tâches nécessaires pour le mettre en les mains des clients finaux.
        </p>

        <p>
            Le déploiement de ce projet complexe — par nécessité — était entièrement automatisé via les outils <a
                href="https://github.com/hashicorp/terraform">Terraform</a>
            et <a href="https://github.com/ansible/ansible">Ansible</a>.
        </p>

        <p>Ce projet était développé en Go et utilisait PostgreSQL.</p>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">Développeur fullstack — Gemnasium</span>
            <span class="right">Juin 2017 - Décembre 2018</span>
        </h3>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">DevOps — Tech-Angels</span>
            <span class="right">Janvier 2016 - Juin 2017</span>
        </h3>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">DevOps — Bearstech</span>
            <span class="right">Août 2012 - Janvier 2016</span>
        </h3>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">DevOps — isWebdesign</span>
            <span class="right">Janvier 2006 - Juin 2012</span>
        </h3>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">Développeur — Linbox FAS</span>
            <span class="right">Septembre 2005 - Décembre 2005</span>
        </h3>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">Développeur — Freelance</span>
            <span class="right">Janvier 2005 - Décembre 2005</span>
        </h3>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">Développeur — Linbox FAS</span>
            <span class="right">Septembre 2004 - Décembre 2004</span>
        </h3>

        <h3 class="professional-experience-section" style="margin-top: 2em;">
            <span class="left">Développeur — KTP Concept</span>
            <span class="right">Octobre 2001 - Août 2003</span>
        </h3>
    </div></Layout>

<style>
    .professional-experience-section {
        border-bottom: 1px solid #aaa;
        padding-bottom: 0.2em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        font-size: 1em;

        .left {
            color: var(--heading-h1-text-color);
        }

        .right {
        }
    }
</style>
