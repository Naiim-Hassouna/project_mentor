<?php

include_once 'db_connection.php';

// Retrieve the search categories from the GET parameters
$searchCategories = isset($_GET['categories']) ? explode(',', $_GET['categories']) : array();

// Build the SQL query
$sql = "SELECT p.id, p.name AS project_name, c.name AS category_name
        FROM project p
        JOIN include i ON p.id = i.proj_id
        JOIN category c ON i.categ_id = c.id";

// Add the WHERE clause with IN only if categories are specified
if (!empty($searchCategories)) {
    $categoryList = implode("', '", $searchCategories);
    $sql .= " WHERE c.name IN ('$categoryList')";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $projects = array();

    while ($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }

    // Output the projects as JSON
    echo json_encode(array('projects' => $projects));
} else {
    // No projects found for the specified categories or all projects if categories are empty
    echo json_encode(array('projects' => array(), 'message' => 'No projects found'));
}

$conn->close();

?>
