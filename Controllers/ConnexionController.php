<?php 
    session_start();
    if (!empty($_POST))
    {
        if(isset($_POST["username"]) && isset($_POST["password"]))
        {
            $_SESSION["username"] = $_POST["username"];
        }
    }
    if (isset($_SERVER["HTTP_REFERER"])) {
        $redirect=$_SERVER["HTTP_REFERER"];
        header("Location: " . $_SERVER["HTTP_REFERER"]);
    } else {
        $redirect="Accueil.php";
    }
?>
