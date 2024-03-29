# ToList

## Contexte de l'application

La consommation de médias dans nos sociétés modernes est de plus en plus importante et diversifiée (films, livres, musiques, jeux, etc.). De ce fait, de nombreuses applications apparaissent pour qu'un consommateur puisse suivre son avancée dans un média spécifique. Ces logiciels permettent de plus de partager cette avancée, ils prennent alors le nom d'applications de catalogage social.

Cette offre est toutefois fragmentaire. Chaque application n'est spécialisée que dans un seul type de média et manque de modularité. Quelqu'un souhaitant suivre l'ensemble de ses avancées devra donc utiliser plusieurs applications aux interfaces et fonctionnalités différentes.

Il existe biens des applications de critiques ciblant plusieurs médias, mais elles ne permettent pas un suivi et ne sont pas non plus modulaires.


## Public cible
Nous visons principalement les personnes qui utilisent déjà plusieurs applications de catalogage social, mais cherchons également à toucher des personnes pour qui l'offre est aujourd'hui lacunaire.

Notre cible est internationale, mais la majorité des utilisateur de logiciels déjà existant est anglophone. Notre projet aura donc en premier lieu une interface en anglais pour attirer des utilisateurs du monde entier, mais nous prévoyons par la suite l'ajout d'une version française pour toucher davantage un public francophone.

D'après des statistiques utilisateurs sur d'autres applications de catalogage social, 55% des utilisateurs utilisent une application mobile et 45% une application sur ordinateur. Nous prévoyons donc une interface web responsive pour s'adapter à tous les écrans. La première version de l'application sera développée pour ordinateur, plus facile à porter sur mobile que l'inverse.

Toujours d'après la même source, le public des applications existantes se compose aujourd'hui principalement d'hommes de moins de 25 ans. Nous tâcherons donc d'attirer un public plus diversifié, notamment féminin et/ou plus âgé. Cela pourra notamment passer par une interface plus intuitive et le jeu de données initial de l'application.

## Résolution du problème
Notre solution vise d'abord à résoudre le problème de fragmentation des différentes offres. Pour cela nous avons adoptée une architecture plus souple nous permettant d'enregistrer et de manipuler dans la même base de données aussi bien:
- Des films
- Des livres
- Des séries
- Des jeux

Ainsi nous regroupons la majorité des médias traqués par des applications de catalogage social.

Par la suite il sera aussi plus simple d'ajouter des nouveaux types de données dans cette base de données, et donc de nous adapter facilement à la demande utilisateur ou éventuellement à l'apparition d'un nouveau type de média.

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
npm install # la première fois, pour l'installation des dépendances
npm start
```
Pour démarrer le front-end (dans un autre shell):
```sh
cd backend/
npm install # la première fois, pour l'installation des dépendances
npm start
```

Pour le front, il se peut que vous ayez besoin d'installer Angular CLI:
```sh
npm install -g @angular/cli
```

## Utilisation
Lien vers le <a href="./USER_MANUAL.md">manuel d'utilisation</a>.

## Roadmap
Lien vers la <a href="./ROADMAP.md">roadmap</a>.