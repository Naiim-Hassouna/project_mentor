<?php
// delete-project.php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: DELETE");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Length: 0");
    header("Content-Type: text/plain");
    exit;
}

// Enable CORS for the actual request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include 'db_connection.php';

// Check if the request method is DELETE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Assuming the project ID is sent in the request body as JSON
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['projectId'])) {
        $projectId = $data['projectId'];

        // Perform the deletion query
        $sql = "DELETE FROM project WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $projectId);

        if ($stmt->execute()) {
            // Project successfully deleted
            http_response_code(204); // No Content
        } else {
            // Handle database error
            http_response_code(500); // Internal Server Error
            echo json_encode(array("error" => "Failed to delete project."));
        }

        // Close the database connection
        $stmt->close();
        $conn->close();
    } else {
        // Invalid request, project ID not provided
        http_response_code(400); // Bad Request
        echo json_encode(array("error" => "Project ID not provided."));
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("error" => "Invalid request method."));
}
?>