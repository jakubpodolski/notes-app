<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');

    include_once '../../config/Database.php';
    include_once '../../models/Note.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate blog post object
    $post = new Note($db);
    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    // Set ID to update
    $post->id_notatki = $data->id_notatki;

    $post->tytul_notatki = $data->tytul_notatki;
    $post->tresc_notatki = $data->tresc_notatki;
    $post->id_uzytkownika = $data->id_uzytkownika;
    $post->kategoria = $data->kategoria;

    // Create post
    if($post->update()) {
    echo json_encode(
            array('message' => 'Post Updated')
    );
    } else {
            echo json_encode(
                    array('message' => 'Post Not Updated')
            );
    }
?>

