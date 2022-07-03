<?php
require 'PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// $mail->isSMTP();                  
// $mail->Host       = '';  
// $mail->SMTPAuth   = true;                                 
// $mail->Username   = '';                    
// $mail->Password   = '';
// $mail->SMTPSecure = 'ssl';                                                             
// $mail->Port       = 465;     

// $mail->SMTPOptions = array(
//     'ssl' => array(
//         'verify_peer' => false,
//         'verify_peer_name' => false,
//         'allow_self_signed' => true
//     )
// );  

$temat = 'Wiadomość ze strony';

$imie =  @$_POST['formname'];
$email =  @$_POST['formemail'];
$tel =  @$_POST['formtel'];
$firma =  @$_POST['formbrand'];
$tresc =  @$_POST['formmessage'];

$zgoda1 = @$_POST['formcheckbox1'];
$zgoda2 = @$_POST['formcheckbox2'];

$messagee = '<b>Temat wiadomości</b>: ' . $temat .
            '<br><br><b>Imie i nazwisko</b>: ' . $imie .  
            '<br><b>Adres email</b>: ' . $email . 
            '<br><b>Numer telefonu</b>: ' . $tel . 
            '<br><b>Firma</b>: ' . $firma . 
            '<br><br><b>Treść pytania</b>:<br> ' . $tresc .
            '<br><br><b>Zgoda na przetwarzanie danych:</b> ' . $zgoda1 .
            '<br><b>Zgoda na wysyłanie informacji handlowych:</b> ' . $zgoda2;

$msg = $messagee;

$mail->setFrom('biuro@bravebrain.pl', 'BraveBrain'); // skąd przyszedł email
$mail->addReplyTo($email);

$mail->addAddress('biuro@bravebrain.pl'); // adresaci
$mail->addAddress('agondek.design@gmail.com'); // adresaci

$mail->Subject = $temat;
$mail->msgHTML($msg);


if(!$mail->send()) {
    echo 'Wystąpił błąd :(';
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    echo 'Wiadomość została wysłana.';
}