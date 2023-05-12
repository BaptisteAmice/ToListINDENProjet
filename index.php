<?php
$request = $_SERVER['REQUEST_URI'];
switch ($request) {
    case '/' :
        require __DIR__ . '/views/Accueil.php';
        break;
    case '' :
        require __DIR__ . '/views/Accueil.php';
        break;
    case '/Connexion' :
        require __DIR__ . '/views/connexion.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/index.php'; //temp
        break;
}