<?php
$device_id='';
 if(!empty($_SERVER['HTTP_USER_AGENT'])){
       $device_id = $_SERVER['HTTP_USER_AGENT'];
       if(preg_match('/(Mobile|Android|Tablet|GoBrowser|[0-9]x[0-9]*|uZardWeb\/|Mini|Doris\/|Skyfire\/|iPhone|Fennec\/|Maemo|Iris\/|CLDC\-|Mobi\/)/uis',$device_id)){
          //return true;
       }
    }
    //return false;
$whitelist = array(
    '127.0.0.1',
    '::1'
);

if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
 
$servername = "localhost";
$username = "asdhj_anwaaar";
$password = "asdhj_anwaaar";
$dbName="asdhj_dev";
} else{

$servername = "localhost";
$username = "asdhj_anwaaar";
$password = "asdhj_anwaaar";
$dbName="asdhj_dev";
}



// Create connection
$con = mysqli_connect($servername, $username, $password,$dbName);

// Check connection
if (!$con) {
  //die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";
?>