---
title: "PHP Code-Along Series (Part 2)"
editlink: true
navbar: true
---

# PHP Code-Along Series (Part 2)

The second part of this series is concerned with implementing data manipulation operations from PHP files, mainly through the use of web forms.

## Video

<div style="text-align: center;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/Q_E6sE62zKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Prep Files

### DBConnection.php

```php
<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "newDB";

	$conn = new mysqli($servername, $username, $password, $dbName);

	if($conn->connect_error)
		die("Connection failed: " . $conn->connect_error);
```

### DBCreateTable

```php
<?php
	require "DBConnection.php";

	$sql = "CREATE TABLE Employee (
    `id`			INT NOT NULL AUTO_INCREMENT,
    `name`			VARCHAR(100) NOT NULL,
    `age`			INT(3) NOT NULL,
    `email`			VARCHAR(100) NULL,

    PRIMARY KEY(id)
	);";

	if($conn->query($sql)) echo "Table created successfully!";
	else echo "Error creating Employee table: " . $conn->error;

	$conn->close();
```

### DBDropTable.php

```php
<?php
	require "DBConnection.php";

	$sql = "DROP TABLE IF EXISTS `Employee`;";

	if($conn->query($sql)) echo "Table dropped successfully!";
	else echo "Error dropping table: " . $conn->error;

	$conn->close();
```

### form.php

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Insert New Record</title>

		<link rel="stylesheet" href="style.css" />
	</head>

	<body>
		<h1>Insert New Record</h1>

		<div id="form">
			<form action="DBInsertRecord.php" method="post" autocomplete="nope">
				<label for="in_name">Name</label>
				<input type="text" name="in_name" id="in_name" placeholder="Name here" autocomplete="off" value="" />

				<label for="in_age">Age</label>
				<input type="number" name="in_age" id="in_age" placeholder="Age here" autocomplete="off" min="1" value="" />

				<label for=" in_email">E-mail</label>
				<input type="email" name="in_email" id="in_email" placeholder="E-mail here" autocomplete="off" value="" />

				<hr />
				<br />

				<input type="submit" value="Submit" />
				<input type="reset" value="Reset" />
			</form>
		</div>
	</body>
</html>
```

### index.php

```php
<?php
	require "DBConnection.php";
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>PHP Code-Along 2</title>

		<link rel="stylesheet" href="style.css">
	</head>

	<body>
		<h1>List of Records</h1>

		<div>
			<table>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Age</th>
					<th>Email</th>
					<th>Actions</th>
				</tr>
				<?php
				$sql = "SELECT * FROM `Employee`;";

				$sql_run = $conn->query($sql);

				if($sql_run) {	// if it is not false, then proceed
					if($sql_run->num_rows > 0) {	// num_rows will check if there are row(s) of results
						while($row = $sql_run->fetch_assoc()) {
							?>
				<tr>
					<td><?= $row['id']; ?></td>
					<td><?= $row['name']; ?></td>
					<td><?= $row['age']; ?></td>
					<td><?= $row['email']; ?></td>
					<td>
						<!-- <button onclick="document.location.href = 'form.php?id=<?= $row['id']; ?>'">Edit</button>
						<button onclick="deleteConfirm(<?= $row['id']; ?>);">Delete</button> -->
					</td>
				</tr>
				<?php
						}
					} else {
						// echo "No table rows found.";
						?>
				<tr>
					<td colspan="5">No records found.</td>
				</tr>
				<?php
					}
				} else {
				?>
				<tr>
					<td colspan="5">Error retrieving table rows: <?= $conn->error; ?></td>
				</tr>
				<?php
				}
			?>
			</table>
		</div>

		<script src="main.js"></script>
	</body>

</html>
```

### style.css

```css
body > div {
	margin: auto;
}

body > div#form {
	max-width: 30rem;
}

h1 {
	font-size: 4rem;
	margin-top: 5rem;
	text-align: center;
}

/* index.php only */
table {
	border-collapse: collapse;
	margin: auto;
	font-size: 24px;
}

th,
td {
	border: 1px solid black;
}

th:first-of-type,
td:first-of-type,
td:nth-of-type(3) {
	text-align: center;
	width: 50px;
}

td:nth-of-type(2),
td:nth-of-type(4) {
	min-width: 250px;
}

th:not(:first-of-type),
td:not(:first-of-type) {
	padding-left: 10px;
	padding-right: 10px;
}

table button {
	font-size: 16px;
	margin-bottom: 5px;
}

/* forms only */

p {
	font-size: 20px;
}

form input {
	font-size: 24px;
	margin-bottom: 1rem;
	width: 100%;
}

label {
	font-size: 20px;
}

/**
 * Remove Arrows/Spinners
 * Reference: https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp
 */

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type="number"] {
	-moz-appearance: textfield;
}
```

### main.js

```js
// Nothing here
```
