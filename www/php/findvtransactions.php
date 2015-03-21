<?php
$array1 = array(
    "template" => "partials/1.html",
    "viewable" => "true"
);
$array2 = array(
    "template" => "partials/2.html",
    "viewable" => "true"
);
 $topass[] = $array1;
 $topass[] = $array2;
echo json_encode($topass);
?>