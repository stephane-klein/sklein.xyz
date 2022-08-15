<script>
  import Avatar from '$lib/assets/avatar.png?w=300&webp';
</script>
<article>
    <aside>
        <img class="avatar" src={Avatar} alt="Avatar" />

        <div>
            <h1><a href="/">sklein.xyz</a></h1>

            <p>Je suis Stéphane, <a href="https://fr.wikipedia.org/wiki/Metz">Messin</a> expatrié à Paris, <a href="https://fr.wikipedia.org/wiki/Software_craftsmanship">artisan développeur</a> et <a href="https://fr.wikipedia.org/wiki/Tennis_de_table">pongiste</a>.</p>

            <p>Actuellement <a href="https://fr.wikipedia.org/wiki/Directeur_de_la_technologie">CTO</a> chez <a href="https://spacefill.fr/">SpaceFill</a>, j'écris du code <a href="https://news.ycombinator.com/item?id=27256867">pour le plaisir</a> et pour gagner ma vie.</p>

            <hr />

            <nav>
                <ul>
                    <li><a href="/">Home / Sommaire</a></li>
                    <li><a href="https://github.com/stephane-klein/">GitHub</a></li>
                    <li><a href="https://twitter.com/klein_stephane">Twitter</a></li>
                </ul>
            </nav>
            <footer>
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Ce(tte) œuvre est mise à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Licence Creative Commons Attribution 4.0 International</a>.
            </footer>
        </div>
    </aside>

    <main>
        <slot />
    </main>
</article>
