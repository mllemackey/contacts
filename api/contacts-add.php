<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$data = json_decode(file_get_contents('php://input'), true);

echo json_encode(array(
    "id" => 10,
    "firstName" => $data['firstName'],
    "lastName" => $data['lastName'],
    "email" => $data['email']
));