<?php
        // Headers
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');

        include '../../config/Database.php';
        include '../../models/Categories.php';

        // Instantiate DB & connect
        $database = new Database();
        $db = $database->connect();
        // Instantiate blog post object

        $cats = new Categories($db);

        // Blog post query
        $result = $cats->read();


        // Get row count
        $num = $result->rowCount();

        // Check if any posts
        if($num > 0) {
                // Post array
                $posts_arr = array();

                while($row = $result->fetch(PDO::FETCH_ASSOC)) {
                        extract($row);

                        $post_item = array('kategoria' => $kategoria);

                        // Push to "data"
                        array_push($posts_arr, $post_item);
                }
                // Turn to JSON & output
                echo json_encode($posts_arr);
        } else {
                // No Posts
                echo json_encode(
                        array('message' => 'No Posts Found')
                );
        }


?>
