<?php
?>
<html>
    <body>
        <p>ma page</p>
        <header>
            <?php
            $navbar=file_get_contents("../elements/NavbarGuest.html");
            echo $navbar;
            ?>
        </header>
    </body>
</html>