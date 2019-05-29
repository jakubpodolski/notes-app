<?php
        // Headers
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');

        include '../../config/Database.php';
        include '../../models/User.php';

        // Instantiate DB & connect
        $database = new Database();
        $db = $database->connect();

        // Instantiate blog post object
        $post = new User($db);

        // Get nazwa_uzytkownika
        $post->nazwa_uzytkownika = isset($_GET['nazwa_uzytkownika']) ? $_GET['nazwa_uzytkownika'] : die();

        // Get post
        $result = $post->get_passwd();
        // Get row count
        $num = $result->rowCount();

        // Check if any posts
        if($num > 0) {
                $row = $result->fetch(PDO::FETCH_ASSOC);
                extract($row);
                $hash_passwd = md5($password);
                $post_item = array(
                        'password' => $hash_passwd,
                );
                // Turn to JSON & output
                echo json_encode($post_item);
        } else {
                // No Posts
                echo json_encode(
                        array('message' => 'No Posts Found')
                );
        }

?>
