<?php
//echo"1";
require 'config.php';
//echo "string";
if(isset($_POST['username']) AND isset($_POST['username'])){
$username = $_POST['username'];  
$password = $_POST['password'];  
     
        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $username = mysqli_real_escape_string($con, $username);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "select * from pxp_users where username = '$username'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_row($result);  
        $count = mysqli_num_rows($result);  
       //echo $count;
        if($count == 1){  
        	 $hash=$row['password'];
             //echo $hash;  
             $response_data = array(
			        'code'     => '200',
				    'status'   => 'OK',
			        'data'         => array(
			            'user_id'   => $row['id'],
			            'access_token' => $row['api_token']
			        )
			    );
        }  
        else{  
            $response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '2',
		            'error_text' => 'Please enter valid username and password!'
		        )
		    );
        }

        $data=json_encode($response_data);   

        echo $data;
} 




?>