<?php

	class Categories {
                // DB stuff
                private $conn;
		private $table = 'kategorie';
		
		// Constructor with DB
                public function __construct($db) {
                        $this->conn = $db;
                }

		public function read() {
			// Create query
			$query = 'SELECT * FROM kategorie';

			// Prepare statement
			$stmt = $this->conn->prepare($query);

			// Execute query
			$stmt->execute();

			return $stmt;
		}
	}
?>

