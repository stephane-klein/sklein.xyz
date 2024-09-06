<script>
    import Layout from "../layout.svelte";
</script>

<Layout>
    <h2>Mes disponibilités et mes tarifs</h2>

    <p>Je propose uniquement <a href="/fr/services-freelance/">des prestations</a> en <a href="https://fr.wikipedia.org/wiki/Contrat_en_r%C3%A9gie">régie</a>,
    c'est-à-dire que je facture en fonction du temps réellement passé à réaliser les prestations, plutôt que sur la base d’un <a
    href="https://fr.wikipedia.org/wiki/Forfait#Commercial">forfait</a> fixe.</p>

    <p>Voici le nombre de jours où je suis disponible chaque mois (mise à jour au 2 septembre 2024) :</p>

    <table>
        <thead>
            <tr>
                <th>Mois</th>
                <th>Jours disponibles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="month">Septembre</td>
                <td class="day">11</td>
            </tr>
            <tr>
                <td class="month">Octobre</td>
                <td class="day">12</td>
            </tr>
            <tr>
                <td class="month">Novembre</td>
                <td class="day">12</td>
            </tr>
            <tr>
                <td class="month">Décembre</td>
                <td class="day">10</td>
            </tr>
            <tr>
                <td class="month">Janvier 2025</td>
                <td class="day">18</td>
            </tr>
            <tr>
                <td class="month">Février 2025</td>
                <td class="day">18</td>
            </tr>
        </tbody>
    </table>

    <p>Mon tarif : 700 € la journée hors taxe.<p>

    <p>Voir aussi : <a href="/fr/services-freelance/">« Mes services »</a> et <a href="/fr/cv/">« Mon CV»</a>.</p>

    <p>
        N'hésitez pas à me contacter pour discuter de votre projet ou pour planifier un premier échange.
        Je serais ravi de comprendre vos besoins et de vous proposer des solutions adaptées.
    </p>

    <p>
        Vous pouvez me contacter par mail à <a href="mailto:contact@stephane-klein.info">contact@stephane-klein.info</a>
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
</Layout>
<style>
    TABLE {
        margin: 2em auto;
    }
    .month {
        text-align: right;
        padding: 0.5em 1em;
    }
    .day {
        text-align: right;
        padding-right: 4rem;
    }
    tbody tr:nth-child(odd) {
        background-color: var(--table-zebra-theme-odd-row-background-color);
    }
    tbody tr:nth-child(even) {
        background-color: var(--table-zebra-theme-even-row-background-color);
    }
</style>
