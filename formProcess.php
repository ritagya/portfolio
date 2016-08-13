<?php
	$name= $_POST['name'];
	$email= $_POST['email'];
	$findMe= $_POST['findMe'];
	$message= $_POST['message'];

	echo("Your name is " . $name . " and your email is " . $email . ". Interesting, you found me through " . $findMe . " and your message for me is " . $message);
?>