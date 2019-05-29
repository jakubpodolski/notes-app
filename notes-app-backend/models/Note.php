<?php 

	class Note {
		// DB stuff
    		private $conn;
    		private $table = 'notatki';

    		// Post Properties
    		public $id_notatki;
    		public $tytul_notatki;
    		public $tresc_notatki;
    		public $id_uzytkownika;
    		public $data_stworzenia;
    		public $kategoria;

    		// Constructor with DB
    		public function __construct($db) {
      			$this->conn = $db;
    		}
		// Get posts
		public function read() {
			// Create query
			$query = 'SELECT p.id_notatki, p.tytul_notatki, p.tresc_notatki, p.data_stworzenia, p.kategoria, p.id_uzytkownika
                        	FROM ' . $this->table . ' p
                                ORDER BY
                                p.data_stworzenia DESC';

			// Prepare statement
			$stmt = $this->conn->prepare($query);

			// Execute query
			$stmt->execute();

			return $stmt;
		}

		public function read_user() {
			// Create query
     			$query = 'SELECT p.id_notatki, p.tytul_notatki, p.tresc_notatki, p.data_stworzenia, p.kategoria, p.id_uzytkownika
                		FROM ' . $this->table . ' p
                        	WHERE p.id_uzytkownika=?
				ORDER BY
				 p.id_notatki DESC';
      			// Prepare statement
      			$stmt = $this->conn->prepare($query);
      			// Bind ID
      			$stmt->bindParam(1, $this->id);
      			// Execute query
      			$stmt->execute();
      			return $stmt;
    		}
		public function create() {
                        // Create query

                        $query = 'INSERT INTO ' . $this->table . '(tytul_notatki, tresc_notatki, id_uzytkownika, kategoria)
                                    VALUES (
                                    :tytul_notatki,
                                    :tresc_notatki,
                                    :id_uzytkownika,
                                    :kategoria)';

                        // Prepare statement
                        $stmt = $this->conn->prepare($query);

                        // Clean data
                        //$this->tytul_notatki = htmlspecialchars(strip_tags($this->tytul_notatki));
                        //$this->tresc_notatki = htmlspecialchars(strip_tags($this->tresc_notatki));
                        //$this->id_uzytkownika = htmlspecialchars(strip_tags($this->id_uzytkownika));
                        //$this->kategoria = htmlspecialchars(strip_tags($this->kategoria));


                        // Bind data
                        $stmt->bindParam(':tytul_notatki', $this->tytul_notatki);
                        $stmt->bindParam(':tresc_notatki', $this->tresc_notatki);
                        $stmt->bindParam(':id_uzytkownika', $this->id_uzytkownika);
                        $stmt->bindParam(':kategoria', $this->kategoria);

                        // Execute query
                        if($stmt->execute()) { 
                            return true;
                        }

                        // Print error if something goes wrong
                        printf("Error: %s.\n", $stmt->error);
                        return false;
                }
		public function update() {
                    // Create query
                    $query = 'UPDATE ' . $this->table .
                    ' SET
                    tytul_notatki = :tytul_notatki,
                    tresc_notatki = :tresc_notatki,
                    id_uzytkownika = :id_uzytkownika,
                    kategoria = :kategoria 
                    WHERE id_notatki=:id_notatki';

                    // Prepare statement
                    $stmt = $this->conn->prepare($query);

                    // Clean data
                    //$this->tytul_notatki = htmlspecialchars(strip_tags($this->tytul_notatki));
                    //$this->tresc_notatki = htmlspecialchars(strip_tags($this->tresc_notatki));
                    //$this->id_uzytkownika = htmlspecialchars(strip_tags($this->id_uzytkownika));
                    //$this->kategoria = htmlspecialchars(strip_tags($this->kategoria));


                    // Bind data
                    $stmt->bindParam(':tytul_notatki', $this->tytul_notatki);
                    $stmt->bindParam(':tresc_notatki', $this->tresc_notatki);
                    $stmt->bindParam(':id_uzytkownika', $this->id_uzytkownika);
                    $stmt->bindParam(':kategoria', $this->kategoria);
                    $stmt->bindParam(':id_notatki', $this->id_notatki);


                    // Execute query
                    if($stmt->execute()) { 
                        return true;
                    }

                    // Print error if something goes wrong
                    printf("Error: %s.\n", $stmt->error);
                    return false;
            }
		public function delete() {
                // Create query
                $query = 'DELETE FROM ' . $this->table . ' WHERE id_notatki=:id_notatki';

                $stmt = $this->conn->prepare($query);

                //$this->id_notatki = htmlspecialchars(strip_tags($this->id_notatki));
                
                $stmt->bindParam(':id_notatki', $this->id_notatki);

                // Execute query
                if($stmt->execute()) { 
                    return true;
                }

                // Print error if something goes wrong
                printf("Error: %s.\n", $stmt->error);
                return false;
            }
	}
?>
