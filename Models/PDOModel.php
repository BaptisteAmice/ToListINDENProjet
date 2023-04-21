<?php 
    /**
     * 
     */
    function connect_to_db($serveur, $id, $mdp, $base)
    {
        try {
            $dbh=new PDO("mysql:host=$serveur;dbname=$base",$id,$mdp);
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
        
        return $dbh;
    }

    /**
     * 
     */
    function select_to_db($dbh, $sql)
    {
        $sth = $dbh->prepare($sql);
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

?>