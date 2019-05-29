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
        $result = $post->read_user();
        // Get row count
        $num = $result->rowCount();

        // Check if any posts
        if($num > 0) {
                $row = $result->fetch(PDO::FETCH_ASSOC);
                extract($row);
                $post_item = array(
                        'id_uzytkownika' => $id_uzytkownika,
                        'nazwa_uzytkownika' => $nazwa_uzytkownika,
                        'data_zarejestrowania' => $data_zarejestrowania,
                );
                // Turn to JSON & output
                echo json_encode($post_item);
        } else {
                // No Posts
		$x;
                echo json_encode(
                   array() 
                );
        }

?>
