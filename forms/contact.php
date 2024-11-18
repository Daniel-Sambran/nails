<?php 
require("../assets/vendor/phpmailer/class.phpmailer.php");
require("../assets/vendor/phpmailer/class.smtp.php");

$nombre= $_POST['nombre'] ? $_POST['nombre']:"";
$email= $_POST['email']? $_POST['email']:"";
$mensaje = $_POST['mensaje']? $_POST['mensaje']:"Solicito Demo gratis";
$celular = $_POST['celular']? $_POST['celular']:"";

ob_start();
include("../assets/inc/mail/mail_contacto.php");
$cuerpo=ob_get_contents();
ob_end_clean();
enviarMailDeContactoANosotros($cuerpo);

if($mensaje=="Solicito Demo gratis"){
  ob_start();
  include("../assets/inc/mail/mail_contacto_con_cliente.php");
  $cuerpo=ob_get_contents();
  ob_end_clean();
  enviarMailACliente($email,$cuerpo);
}

function enviarMailDeContactoANosotros($cuerpo){

     // Datos de la cuenta de correo utilizada para enviar vía SMTP
    $smtpHost = "c2461653.ferozo.com";
    $smtpUsuario = "info@mynsolucionesdigitales.com";  
    $smtpClave = "MYN@2023sd";  

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->Port = 587; 
    $mail->IsHTML(true); 
    $mail->CharSet = "utf-8";
    
    $mail->Host = $smtpHost; 
    $mail->Username = $smtpUsuario; 
    $mail->Password = $smtpClave;
    
    $mail->From = $smtpUsuario; 
    $mail->FromName = "Contacto desde la pagina web";
    $mail->AddAddress("sambran65@gmail.com");
    $mail->AddAddress("mdsambran@gmail.com");

    $mail->AddReplyTo("info@mynsolucionesdigitales.com",'mynsolucionesdigitales');
    
    $mail->Subject = "Contacto MYN SOLUCIONES DIGITALES"; 
    
    $mensajeHtml = $cuerpo;
    $mail->Body = "$mensajeHtml"; 
    $mail->AltBody = "$cuerpo"; 

    if($mail->Send()){
        echo "OK";
    } else {
        echo "Ocurrió un error inesperado.";
        echo 'Mailer error: ' . $mail->ErrorInfo;
    }  
}

function enviarMailACliente($email,$cuerpo){

  // Datos de la cuenta de correo utilizada para enviar vía SMTP
 $smtpHost = "c2461653.ferozo.com";
 $smtpUsuario = "info@mynsolucionesdigitales.com";  
 $smtpClave = "MYN@2023sd";  

 $mail = new PHPMailer();
 $mail->IsSMTP();
 $mail->SMTPAuth = true;
 $mail->Port = 587; 
 $mail->IsHTML(true); 
 $mail->CharSet = "utf-8";
 
 $mail->Host = $smtpHost; 
 $mail->Username = $smtpUsuario; 
 $mail->Password = $smtpClave;
 
 $mail->From = $smtpUsuario; 
 $mail->FromName = "CONTROL PRO - DEMO";
 $mail->addAddress($email);
 
 $mail->AddReplyTo("info@mynsolucionesdigitales.com",'mynsolucionesdigitales');
 
 $mail->Subject = "Contacto MYN SOLUCIONES DIGITALES"; 
 
 $mensajeHtml = $cuerpo;
 $mail->Body = "$mensajeHtml"; 
 $mail->AltBody = "$cuerpo"; 

 $mail->Send();    

}