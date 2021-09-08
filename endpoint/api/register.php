<?php
require 'config.php';
if (empty($_POST['email']) || empty($_POST['password']) || empty($_POST['conf_password'])) {
		    $response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '5',
		            'error_text' => 'Please fill in all required fields'
		        )
		    );
		   
}
elseif (!empty($_POST['email'])) {
	//$arr=array(0778,0773);
	$email=$_POST['email'];
	
	  $sql = "select * from pxp_users where email='$email'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_row($result);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
			$response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '6',
		            'error_text' => 'These credentials already taken'
		        )
		    );
		}
		
	
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

		

		$email=$_POST['email'];

		$gender=$_POST['gender'];

		$hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)){

		if (strpos($email,'0778') !== false ||strpos($email,'0773') !== false) { //for iraq
			$email='+964'.$email;
			//echo"iraq PHone";exit;
         //echo "$haystack contains $needle";
		}
		else{

			if (strlen($email)<11)
			{
			
			$response_data       = array(
		        'code'     => '400',
			    'status'   => 'Bad Request',
		        'errors'         => array(
		            'error_id'   => '12',
		            'error_text' => 'Please Enter your country code too'
		        )
		      );
				echo json_encode($response_data);exit;
			}
			else{

			$email='+'.$email;
			}

		}
		//echo 'Invalid';exit;
       //$emailErr = "Invalid email format";
    } 
   

		$sql="INSERT into pxp_users(email,password,gender)VALUES('$email','$hashed_password','$gender')";

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