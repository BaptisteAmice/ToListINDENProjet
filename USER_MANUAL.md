# Manuel utilisateur
Comme détaillé dans la <a href="./ROADMAP.md">roadmap</a>, la partie front de l'application n'est pas avancée. Nous avons un nombre très restreint de fonctionnalités. Aussi, l'affiche n'est pas encore adapté à des petits écrans ou à des écrans de téléphone.


Le lancement du backend et du front end est décrit dans le fichier <a href="./README.md">README.md</a> (utilisation de npm start dans les dossiers respectif).

## API Backend
Le back-end est accessible sous la forme d'une API REST. Vous pouvez connaitre la liste des requêtes disponibles en saisissant l'url `http://localhost:3000/api/` dans votre navigateur.
<img src="images/swagger.png"/>

## Frontend
Pour accédez au front-end, il faut se rendre à l'url `http://localhost:4200/` dans votre navigateur.


### Page d'accueil
Nous avons une page d'accueil
<img src="images/toListHomePage.png"/>
Affichant pour l'instant l'intégralité des médias existants dans la base de données. Les titres ici sont identiques car il correspond au titre que nous avons utilisé pour notre média « test ».

Une barre de recherche au dessus de la liste permet de rechercher par titre ou par identifiant un média dans la liste.

### Utilisateurs
Nous avons aussi une liste des utilisateurs
<img src="images/toListUsersList.png">
Cette page n'est pas définitive et affiche pour l'instant des informations en trop. Par la suite nous souhaitons n'afficher que les pseudos, dans le but de faciliter la recherche du profil d'une connaissance.

Là aussi, il existe un barre de recherche pour filtrer les résultats dans la liste.


### Connection 

Vous pouvez également vous connecter au compte d'un utilisateur créé. Sur la page de connexion :

<img src="images/connection.png">

Vous observerez que la barre de navigation a changé. 

<img src="images/navbar_deconnected.png">
<img src="images/navbar_connected.png">