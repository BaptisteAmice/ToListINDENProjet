<?php
    require_once("../Controllers/ConnexionController.php");
    $view = '
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Login</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
        </head>
        <body>
            <div class="login">
                <h1>Login</h1>
                <form action="Connexion.php" method="post">
                    <label for="username">
                        <i class="fas fa-user"></i>
                    </label>
                    <input type="text" name="username" placeholder="Username" id="username" required>
                    <label for="password">
                        <i class="fas fa-lock"></i>
                    </label>
                    <input type="password" name="password" placeholder="Password" id="password" required>
                    <input type="submit" value="Login">
                </form>
            </div>
            <div class="create_accout">
            <h1>Create account</h1>
            <form action="Connexion.php" method="post">
                <label for="username_create">
                    <i class="fas fa-user"></i>
                </label>
                <input type="text" name="username_create" placeholder="Username" id="username_create" required>
                <label for="password_create">
                    <i class="fas fa-lock"></i>
                </label>
                <input type="password" name="password_create" placeholder="Password" id="password_create" required>
                <input type="password" name="password_validation" placeholder="Password Validation" id="password_validation" required>
                <input type="submit" value="Login">
            </form>
        </div>
        </body>
    </html>
    ';
    if(isset($_SESSION["username"]))
    {
        $view = 'connected' . $_SESSION["username"] . 
        '<form action="ClearSession.php" method="post">
            <input type="submit" value="Disconnect">
        </form>';
    }
    echo $view;
?>