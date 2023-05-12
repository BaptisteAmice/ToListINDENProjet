<?php 
    session_start();
    if (!empty($_POST))
    {
        if(isset($_POST["username"]) && isset($_POST["password"]))
        {
            $_SESSION["username"] = $_POST["username"];
        }
    }
