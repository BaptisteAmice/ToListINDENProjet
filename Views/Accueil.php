<?php
?>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../css/Accueil.css" /> 
        <link rel="icon" type="image/png" href="https://imgur.com/7NWBQEx.png">
        <title>ToList</title>
    </head>

    <body>
        <header>
            <?php
            session_start();
            if(isset($_SESSION["username"]))
            {
                $navbar=file_get_contents("elements/NavbarConnected.html");
            } else {
                $navbar=file_get_contents("elements/NavbarGuest.html");
            }
            echo $navbar;
            ?>
        </header>
    </body>
</html>