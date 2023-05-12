<?php 
    session_start();
    if (isset($_SERVER["HTTP_REFERER"])) {
        $redirect=$_SERVER["HTTP_REFERER"];
        header("Location: " . $_SERVER["HTTP_REFERER"]);
    } else {
        $redirect="Accueil.php";
    }
    session_destroy();
    header('Location: '.$redirect);
    exit();
?>