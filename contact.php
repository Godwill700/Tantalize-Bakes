<?php

if(isset($_POST)){


    $data = (object)$_POST;

    ini_set("SMTP","smtp.gmail.com" );
    ini_set("smtp_port","465");
    ini_set('sendmail_from', 'person1@gmail.com'); 

    $salesEmail = 'sales@domain.com';

    mail($salesEmail, $data->subject,$data->message, [
        'From' => $data->email,
        'To' => $$salesEmail,
        'Subject' => $data->subject
    ]);

}