<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');

    include_once '../../config/Database.php';
    include_once '../../models/Note.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate blog post object
    $note = new Note($db);
    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    // Set ID to update
    $note->id_notatki = $data->id_notatki;

    // Delete note
    if($note->delete()) {
    echo json_encode(
            array('message' => 'note Deleted')
    );
    } else {
            echo json_encode(
                    array('message' => 'note Not Deleted')
            );
    }
?>

