# État du projet
## Choix des technologies
L'itération actuelle du projet est en retard par rapport à nos prévisions. En effet, il s'avère que cette passe du projet a davantage été focalisée sur le choix des technologies et leur prise en main, plutôt que sur leur utilisation.

Nous voulions utiliser des technologies adaptées au web et modulaires. Étant donné le nombre considérable de framework web existants, aussi bien pour le backend que le frontend, nous avions énormément de choix. Cependant la qualité de la documentations de ces différents framework étant très variable et les différentes recommendations et point de vues nous ayant été partagés très contradictoires, nous avons eu besoin d'un temps assez important pour trouver un framework à la fois assez modulaire et assez bien documenté pour que nous puissions nous former dessus en un temps raisonnable compte tenu du temps que nous avons pour ce projet.

Finalement nous avons opté pour Nest pour le backend, Angular pour le frontend et MongoDB pour la base de données.

## État actuel
À ce jour nous avons un backend fonctionnel, permettant d'enregistrer et de lire les informations sur des artistes, des médias, des utilisateurs et des listes. Les principales fonctionnalités proposées par notre solution sont donc couvertes par le backend.

La requête centrale de l'API et du projet a pratiquement été implémentée mais des bugs subsistent, dûs aux différences entre le modèle relationnel et celui orienté document (que nous découvrons avec ce projet). Il s'agit de `/lists/content/{listId}/{userId}`, cette requête permet de coupler une liste à un utilisateur. Une liste se composant de paramètres optionnels tels que des genres, des tags, des états de consommation, etc. Elle n'est qu'un template qui ne contient aucun média. L'intérêt est de pouvoir appliquer cette liste sur les consommation de n'importe quel utilisateur. N'importe quel type de liste pourra donc à l'avenir être observé pour n'importe quel utilisateur en rentrant le bon url. Les utilisateurs pourront à l'avenir créer des listes et choisir celles qu'ils souhaitent afficher sur leur profil et donc mettre en avant leurs centres d'intérêts.

Le frontend quant à lui est en place et nous permet d'ajouter des pages depuis lesquelles nous pouvons récupérer des informations dans notre base de données. Il n'y cependant encore qu'un nombre limité de page (accueil et liste des utilisateurs). La connexion des utilisateurs est également fonctionnelle, le seul changement visible qu'elle apporte est sur la barre de navigation, toutefois il suffirait d'ajouter des guardes d'authentification sur les différentes routes des pages du front pour les sécuriser.

# Suite du projet
## Tâches restantes
Nous avons identifié différentes tâches restantes:
- Peaufiner le back-end:
    - Finir totalement le CRUD de toutes les entités
    - Débuguer la requête `/lists/content/{listId}/{userId}`
    - Écrire des tests
    - Vérifier qu'il ne manque pas de fonctionnalités secondaires
    - Vérifier la sécurité de l'application
    - etc.
- Terminer l'implémentation du front-end:
    - Page d'un média
    - Profil utilisateur
    - Listes (CRUD en interface et affichage pour un utilisateur donné)
    - etc.
- Sélectionner un ensemble de titres « incontournables » pour chaque types de média, et les enregister dans notre base de donnée afin d'avoir d'avoir une base d'offre
- Créer des « adaptateurs » permettant de récupérer sur les différents services identifiés en première année (Anilist,MyAnimeList,GoodReads, The Movie Database, etc.), et de les adapter à l'affichage de notre site, au cas où nous n'aurions pas une information demandée par un utilisateur.

## Organisation
Au prochain semestre Baptiste ne pourra plus participer au module INDEN. Il ne restera alors qu'un membre sur quatre dans le groupe. Cela augmentera fortement le temps nécessaire au développement, d'autant plus que le web ne fait pas partie des compétences apprises dans la spécialité IN.<br>
Pour cela il est probable que le projet ne sera pas terminé et restera en l'état.