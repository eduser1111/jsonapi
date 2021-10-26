<?php

// header('Access-Control-Allow-Origin: *');


$data['products'] = array(    
        'items' => [
            array("id" => 1, "name" => "HDD", "price" => 69000),
            array("id" => 2, "name" => "CPU", "price" => 95000)
        ]    
);
 
header('Content-Type: application/json');
echo json_encode($data, JSON_PRETTY_PRINT);

