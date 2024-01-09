<?php
// logout.php

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

// Include your configuration file and other necessary headers
include 'db_connection.php';

// Start the session
session_start();

// Check if the user is logged in
if (isset($_SESSION['user'])) {
    // Destroy the session
    session_destroy();

    // Respond with success status
    echo json_encode(['status' => 'success', 'message' => 'User logged out successfully']);
} else {
    // Respond with an error status if the user is not logged in
    echo json_encode(['status' => 'error', 'message' => 'No active session']);
}

// Close any database connections or perform cleanup if needed
$conn->close();
?>
