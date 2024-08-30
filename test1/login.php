<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbgroup3";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = trim($_POST['username']);
    $pass = trim($_POST['password']);
    
    if (empty($user) || empty($pass)) {
        echo "Username and Password are required.";
    } elseif (strlen($user) < 3 || strlen($user) > 50) {
        echo "Username must be between 3 and 50 characters.";
    } elseif (strlen($pass) < 3) {
        echo "Password must be at least 3 characters.";
    } else {
        $stmt = $conn->prepare("SELECT * FROM tblaccounts WHERE Username = ? AND Password = ?");
        $stmt->bind_param("ss", $user, $pass);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // User found
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $user;
            header("Location: http://127.0.0.1:5500/MyGroup3sample.html");
            exit();
        } else {
            echo "Invalid Username or Password";
        }

        $stmt->close();
    }
}

$conn->close();
?>
