<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/User.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate blog post object
    $post = new User($db);
    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    $post->nazwa_uzytkownika = $data->nazwa_uzytkownika;
    $post->password = $data->password;

    // Create post
    if($post->change_passwd()) {
           echo json_encode(
                    array('message' => 'Password Changed')
            );
    } else {
            echo json_encode(
                    array('message' => 'Password Not Changed')
            );
    }
?>
