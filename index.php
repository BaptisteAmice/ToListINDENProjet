<?php
$request = $_SERVER['REQUEST_URI'];
switch ($request) {
    case '/' :
    case '' :
        require __DIR__ . '/Views/Accueil.php';
        break;
    case '/Connexion' :
        require __DIR__ . '/Views/Connexion.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/Views/index.php'; //temp
        break;
}