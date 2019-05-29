<?php

        class User {
                // DB stuff
                private $conn;
                private $table = 'uzytkownicy';

                // Post Properties
                public $id_uzytkownika;
                public $nazwa_uzytkownika;
                public $password;
                public $data_zarejestrowania;

                // Constructor with DB
                public function __construct($db) {
                        $this->conn = $db;
                }
                // Get posts
                
                public function read_user() {
                        // Create query
                        $query = 'SELECT p.id_uzytkownika, p.nazwa_uzytkownika, p.data_zarejestrowania
                                FROM ' . $this->table . ' p
                                WHERE p.nazwa_uzytkownika=?';
                        // Prepare statement
                        $stmt = $this->conn->prepare($query);
                        // Bind ID
                        $stmt->bindParam(1, $this->nazwa_uzytkownika);
                        // Execute query
                        $stmt->execute();
                        return $stmt;
                }

                public function create() {
                        // Create query
                        $query = 'INSERT INTO ' . $this->table . '(nazwa_uzytkownika, password)
                                    VALUES (
                                    :nazwa_uzytkownika,
                                    :password)';

                        // Prepare statement
                        $stmt = $this->conn->prepare($query);

                        // Bind data
                        $stmt->bindParam(':nazwa_uzytkownika', $this->nazwa_uzytkownika);
                        $stmt->bindParam(':password', $this->password);

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
                        $query = 'DELETE FROM ' . $this->table . ' WHERE nazwa_uzytkownika=:nazwa_uzytkownika AND password=:password';
        
                        $stmt = $this->conn->prepare($query);
        
                        $stmt->bindParam(':nazwa_uzytkownika', $this->nazwa_uzytkownika);
                        $stmt->bindParam(':password', $this->password);
        
                        // Execute query
                        if($stmt->execute()) { 
                            return true;
                        }
        
                        // Print error if something goes wrong
                        printf("Error: %s.\n", $stmt->error);
                        return false;
                    }

                public function change_passwd() {
                    // Create query
                    $query = 'UPDATE ' . $this->table .
                    ' SET
                    password = :password
                    WHERE nazwa_uzytkownika=:nazwa_uzytkownika';

                    // Prepare statement
                    $stmt = $this->conn->prepare($query);

                    // Bind data
                    $stmt->bindParam(':nazwa_uzytkownika', $this->nazwa_uzytkownika);
                    $stmt->bindParam(':password', $this->password);

                    // Execute query
                    if($stmt->execute()) { 
                        return true;
                    }

                    // Print error if something goes wrong
                    printf("Error: %s.\n", $stmt->error);
                    return false;
            }
                            
                public function get_passwd() {
                        $query = 'SELECT p.password
                                FROM ' . $this->table . ' p 
                                WHERE p.nazwa_uzytkownika=?';

                        // Prepare statement
                        $stmt = $this->conn->prepare($query);
                        // Bind ID
                        $stmt->bindParam(1, $this->nazwa_uzytkownika);
                        // Execute query
                        $stmt->execute();
                        return $stmt;
                }
            
        }
?>
