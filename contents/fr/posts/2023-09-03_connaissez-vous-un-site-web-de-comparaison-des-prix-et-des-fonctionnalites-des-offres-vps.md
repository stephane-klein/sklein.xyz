---
title: Connaissez-vous un site web de comparaison des prix et des fonctionnalités des offres VPS ?
date: 2021-03-19
---

# {frontmatter.title}

Billet posté sur [linuxfr.org](https://linuxfr.org/users/harobed/journaux/connaissez-vous-un-site-web-de-comparaison-des-prix-et-des-fonctionnalites-des-offres-vps), le Subreddit [SelfHosted](https://old.reddit.com/r/selfhosted/comments/16926wz/do_you_know_a_vps_prices_and_features_comparator/) et Lemmy [SelfHosted](https://lemmy.world/post/4383467) le billet suivant :

> Bonjour,
>
> Connaissez-vous des sites de comparaison des prix et des fonctionnalités des ["cloud service provider"](https://en.wikipedia.org/wiki/Cloud_computing), en particulier les offres [VPS](https://en.wikipedia.org/wiki/Virtual_private_server) (Virtual machine) ?
>
> Pour le moment, j'ai trouvé ceci :
>
> - https://www.vpsbenchmarks.com/
> - https://vpscomp.com/ (trouvé [ici](https://news.ycombinator.com/item?id=9241159))
> - https://www.serverhunter.com/ (trouvé [ici](https://news.ycombinator.com/item?id=20537209))
> - https://en.metadedi.net/ (trouvé [ici](https://en.metadedi.net/))
> - https://cloudoptimizer.io/ (trouvé [ici](https://news.ycombinator.com/item?id=26846163))
> - https://github.com/baaastijn/ovh_pricelist (OpenSource, limité à OVH)
> - [Awesome list of Cloud VPS with price breakdown](https://github.com/leogallego/awesome-vps-price-breakdown) (dernière mise à jour des prix : 2021)
> - [A price list of curated VPS hosting providers](https://github.com/boywithkeyboard/vps-hosters) (dernière mise à jour des prix : 2022)
> - https://github.com/joedicastro/vps-comparison (dernière mise à jour : 2017)
>
> ## Commentaires au sujet de [vpsbenchmarks.com](https://www.vpsbenchmarks.com/)
>
> [vpsbenchmarks.com](https://www.vpsbenchmarks.com/) correspond à ce que je cherche, mais je le trouve incomplet. Par exemple :
>
> - Pour Scaleway, [je vois 4 offres](https://www.vpsbenchmarks.com/instance_types/scaleway) sur vpsbenchmarks, alors que je compte 45 offres [sur le site officiel de Scaleway](https://www.scaleway.com/en/pricing/?tags=compute)
> - Pour DigitalOcean, [je vois 8 offres](https://www.vpsbenchmarks.com/hosters/digitalocean) alors que je compte 32 offres [sur le site officiel de DigitalOcean](https://www.digitalocean.com/pricing/droplets)
> - Pour Hetzner, [je vois 9 offres](https://www.vpsbenchmarks.com/hosters/hetzner) alors que je compte 22 offres [sur le site officiel de Hetzner](https://www.hetzner.com/cloud)
>
> J'ai peut-être mal cherché, mais je n'ai pas trouvé de page qui permet de comparer les offres VPS à fonctionnalités identiques (Shared vCPU, Dedicated vCPU…), entre deux cloud providers.
>
> ## Commentaires au sujet de [vpscomp.com](https://vpscomp.com/)
>
> Je n'ai pas trouvé Hetzner, OVH… sur [vpscomp.com](https://vpscomp.com/).
>
> ## Commentaires au sujet de [serverhunter.com](https://www.serverhunter.com)
>
> [serverhunter.com](https://www.serverhunter.com) est le service que j'ai préféré.
>
> Problème : je vois seulement l'intégration [des serveurs dédiés de OVH](https://www.serverhunter.com/company/ovh/)<br />
> Je n'ai pas trouvé [les VPS de OVH](https://us.ovhcloud.com/public-cloud/compute/).
>
> ## Commentaires au sujet de [metadedi.net](https://en.metadedi.net/)
>
> Je crois comprendre que [metadedi.net](https://en.metadedi.net/) est limité aux serveurs dédiés et j'ai un doute sur les dates de mise à jour.
>
> D'autre part, [le projet](https://gitlab.com/Ne00n/metaDedi-Filters) GitLab indiqué sur la page [about](https://en.metadedi.net/index.php?p=about) n'existe plus.
>
> ## Où est-ce que fait mes recherches ?
>
> J'ai cherché ce type de service sur :
>
> - Google
> - J'ai trouvé ceci sur Hackernews :
>   - [Ask HN: What are good hosting providers?](https://news.ycombinator.com/item?id=20537209)
>   - [Show HN: Server Hunter – Easily browse over 11,000 VPS and Dedicated Servers](https://news.ycombinator.com/item?id=19140834)
>   - [Show HN: Easy cloud instance comparison (AWS, GCP, Azure, IBM, Alibaba and more)](https://news.ycombinator.com/item?id=26846163)
> - [reddit seflhosted](https://old.reddit.com/r/selfhosted/)
> - [Lemmy Selfhosted](https://lemmy.world/c/selfhosted)
> - [GitHub](https://github.com/search?q=VPS+price&type=issues)
> - https://github.com/dalisoft/awesome-hosting
>
> ## Voici à quoi ressemblerait mon service de comparaison VPS de mes rêves
>
> - OpenSource
> - Avec une API
> - Données en OpenData
> - Quand disponible, récupération des prix à partir des API "prix" des clouds providers, sinon via du web scraping
> - Possibilité de consulter l'historique des prix
> - Permettre de comparer des résultats de benchmark des VPS, par exemple, basé sur https://github.com/masonr/yet-another-bench-script
>
> ## Question
>
> Connaissez-vous un service de ce type ? Si la réponse est non, pensez-vous qu'il devrait exister ?
>
> Bonne journée,<br />
> Stéphane
