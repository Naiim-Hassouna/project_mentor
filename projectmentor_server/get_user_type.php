<?php
// get_user_type.php

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

session_start(); // Start the session

// Check if the user is logged in
if (isset($_SESSION['user_id'])) {
    include 'db_connection.php'; // Include your database connection file

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Assuming you have a table named 'user', replace the column names accordingly
    $stmt = $conn->prepare("SELECT type FROM user WHERE id = ?");
    $stmt->bind_param("i", $_SESSION['user_id']); // Assuming 'id' is the user ID column in your 'user' table

    $stmt->execute();
    $stmt->bind_result($userType);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    // Return the user type as JSON
    echo json_encode(['userType' => $userType]);
} else {
    // User is not logged in
    echo json_encode(['userType' => 'guest']);
}
?>
