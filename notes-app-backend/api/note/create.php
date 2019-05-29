<?php
	// Headers
    	header('Access-Control-Allow-Origin: *');
    	header('Content-Type: application/json');
    	header('Access-Control-Allow-Methods: POST');

    	include_once '../../config/Database.php';
    	include_once '../../models/Note.php';

    	// Instantiate DB & connect
    	$database = new Database();
    	$db = $database->connect();

    	// Instantiate blog post object
    	$note = new Note($db);
    	// Get raw posted data
    	$data = json_decode(file_get_contents("php://input"));

    	$note->tytul_notatki = $data->tytul_notatki;
    	$note->tresc_notatki = $data->tresc_notatki;
    	$note->id_uzytkownika = $data->id_uzytkownika;
    	$note->kategoria = $data->kategoria;

    	// Create note
    	if($note->create()) {
    		echo json_encode(
        		array('message' => 'note Created')
    		);
    	} else {
            	echo json_encode(
                    	array('message' => 'note Not Created')
            	);
    	}
?>

