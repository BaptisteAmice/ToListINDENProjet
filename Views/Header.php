<?php
$rendu='<header><img src="https://imgur.com/7NWBQEx.png">';
$rendu=$rendu.'<navbar>';

session_start();
if(isset($_SESSION["username"]))
{
    $rendu=$rendu.'<a href="MaPage.php">';
    $rendu=$rendu.$_SESSION["username"];
    $rendu=$rendu.'</a><a href="./Controllers/ClearSession.php">Deconnection</a>';
} else {
    $rendu=$rendu.'<a href="/Connexion">Connexion</a>';
}
$rendu=$rendu.'</navbar></header>';

echo $rendu;
?>