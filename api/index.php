<?php
/*************************model***************************/
require_once 'lib.php';

try {

    if (isset($_POST['name'], $_POST['email'])) {

        $db = new DB();

        $ua = $_SERVER['HTTP_USER_AGENT'];

        $name = $_POST['name'];
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        /*-------- validation---------*/
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            //email is fine
        }else{
            jsonp(array('error' => 'Invalid email specified.'), 409);

        }

        if (strlen($name)<=0||strlen($email)<=0){
            jsonp(array('error' => 'Please fill in all fields.'), 400);

        }
        /*--------/validation---------*/


        $stmtExists = $db->prepare('SELECT COUNT(*) FROM entrants WHERE entrant_email=:entrant_email OR entrant_ua=:entrant_ua');

        if ($result = $stmtExists->execute(array(
                'entrant_email' => $email,
                'entrant_ua' => $ua
            )) && $stmtExists->fetchColumn(0) <= 0
        ) {
            $stmt = $db->prepare('INSERT INTO entrants (entrant_name,entrant_email,entrant_ua) VALUES (:entrant_name,:entrant_email,:entrant_ua)');

            if ($result = $stmt->execute(array(
                'entrant_email' => $email,
                'entrant_name' => $name,
                'entrant_ua' => $ua
            ))
            ) {
                jsonp(array('error' => false));
            }else {
                jsonp(array('error' => $stmt->errorInfo()),500);
            }
        } else {
            jsonp(array('error' => 'You have already submitted your entry!'), 409);
        }

    } else {
        throw new \Exception("Required parameters not sent.");
    }

}catch (\Exception $e){
    jsonp(array('error'=>'A server error occurred. Please try again.'),500);
}