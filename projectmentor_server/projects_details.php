<?php

include_once 'db_connection.php';

// Retrieve project ID from the URL parameter
$projectId = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Fetch project details based on the project ID
$sql = "SELECT id, name, img, description, content, difficulty, size FROM project WHERE id = $projectId";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $projectDetails = $result->fetch_assoc();

    // Output the project details as JSON
    echo json_encode($projectDetails);
} else {
    // Project not found
    echo json_encode(array('error' => 'Project not found'));
}

$conn->close();

?>
