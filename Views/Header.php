<?php
$rendu='<header><a href="/"> <img src="https://imgur.com/7NWBQEx.png"></a>';
$rendu=$rendu.'<navbar>';

session_start();
if(isset($_SESSION["username"]))
{
    $rendu=$rendu.'<a href="MaPage.php">';
    $rendu=$rendu.$_SESSION["username"];
    $rendu=$rendu.'</a><a href="./Controllers/ClearSession.php">Deconnection</a>';
} else {
    $rendu=$rendu.'<a href="./Views/Connexion.php">Connexion</a>';
}
$rendu=$rendu.'</navbar></header>';

echo $rendu;
?>