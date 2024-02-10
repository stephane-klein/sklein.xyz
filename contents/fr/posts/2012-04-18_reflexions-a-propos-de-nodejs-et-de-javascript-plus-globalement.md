---
title: Réflexions à propos de NodeJS et de Javascript plus globalement
published_at: 2012-04-12
---

# {frontmatter.title}

Billet posté sur [linuxfr.org](https://linuxfr.org/users/harobed/journaux/reflexions-a-propos-de-nodejs-et-de-javascript-plus-globalement) :

> Bonjour,
>
> Cela fait quelques jours que je me pose la question suivante : « Est-ce que Node.js ne va pas devenir une technologie incontournable / majeur dans les 2 ans qui viennent ? »
>
> **Le contexte**
>
> Je suis un développeur Python depuis de nombreuses années. J'aime ses librairies, j'aime ses outils, j'aime sa communauté.  
> J'aime tellement sa syntaxe que quand je vois la syntaxe d'autres langages, j'ai une réaction quelque peu épidermique à la lecture du code.  
> Avec le temps, l'habitude de la syntaxe Python minimaliste proche d'un pseudo code rend difficile la possibilité d'apprécier un autre langage. Je ne sais pas si c'est positif ou négatif, je me pose simplement la question. Enfin ceci est un autre sujet.
>
> Cependant, mon regard se tourne de plus en plus vers [Node.js](http://nodejs.org/)... je n'ai pas franchi le pas, je n'ai rien développé en Node.js… mais je me demande si je ne passe pas à côté de quelque chose d'important.
>
> **Les forces de Node.js**
>
> - Bien que Node.js date seulement de 2009 :
>   - Il a déjà un bon système de package : [Node Package Manager](http://npmjs.org/) que la grande majorité de la communauté semble utiliser
>   - Il a déjà une très forte communauté, de très nombreuses librairies, exemple : [plein de librairies classées](https://github.com/joyent/node/wiki/modules), déjà plus de 9000 packages sur [npm](http://search.npmjs.org/)
>   - [De plus en plus de sociétés semblent l'utiliser](https://github.com/joyent/node/wiki/Projects,-Applications,-and-Companies-Using-Node)
> - Tous les développeurs web (front-end) connaissent le langage, il est très populaire. Par conséquent, pour passer à Node.js il n'y a pas le frein d'apprendre un nouveau langage comme ça serait le cas avec l'utilisation d'un framework web basé sur Ruby ou Python. Je pense que dans les mois qui viennent, de nombreux développeurs PHP vont passer à Node.js… surtout ceux qui regardaient ailleurs, mais qui ne souhaitent pas apprendre un nouveau langage.
> - La possibilité de partager du code (librairies communes…) entre la partie client et serveur peut être intéressant. La question se pose de plus en plus étant donné qu'on est de plus en plus amené à effectuer beaucoup de traitements coté client (exemple avec [Backbone.js](http://documentcloud.github.com/backbone/)).  
>   Dernièrement, dans tous mes projets de développement web, j'ai utilisé un moteur de template côté client en plus du moteur de template côté serveur.  
>   Je dois gérer de plus en plus souvent une couche modèle côté client. Des vues côté client… Cela fait donc plein d'éléments en doubles, utilisés une fois sur le serveur, une fois sur le client. Donc deux technologies à maîtriser.  
>   Ces derniers jours, la visualisation du screencast du framework javascript [Meteor](http://meteor.com/) m'a mis la puce à l'oreille.  
>   Autre exemple, il est possible d'utiliser la même API Canvas côté client et côté serveur (avec [node-canvas](https://github.com/learnboost/node-canvas)).
> - Node.js semble être très rapide, ça tient très bien la montée en charge.
> - La vitesse de l'interpréteur Javascript est en constante progression [V8 (JavaScript engine)](http://en.wikipedia.org/wiki/V8_%28JavaScript_engine%29)
>
> **Faiblesses de Node.js**
>
> Je ne sais pas si mes remarques sont exactes, je n'ai aucune expérience en Node.js.
>
> - Exemple dans la partie [Bad Use Cases](http://nodeguide.com/convincing_the_boss.html#bad-use-cases) du guide [Felix's Node.js Convincing the boss guide](http://nodeguide.com/convincing_the_boss.html) il est indiqué que les frameworks Node.js sont moins matures que ce que l'on peut trouver en Ruby, Python et Php (bon pour ce dernier j'ai des doutes, je pense que la communauté Node.js est déjà plus mature, plus structurée que la communauté Php… enfin bon…).
> - Je ne pense pas que [Sequelize](http://sequelizejs.com/) soit aussi mature que [SQLAlchemy](http://www.sqlalchemy.org/)
> - Je n'ai pas trouvé d'outil comme [Whoosh](http://packages.python.org/Whoosh/) en Javascript (c'est un moteur de recherche léger). J'ai tout de même trouvé [Node-xapian](https://github.com/networkimprov/node-xapian)
>
> Je ne sais pas s'il est encore tôt pour passer à Node.js mais si la communauté continue à être aussi dynamique que ces 2 dernières années… alors les pièces manquantes seront bientôt créées.
>
> **Est-ce que l'on va retrouver Javascript partout ?**
>
> Voici une petite liste :
>
> - Javascript dans les navigateurs web
> - Javascript coté serveur (Node.js)
> - Javascript dans Qt [Introduction QML + Qt Quick](http://doc.qt.nokia.com/4.7/qml-intro.html) qui semble vraiment super puissant
> - Les possibilités d'utiliser Gtk + JS : [gjs and Gtk+](http://pastebin.com/Md65QLnT)
> - Gnome Shell est [en grande partie développé](http://git.gnome.org/browse/gnome-shell/tree/js/ui) en Javascript. Ses extensions sont entièrement développé en JS
> - Sur mobile [WebOS](http://en.wikipedia.org/wiki/Webos) et [Boot to Gecko](http://en.wikipedia.org/wiki/Boot_to_gecko)
>
> Quand je vois cette liste, je me pose sérieusement la question : est-ce que Javascript est le langage incontournable de ces 10 prochaines années ? Certes, il est déjà incontournable dans le navigateur, mais pour le reste ?
