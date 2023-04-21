<?php

    

    function test_db()
    {
        //requete bdd
        require_once('..\config\connex.php');
        require_once('..\Models\PDOModel.php');
        $dbh = connect_to_db(DB_SERVEUR, DB_ID, DB_PASSWORD, DB_NOM);
        $result = select_to_db($dbh, "SELECT * FROM lesgens");
        $dbh = null;
        echo json_encode($result);

    }

    function tets_api()
    {

    

        require '../vendor/autoload.php';


        $query = '
        query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
        pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
        }
        media (id: $id, search: $search) {
        id
        title {
            romaji
        }
        type
        genres
        }
    }
    }
    ';

    $variables = [
        "search" => "Love Live",
        "page" => 2,
        "perPage" => 50
    ];

    $http = new GuzzleHttp\Client;
    $response = $http->post('https://graphql.anilist.co', [
        'json' => [
            'query' => $query,
            'variables' => $variables,
        ]
    ]);

    echo $response->getBody();

    }

    tets_api();
?>