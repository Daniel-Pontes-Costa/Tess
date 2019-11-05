<?php
    include('inc/client.php');

	$conn = mysqli_connect(HOST, USER, PASS, DBSA);
	// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	echo "Connected successfully";
	mysqli_close($conn);
?>