<?php

include_once 'db_connection.php';

$projectsPerPage = 6; // Replace with your actual projects per page value

// Get the size and difficulty parameters
$size = isset($_GET['size']) ? $_GET['size'] : '';
$difficulty = isset($_GET['difficulty']) ? $_GET['difficulty'] : '';

// Build the base query
$sqlBase = "SELECT COUNT(*) as totalProjects FROM project";
$sqlProjects = "SELECT id, name, img, description FROM project";

// Add conditions for size and difficulty
if ($size !== '' && $difficulty !== '') {
    $sqlBase .= " WHERE size = '$size' AND difficulty = '$difficulty'";
    $sqlProjects .= " WHERE size = '$size' AND difficulty = '$difficulty'";
}

// Get the total number of projects
$resultTotalProjects = $conn->query($sqlBase);
$totalProjects = $resultTotalProjects->fetch_assoc()['totalProjects'];

// Calculate total pages
$totalPages = ceil($totalProjects / $projectsPerPage);

// Fetch projects for the current page
$currentPage = isset($_GET['page']) ? intval($_GET['page']) : 1;
$offset = ($currentPage - 1) * $projectsPerPage;

$sqlProjects .= " LIMIT $offset, $projectsPerPage";

$resultProjects = $conn->query($sqlProjects);

if ($resultProjects->num_rows > 0) {
    $projects = array();

    while($row = $resultProjects->fetch_assoc()) {
        $projects[] = $row;
    }

    // Output the data as JSON along with total pages
    echo json_encode(array('projects' => $projects, 'totalPages' => $totalPages));

} else {
    echo json_encode(array('projects' => array(), 'totalPages' => 0));
}

$conn->close();

?>
