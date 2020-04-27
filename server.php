<?php
header('Content-Type: application/json; charset=UTF-8');

$staff = array(
    array('number' => '1020501', 'name' => 'James', 'sex'=>'M'),
    array('number' => '1020502', 'name' => 'Holly', 'sex'=>'F'),
    array('number' => '1020503', 'name' => 'Vince', 'sex'=>'M'));

if ($_SERVER['REQUEST_METHOD'] == "GET"){
    search($staff);
}else if ($_SERVER['REQUEST_METHOD'] == "POST"){
    creat();
}

function search($staff){
    if (!isset($_GET['number'])|| empty($_GET['number'])){
        echo json_encode(array('msg' => 'Please insert staff number.'));
        return;
    }
    for ($i = 0, $len = count($staff); $i < $len; $i++){
        if($staff[$i]['number'] == $_GET['number']){
            $result = $staff[$i];
        }
    }

    echo isset($result)? json_encode($result) : json_encode(array('msg'=>'This number does not exisit.'));
}

function creat(){
    if (!isset($_POST['number']) || empty($_POST['number']) ||
        !isset($_POST['name']) || empty($_POST['name']) ||
        !isset($_POST['sex']) || empty($_POST['sex'])){
        echo json_encode(array('msg' => 'Staff informaiton is incompleted.'));
        return;
    }
    //Write to database. (not finished)
    echo json_encode(array("name" => $_POST['name']));
}

?>