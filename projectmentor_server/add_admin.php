<?php
// add_admin.php
// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Length: 0");
    header("Content-Type: text/plain");
    exit;
}

// Enable CORS for the actual request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");

include 'db_connection.php';



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming you have a table named 'user', replace the column names accordingly
$stmt = $conn->prepare("INSERT INTO user (username, email, password, type, created_at) VALUES (?, ?, ?, 'admin', current_timestamp())");
$stmt->bind_param("sss", $username, $email, $hashedPassword);

$username = $_GET['username'];
$email = $_GET['email'];
$password = $_GET['password'];

// Hash the password before storing it
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Output variables (for testing purposes)
echo "Username: " . $username . "\n";
echo "Email: " . $email . "\n";
echo "Hashed Password: " . $hashedPassword . "\n";

if ($stmt->execute()) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
