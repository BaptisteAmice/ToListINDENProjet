<?php


function test_session()
{
    session_start();
    if (isset($_SESSION['id'])) {
        echo json_encode($_SESSION['id']);
    } else {
        echo json_encode("pas de session");
    }
}

function create_session()
{
    session_start();
    $_SESSION['id'] = 1;
    echo json_encode($_SESSION['id']);
}

test_session();

