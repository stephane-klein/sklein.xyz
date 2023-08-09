---
title: Mon workflow de merge request
date: 2021-03-19
---

# {frontmatter.title}

Le contenu de ce billet s'adresse uniquement à des utilisateurs de [GitLab](https://fr.wikipedia.org/wiki/GitLab).

## Un commit par objectif

J'essaie de suivre au maximum le principe : une issue => un objectif => une Merge Request => un commit.

## Squash des commits

Lors de la phase de développement d'une issue, je push réguliérement mon code dans la branche attachée à la Merge Request.

Généralement, je commit avec le message `WIP [skip-ci]` (Work In Progress).

Quand je suis satisfait de ma Merge Request, lorsqu'elle est prête à passer en phase de review, je [squash mes multiples commits](https://stackabuse.com/git-squash-multiple-commits-in-to-one-commit/) en un seule commit.

Cette fois, je prends soin de rédiger un bon message de commit qui respecte deux contraintes :

- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/) (voir aussi [« Git workflow »](https://github.com/stephane-klein/CONTRIBUTE-skeleton/blob/master/CONTRIBUTE.md#git-workflow))
- La configuration de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) du projet ([exemple de configuration](https://gist.github.com/stephane-klein/f285763641a6e5103b7a93fbafb45c28))

## Pourquoi je n'utilise pas la fonction Squash intégrée dans GitLab ?

La [documentation de GitLab précise](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) :

> The squashed commit’s commit message will be either:
>
> - Taken from the first multi-line commit message in the merge.
> - The merge request’s title if no multi-line commit message is found.

Je trouve personnellement ce fonctionnement un peu hasardeux, source d'erreur, par conséquent j'ai pris
l'habitude de Squash manuellement mes commits, comme cela tout est prêt pour le reviewer,
il a moins à se poser de questions.
