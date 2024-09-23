<script>
    import Layout from "../layout.svelte";
    import InitWebAnalytics from "$lib/InitWebAnalytics.svelte";
</script>
<InitWebAnalytics />

<Layout
    ><div>
        <p style="text-align: right; font-size: 0.8em;">Dernière mise à jour : 30 août 2024</p>

        <h2>Qui suis-je ?</h2>

        <aside>
            <a href="/fr/cv/cv-stephane-klein.pdf">
                <enhanced:img
                    src="./cv-stephane-klein.png"
                    style=""
                />
            </a>
            <a href="/fr/cv/cv-stephane-klein.pdf" style="text-align: center; font-size: 0.8rem;">Télécharger au format PDF</a>
        </aside>

        <p>
            Stéphane Klein, artisan développeur de plus de 20 ans d'expérience, basé à <a
                href="https://fr.wikipedia.org/wiki/Montrouge">Montrouge</a
            >, au sud de Paris.
        </p>

        <p>Depuis juillet 2024, je propose <a href="../services-freelance/">des services de software engineering en
            freelance</a> (<small>SIREN <a href="https://data.inpi.fr/entreprises/478587512">478 587 512</a></small>).</p>

        <p>
            De septembre 2023 à juin 2024, j'ai travaillé sur le développement d'une application du type <a
                href="https://en.wikipedia.org/wiki/Personal_knowledge_base">"knowledge management"</a> avec
            trois co-fondateurs.
        </p>

        <p>
            De 2019 à 2023, j'ai occupé le poste de CTO dans une startup parisienne, que j'ai rejointe juste après
            son financement initial. Avec mes collègues, nous avons élargi l'équipe <em>tech</em> de 1 à 16 personnes au cours
            de deux levées de fonds successives d'environ 5 et ensuite 20 millions d'euros.
        </p>

        <p>Cliquez <a href="#suite-de-mon-parcours">ici</a> pour consulter la suite de mon parcours
        un peu plus bas sur cette page.</p>

        <h2>Contact</h2>

        <p>
            Vous pouvez me contacter par mail à <a href="mailto:contact@stephane-klein.info"
                >contact@stephane-klein.info</a>
            ou au <a href="tel:+33661487604">06 61 48 76 04</a>, il est préférable de m'envoyer un SMS avant de me
            téléphoner.
        </p>

        <div style="text-align: center">
            <a href="https://www.linkedin.com/in/stephanekleinfrommetz" target="_blank" style="text-decoration:none;">
                <button style="background-color:#0077B5; color:white; padding:10px 20px; border:none; border-radius:5px; cursor:pointer;">
                    Me Contacter sur LinkedIn
                </button>
            </a>
        </div>

        <p>J'ai activé les notifications LinkedIn sur mon smartphone, je devrais donc pouvoir vous répondre rapidement.</p>

        <h2>Mes objectifs professionnels</h2>

        <p>
            Depuis juillet 2024, je propose mes services en software engineering freelance.<br />
            Depuis cette date, je travaille déjà en régie pour deux clients, leur apportant mon expertise en développement d'applications web et en DevOps.
        </p>

        <p>Mon objectif pour ces six prochains mois est d'essayer de développer cette activité.</p>

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

            <p>Frontend Development : JavaScript (front), ReactJS, Svelte, SvelteKit, HTML/CSS avancé, TailwindCSS, Yjs.</p>
            <p>
                Backend Development : Go, Python, JavaScript (back), GraphQL, REST, gRPC, Playwright, écriture basique de
                script Bash, Singer (ETL).
            </p>
            <p>Database : SQL, PostgreSQL avancé, PL/pgSQL, SQLite, Redis, ElasticSearch, Clickhouse, Neo4j (Cypher), Metabase.</p>
            <p>
                DevOps : Docker, Vagrant, Postfix, Nginx, Ansible, Terraform, Grafana, Prometheus, Loki, Kubernetes,
                Debian/Ubuntu/RedHat, Baremetal, AWS, Scaleway, OVH, Vector (data pipeline).
            </p>
            <p>Software Engineering : Git, Scrum, TDD, Lean, GitOps.</p>

        <h2>Expériences professionnelles</h2>

        <h3 class="professional-experience-section">
            <span class="left">Cofondateur — Value Props</span>
            <span class="right">Septembre 2023 - Juin 2024</span>
        </h3>

        <p>
            J'ai travaillé de septembre 2023 à juin 2024, en mode « solo dev » sur une application du type « <a
                href="https://en.wikipedia.org/wiki/Personal_knowledge_base">knowledge management</a> » lancée
            avec trois co-fondateurs.
        </p>

        <p>
            L'objectif de cette solution est de permettre aux entreprises de présenter leur produit via tous types
            de supports — page web, discours, fiches produits… —, toujours à jour, qui ont été créés et mis à jour via
            une webapp qui organise et présente de manière dynamique toutes les données marketing ou autrement dit,
            « la proposition de valeur ».
        </p>

        <p>
            Pour en savoir plus, vous pouvez consulter mon article « <a
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
                Avec mes collègues, nous avons élargi l'équipe tech de 1 à 16 personnes.
            </p>

            <p>
                J'ai commencé par développer une <a href="https://en.wikipedia.org/wiki/Online_marketplace">marketplace</a>
                de stockage en entrepôt, ensuite une web application de type
                <a href="https://en.wikipedia.org/wiki/Order_management_system">OMS (Order Management System)</a> et une web
                API publique.
            </p>

            <p>
                Cette Web API publique permettait de communiquer avec des applications de l'univers logistique, du type <a
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

            <p style="text-align: center; font-size: 0.8em">Une version plus détaillée de cette expérience est disponible <a href="/fr/garden/034-mon-experience-spacefill/">ici</a>.</p>

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
                Concrètement, une application <a href="https://fr.wikipedia.org/wiki/Interface_en_ligne_de_commande">CLI</a>
                permettait de gérer tout le cycle de vie — create, login, restart, debug, destroy… — de serveurs préalablement
                provisionnés et configurés en datacenter.
            </p>

            <p>Technologies mise en œuvre :
                <a href="https://en.wikipedia.org/wiki/Go_(programming_language)">Go</a>,
                <a href="https://en.wikipedia.org/wiki/GRPC">gRPC</a>/<a href="https://en.wikipedia.org/wiki/Protocol_Buffers">Protobuf</a>,
                <a href="https://en.wikipedia.org/wiki/PostgreSQL">PostgreSQL</a>,
                <a href="https://github.com/minio/minio">Minio</a>,
                <a href="https://en.wikipedia.org/wiki/Dhcp">DHCP server</a>,
                <a href="https://en.wikipedia.org/wiki/IPXE">iPXE</a>,
                <a href="https://en.wikipedia.org/wiki/Trivial_File_Transfer_Protocol">TFTP</a>,
                <a href="https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface">IPMI</a>,
                <a href="https://github.com/hashicorp/packer">Packer</a>.
            </p>

            <p style="text-align: center; font-size: 0.8em">Une version plus détaillée de cette expérience est disponible <a href="/fr/garden/033-mon-experience-scaleway/">ici</a>.</p>

            <hr style="width: 4em; margin: auto;" />

            <p>
                Les 6 mois suivants, j'ai rejoint l'équipe qui travaillait sur le produit <em>"Kubernetes as a Service"</em
                >.
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

            <p style="text-align: center; font-size: 0.8em">Une version plus détaillée de cette expérience est disponible <a href="/fr/garden/033-mon-experience-scaleway/">ici</a>.</p>

        <div id="suite-de-mon-parcours"></div>
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

    aside {
        padding: 0 1em;
        width: 30%;
        float: right;
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
            height: auto;
            border: 1px solid var(--text-color);
        }
    }
</style>
