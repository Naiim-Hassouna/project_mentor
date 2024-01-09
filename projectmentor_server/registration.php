<?php
// registration.php
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
$checkExistingUser = $conn->prepare("SELECT id FROM user WHERE username = ? OR email = ?");
$checkExistingUser->bind_param("ss", $username, $email);

$username = $_GET['username'];
$email = $_GET['email'];

// Check if username or email already exist
$checkExistingUser->execute();
$checkExistingUser->store_result();

if ($checkExistingUser->num_rows > 0) {
    // User with the same username or email already exists
    echo json_encode(['status' => 'error', 'message' => 'Username or email already in use']);
    $checkExistingUser->close();
    $conn->close();
    exit;
}

$checkExistingUser->close();

// Continue with user registration
$stmt = $conn->prepare("INSERT INTO user (username, email, password, type, created_at) VALUES (?, ?, ?, 'user', current_timestamp())");
$stmt->bind_param("sss", $username, $email, $password);

$password = $_GET['password'];

// Add hashing for password (using password_hash function)
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$password = $hashedPassword;

if ($stmt->execute()) {
    // Start a new session
    session_start();

    // Store user information in the session
    $_SESSION['user_id'] = $stmt->insert_id; // Assuming 'id' is the primary key
    $_SESSION['username'] = $username;

    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
