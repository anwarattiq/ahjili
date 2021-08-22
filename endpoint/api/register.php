<?php
require 'config.php';
if (empty($_POST['username']) || empty($_POST['email']) || empty($_POST['password']) || empty($_POST['conf_password'])) {
		    $response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '5',
		            'error_text' => 'Please fill in all required fields'
		        )
		    );
		   
}
elseif (!empty($_POST['username'])) {
	$username=$_POST['username'];
	$email=$_POST['email'];
	  $sql = "select * from pxp_users where username = '$username' OR  email='$email'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_row($result);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
			$response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '6',
		            'error_text' => 'This username or email is already taken'
		        )
		    );
		}
		
	/*	elseif (!preg_match('/^[\w]*[a-zA-Z]{1}[\w]*$/', $_POST['username'])) {
			$response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '8',
		            'error_text' => 'Username contains invalid characters'
		        )
		    );
		    
		}*/
		elseif ($_POST['password'] != $_POST['conf_password']) {
			$response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '11',
		            'error_text' => 'Password does not match'
		        )
		    );
		    
		}
		elseif (strlen($_POST['conf_password']) < 4) {
			$response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '12',
		            'error_text' => 'Password is too short'
		        )
		    );
		    
		}

	else{

		$username=$_POST['username'];
		$email=$_POST['email'];
		$gender=$_POST['gender'];
		$hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

		$sql="INSERT into pxp_users (username,email,password,gender)VALUES('$username','$email','$hashed_password','$gender')";

				if(mysqli_query($con,$sql)){
					$response_data       = array(
				        'code'     => '200',
					    'status'   => 'OK',
				        'message'   => 'Your account was succesffuly created.'
					);
				}
	}


		    //self::json($response_data);
}
 echo json_encode($response_data);
?>