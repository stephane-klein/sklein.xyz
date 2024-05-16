<script>
    import Layout from "../layout.svelte";
</script>

<Layout>
    <p>Voici une première liste de prestations freelance que je propose.</p>

    <p>
        Pour en savoir plus à mon sujet, vous pouvez consulter <a href="https://sklein.xyz">sklein.xyz</a> ou
        <a href="/fr/cv/">mon CV</a>.
    </p>

    <p>Précision : cette liste n'est pas du tout classée par prix de prestation.</p>

    <strong>Prestation de développement</strong>

    <ul>
        <li>
            Lancement d'une application web de type MVP (Produit Minimum Viable) soignée, développée de déployée à
            partir de zéro sans bug.
        </li>
        <li>
            Développement et déploiement à partir de zéro d'une <a href="https://en.wikipedia.org/wiki/Web_API"
                >Web API publique</a> documentée, connectée à votre modèle de données.
        </li>
        <li>
            Amélioration de la vitesse d'exécution de votre backend, qui peut passer par des optimisations des requêtes
            SQL, ajout d'index, adaptation du modèle de données…
        </li>
        <li>Migration de votre projet de MySQL vers PostgreSQL.</li>
        <li>
            Votre application a beaucoup de bugs… vous ne savez plus comment traiter ce problème ? Je peux vous aider à
            stabiliser votre application suivant une stratégie de court ou moyen terme.
        </li>
        <li>
            Développement et déploiement d'une API GraphQL basée sur <a href="https://github.com/graphile/postgraphile"
                >PostGraphile</a>
            ou <a href="https://github.com/hasura/graphql-engine">Hasura</a>.
        </li>
        <li>
            Mise en place de tests d'User Interface automatisés de votre application, basés sur <a
                href="https://playwright.dev/">PlayWright</a
            >.
        </li>
        <li>Adaptation de votre frontend web codé en ReactJS, VueJS ou Svelte vers TailwindCSS et TailwindUI.</li>
        <li>
            Mise en place, création, mise en forme, amélioration ou rédaction d'une documentation technique ou
            utilisateur basée sur des moteurs du type
            <a href="https://docusaurus.io/">Docusaurus</a>,
            <a href="https://www.sphinx-doc.org">Sphinx</a>,
            <a href="https://github.com/obsidianmd">Obsidian</a>…
        </li>
        <li>
            Mise en place ou debug de services mails,
            <a href="https://en.wikipedia.org/wiki/Postfix_(software)">Postfix</a>, SMTP,
            <a href="https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail">DKIM</a>,
            <a href="https://en.wikipedia.org/wiki/Sender_Policy_Framework">SPF</a>,
            <a href="https://en.wikipedia.org/wiki/Amazon_Web_Services">Amazon SES</a>…
        </li>
    </ul>

    <strong>Prestation "pompier"</strong>

    <ul>
        <li>Correction de bugs sous forme de "quickwin".</li>
        <li>Réduction des lenteurs de votre application sous forme de "quickwin".</li>
        <li>Traitement en urgence de problèmes d'hébergement (hosting).</li>
    </ul>

    <strong>Prestation de conseil</strong>

    <ul>
        <li>
            Étude si une migration de votre projet <a href="https://en.wikipedia.org/wiki/Monolithic_application"
                >d'une architecture monolithique</a>
            vers une architecture en <a href="https://en.wikipedia.org/wiki/Microservices">microservices</a> est pertinente
            ou non.
        </li>

        <li>Étude de réduction de la facture de votre infrastructure d'hébergement (cloud hosting).</li>

        <li>
            Je peux vous aider à définir une stratégie de refactoring en douceur de votre projet, sans casser l'existant
            en migrant petite partie par petite partie.
        </li>

        <li>
            Vous êtes enlisé dans de la dette technique, vous ne savez pas comment vous sortir de cette impasse ? Je
            peux peut-être vous aider.
        </li>

        <li>
            Étude pour déterminer si l'utilisation d'une base de données orientée Graph type Neo4j peut être utile pour
            votre besoin métier, si c'est adapté à votre modèle de données.
        </li>

        <li>
            Réalisation un prototype permettant de tester si l'utilisation d'une base de données OLAP, type <a
                href="https://en.wikipedia.org/wiki/ClickHouse">ClickHouse</a> pourrait être pertinente pour améliorer la
            performance de moteur de base de données.
        </li>

        <li>
            Vous ne savez pas par quel bout prendre votre idée de projet, de feature, je peux vous aider à construire
            une spécification technique et/ou produit.
        </li>
    </ul>

    <strong>Prestation de DataOps</strong>

    <ul>
        <li>
            Développement de scripts de data scraping, <a href="https://en.wikipedia.org/wiki/Web_scraping"
                >Web scraping</a
            >, automatisation d'action sans API...
        </li>

        <li>
            Mise en place ou contribution à un système de data visualisation (dashboard…) ou de data publication basé
            sur
            <a href="https://github.com/metabase/metabase">Metabase</a>,
            <a href="https://github.com/simonw/datasette">Datasette</a>,
            <a href="https://github.com/evidence-dev/evidence">Evidence</a>,
            <a href="https://github.com/ppatrzyk/gitbi">Gitbi</a> ou
            <a href="https://github.com/observablehq">Observable</a>.
        </li>

        <li>Développement de scripts <a href="https://en.wikipedia.org/wiki/Extract,_transform,_load">ETL</a>.</li>

        <li>
            Mise en place ou contribution à un moteur d'exécution de jobs (exemple des <a
                href="https://en.wikipedia.org/wiki/Extract,_transform,_load">ETL</a
            >) avec workflow du type <a href="https://github.com/apache/airflow">Airflow</a> ou
            <a href="https://github.com/spotify/luigi">Luigi</a>.
        </li>
    </ul>

    <strong>Prestation d'infrastructure</strong>

    <ul>
        <li>
            Création ou amélioration d'un « Development Kit » pour votre ou vos projets informatiques. L'objectif de ce
            DevKit et d'accélérer l'intégration (onboarding) de vos développeurs, de rendre leur environnement de
            travail plus agréable et de faciliter la prise en main des projets en équipe.
        </li>

        <li>
            Mise en place de processus automatisés ou semi-automatisés de <a
                href="https://en.wikipedia.org/wiki/Continuous_delivery">Continuous Delivery</a>
            basés sur <a href="https://docs.gitlab.com/ee/ci/">GitLab-CI/CD</a> ou
            <a href="https://docs.github.com/en/actions">GitHub Actions</a>
            pour déployer votre projet sur des serveurs
            <a href="https://en.wikipedia.org/wiki/Amazon_Web_Services">AWS</a>,
            <a href="https://en.wikipedia.org/wiki/OVHcloud">OVH</a>,
            <a href="https://en.wikipedia.org/wiki/Scaleway">Scaleway</a>,
            <a href="https://en.wikipedia.org/wiki/Hetzner">Hetzner</a>, <a href="https://www.vultr.com/">Vultr</a>, ou
            <a href="https://en.wikipedia.org/wiki/DigitalOcean">DigitalOcean</a>…
        </li>

        <li>
            Migration de projets <a
                href="https://www.thoughtworks.com/insights/blog/agile-engineering-practices/monorepo-vs-multirepo"
                >multi-repository vers un monorepo</a
            >.
        </li>

        <li>Adaptation de vos projets à Docker, création d'images Docker ("Dockerisation") de vos applications.</li>

        <li>
            Migration de votre projet <a href="https://en.wikipedia.org/wiki/Monolithic_application"
                >d'une architecture monolithique</a>
            vers une architecture en <a href="https://en.wikipedia.org/wiki/Microservices">microservices</a>.
        </li>

        <li>
            Peut-être que l'architecture microservices n'était pas adaptée au niveau de maturité de votre projet ; dans
            ce cas, je peux vous aider à migrer votre projet d'une architecture en microservices vers une architecture
            plus simple de type monolithique.
        </li>

        <li>Refactoring de votre infrastructure d'hébergement afin d'en réduire le coût.</li>

        <li>
            Votre monitoring coûte trop cher, je peux vous aider à mettre en place et peut-être migrer vers une infra de
            monitoring basée sur <a href="https://github.com/prometheus/prometheus">Prometheus</a>,
            <a href="https://github.com/grafana/grafana">Grafana</a>,
            <a href="https://github.com/grafana/loki">Loki</a>…
        </li>
    </ul>

    <p>
        Pour toutes ces prestations, mes livrables sont des Merge Request / Pull Request avec descriptions explicites
        prêtes à être review par votre équipe. J'aime pratiquer la méthode #WorkInPublic ; par conséquent, l'évolution
        de mon travail est visible en continu via des commits, des commentaires ou des questions tout au long de la
        mission.
    </p>

    <p>
        Vous pouvez me contacter par mail à <a href="mailto:contact@stephane-klein.info">contact@stephane-klein.info</a>
        ou au <a href="tel:+33661487604">06 61 48 76 04</a>, il est préférable de m'envoyer un SMS avant de me
        téléphoner.
    </p>
</Layout>
