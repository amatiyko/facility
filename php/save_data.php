<?php
$name = $_POST['name'];
$email = $_POST['email'];

$file = fopen('db.txt', 'a+');
fwrite($file, "NAME: ${name}. EMAIL: ${email}." . PHP_EOL);
fclose($file);