<?php
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

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Assuming your form fields match the column names in your database
$projectId = (int)$_GET['id'];
$projectName = mysqli_real_escape_string($conn, $_GET['projectName']);
$image = mysqli_real_escape_string($conn, $_GET['image']);
$description = mysqli_real_escape_string($conn, $_GET['description']);
$content = mysqli_real_escape_string($conn, $_GET['content']);
$difficulty = mysqli_real_escape_string($conn, $_GET['difficulty']);
$size = mysqli_real_escape_string($conn, $_GET['size']);

// Output values for debugging
echo "ID: $projectId<br>";
echo "Project Name: $projectName<br>";
echo "Image: $image<br>";
echo "Description: $description<br>";
echo "Content: $content<br>";
echo "Difficulty: $difficulty<br>";
echo "Size: $size<br>";

// Update the record in the database using prepared statement
$sql = "UPDATE project SET 
        name = ?,
        img = ?,
        description = ?,
        content = ?,
        difficulty = ?,
        size = ?
        WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssis", $projectName, $image, $description, $content, $difficulty, $size, $projectId);

if ($stmt->execute()) {
    echo "Record updated successfully. Affected rows: " . $stmt->affected_rows;
} else {
    echo "Error updating record: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
