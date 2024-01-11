# ToList

## Contexte de l'application

La consommation de médias dans notre société moderne est de plus en plus importante et diversifiée (films, livres, musiques, jeux, etc.). De ce fait, de nombreuses applications apparaissent pour qu'un consommateur puisse suivre son avancée dans un média spécifique. Ces logiciels permettent de plus de partager cette avancée, elles prennent alors le nom d'applications de catalogage social.

Cette offre est toutefois fragmentaire. Chaque application n'est spécialisée que dans un seul type de média et manque de modularité. Quelqu'un souhaitant suivre l'ensemble de ses avancées devra donc utiliser plusieurs applications aux interfaces et fonctionnalités différentes.

Il existe biens des applications de review comprenant plusieurs médias, mais elles ne permettent pas le suivi d'une avancée et ne sont pas modulaires.


## Public cible
Nous visons principalement les personnes qui utilisent déjà plusieurs applications de catalogage social, mais cherchons également à toucher des personnes pour qui l'offre est aujourd'hui lacunaire.

Notre cible est internationale, mais la majorité des utilisateur de logiciels déjà existant est anglophone. Notre projet aura donc en premier lieu une interface en anglais pour attirer des utilisateurs du monde entier, mais nous prévoyons par la suite l'ajout d'une version française pour toucher davantage un public de niche francophone.

D'après les statistiques utilisateurs, 55% des utilisateurs utilisent l'application sur mobile et 45% sur ordinateur. Nous prévoyons donc une interface responsive pour s'adapter à tous les écrans. La première version de l'application sera développée pour ordinateur, plus facile à porter sur mobile que l'inverse.

Toujours d'après la même source, le public des applications existantes se compose aujourd'hui principalement d'hommes de moins de 25 ans. Nous tâcherons donc d'attirer un public plus diversifié, notamment féminin et/ou plus âgé. Cela pourra notamment passer par une interface plus intuitive et le jeu de données initial de l'application.

## Résolution du problème
Comme décrit dans le contexte, ...........................

Notre solution vise d'abord à résoudre le problème de fragmentation de l'offre. Pour cela nous avons adoptée une architecture plus souple nous permettant d'enregistrer et de manipuler dans la même base de données aussi bien:
- Des films
- Des livres
- Des séries
- Des jeux

Ainsi nous regroupons la majorité des médias traqués par des applications de catalogage social.
<br>
Par la suite il sera aussi plus simple d'ajouter des nouveaux types de données dans cette base de données, et donc de nous adapter facilement en cas d'apparition d'un nouveau type de médias.
<br><br>

// TODO? : Parler de la forme de l'appli?

## Installation

Pour télécharger le projet, on utilise simplement la commande:
```sh
git clone https://github.com/BaptisteAmice/ToListINDENProjet/
```

Il faut ensuite démarrer les services du back-end et du front-end. Pour cela on se place d'abord dans le projet:
```sh
cd ToListINDENProjet
```

Puis pour démarrer le front-end:
```sh
cd frontend/
npm start
```
Pour démarrer le front-end (dans un autre shell):
```sh
cd backend/
npm start
```

## Utilisation
Lien vers <a href="./USER_MANUAL.md">le manuel d'utilisation</a>.

## Roadmap
Lien vers <a href="./ROADMAP.md">la roadmap</a>.