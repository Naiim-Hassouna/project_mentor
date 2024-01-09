<?php
// add_projects.php
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

// Assuming you have a table named 'project', replace the column names accordingly
$stmt = $conn->prepare("INSERT INTO project (name, img, description, content, difficulty, size, created_at) VALUES (?, ?, ?, ?, ?, ?, current_timestamp())");
$stmt->bind_param("ssssss", $projectName, $imageName, $description, $content, $difficulty, $size);

$projectName = $_POST['projectName'];
$image = $_FILES['image'];  // Assuming 'image' is the name attribute of your file input
$description = $_POST['description'];
$content = $_POST['content'];
$difficulty = $_POST['difficulty'];
$size = $_POST['size'];

// Handle file upload
$uploadDir = 'D:\FinalProj\projEdit\public\img\card-img\\';
$uploadFile = $uploadDir . basename($image['name']);

if (move_uploaded_file($image['tmp_name'], $uploadFile)) {
    // File uploaded successfully, save image name to the database
    $imageName = 'img/card-img/' . $image['name'];

    
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $stmt->error]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to upload file']);
}

$stmt->close();
$conn->close();
?>
