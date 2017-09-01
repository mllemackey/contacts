<?php

header("Access-Control-Allow-Origin: *");

$contacts = array(
    array(
        "id" => 1,
        "firstName" => 'John',
        "lastName" => 'Doe',
        "email" => 'john@example.com'
    ),
    array(
        "id" => 2,
        "firstName" => 'Daniel',
        "lastName" => 'Ros',
        "email" => 'daniel@example.com'
    ),
    array(
        "id" => 3,
        "firstName" => 'Martin',
        "lastName" => 'Hess',
        "email" => 'martin@example.com'
    ),
    array(
        "id" => 4,
        "firstName" => 'John',
        "lastName" => 'Deere',
        "email" => 'john.deere@example.com'
    )
);

echo json_encode($contacts);