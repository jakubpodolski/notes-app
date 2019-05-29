<?php
  	// Headers
  	header('Access-Control-Allow-Origin: *');
  	header('Content-Type: application/json');

  	include_once '../../config/Database.php';
  	include_once '../../models/Note.php';

  	// Instantiate DB & connect
  	$database = new Database();
  	$db = $database->connect();

  	// Instantiate blog post object
  	$note = new Note($db);

  	// Get ID
  	$note->id = isset($_GET['id']) ? $_GET['id'] : die();

  	// Get post
  	$result = $note->read_user();
  	// Get row count
  	$num = $result->rowCount();

  	// Check if any posts
  	if($num > 0) {
  		// Post array
    		$notes_arr = array();

    		while($row = $result->fetch(PDO::FETCH_ASSOC)) {
				
     			extract($row);
      			$note_item = array(
        			'id_uzytkownika' => $id_uzytkownika,
        			'tytul_notatki' => $tytul_notatki,
        			'tresc_notatki' => $tresc_notatki,
        			'id_notatki' => $id_notatki,
        			'kategoria' => $kategoria,
        			'data_stworzenia' => $data_stworzenia
      			);

      			// Push to "data"
      			array_push($notes_arr, $note_item);
    		}

    		// Turn to JSON & output
    		echo json_encode($notes_arr);
  	} else {
    		// No Posts
    		echo json_encode(
      			array()
    		);
  	}

?>
