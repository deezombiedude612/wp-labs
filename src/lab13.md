---
template: base.html
---

# PHP Code-Along Series (Part 3)

The final part of this series can serve as an extension to the activity done in Practical 9.
Here, we will be going through how to utilize credentials stored in a database in simulating a mock login and logout functionality.

## Video

<div style="text-align: center;">
	<iframe class="youtube-iframe" src="https://www.youtube.com/embed/eY5TjZVZZIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Prep Files

```php title="DBConnection.php"
<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "newDB";

	$conn = new mysqli($servername, $username, $password, $dbName);

	if($conn->connect_error) die("Connection failed: " . $conn->connect_error);
```

```php title="auth.php"
<?php
	// Nothing here
```

```php linenums="1" title="index.php"
<?php
	$message = "You are not logged in.";
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Log-in</title>

		<style>
			body {
				height: 100vh;
				margin: 0;
			}

			#main {
				background-color: lightgray;
				margin: 20vh auto;
				min-width: 600px;
				min-height: 600px;
				text-align: center;
				width: 40vw;
				height: 60vh;
			}

			h1 {
				padding: 4rem 0;
			}

			input,
			button {
				font-size: 24px;
				margin: 2rem 0;
				text-align: center;
			}

			input:not([type="submit"]):not([type="reset"]) {
				max-width: 500px;
				width: 60%;
			}
		</style>
	</head>

	<body>
		<div id="main">
			<h1 id="message"><?= $message; ?></h1>

			<div id="content">
				<button onclick="window.location.href='login.php';">Log In</button>
			</div>

		</div>

	</body>
</html>
```

```html linenums="1" title="login.php"
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Log-in</title>

		<style>
			body {
				height: 100vh;
				margin: 0;
			}

			#main {
				background-color: lightgray;
				margin: 20vh auto;
				min-width: 600px;
				min-height: 600px;
				text-align: center;
				width: 40vw;
				height: 60vh;
			}

			h1 {
				padding: 4rem 0;
			}

			input,
			button {
				font-size: 24px;
				margin: 2rem 0;
				text-align: center;
			}

			input:not([type="submit"]):not([type="reset"]) {
				max-width: 500px;
				width: 60%;
			}

			#invalid_login_msg {
				background-color: lightpink;
				border: 2px solid red;
				font-size: 20px;
				margin: auto;
				padding: 1rem 0;
				width: 600px;
			}
		</style>
	</head>

	<body>
		<div id="main">
			<h1>Login Page</h1>

			<form action="auth.php" method="post" autocomplete="nope">
				<input type="text" name="username" id="username" placeholder="Username" autocomplete="false" />
				<input type="password" name="password" id="password" placeholder="Password" autocomplete="false" />

				<br />
				<input type="submit" value="Submit" />
				<input type="reset" value="Reset" />
			</form>
			<button onclick="window.location.href='.';">Go Back</button>
		</div>
	</body>
</html>
```

```sql title="userTable.sql"
DROP TABLE IF EXISTS `newDB`.`User`;
CREATE TABLE `newDB`.`User` (
	`id`				INT NOT NULL AUTO_INCREMENT,
	`username`			VARCHAR(20) NOT NULL,
	`password`			VARCHAR(100) NOT NULL,
	`name`				VARCHAR(100) NOT NULL,

	PRIMARY KEY(`id`)
);

INSERT INTO `newDB`.`User` (`username`, `password`, `name`) VALUES
('110358', 'Weloveqwerty123', 'Person');
```

!!! warning

    The code-along video uses a different username, exercise caution if you plan on using this username instead.
