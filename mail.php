<?php 
$email = $_POST['email'];
$formcontent="From: $email";
$recipient = "easyaspui@gmail.com";
$subject = "Email Intro";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>