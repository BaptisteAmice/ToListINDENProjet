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
            $navbar=file_get_contents("../elements/NavbarGuest.html");
            echo $navbar;
            ?>
        </header>
    </body>
</html>