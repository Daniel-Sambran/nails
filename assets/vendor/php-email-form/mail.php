<?php    
require("./class.phpmailer.php");
require("./class.smtp.php");

$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

$asunto = $_POST['subject'];
$mensaje = $_POST['message'];
$nombre = $_POST['name'];
$email = $_POST['email'];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "c2461653.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario ="info@mynsolucionesdigitales.com";  // Mi cuenta de correo
$smtpClave = "MYN@2023sd";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "sambran65@gmail.com";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 993; 
$mail->SMTPSecure = 'tls';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->addBCC("sambran65@gmail.com");

$mail->Subject = "$asunto"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "{$mensajeHtml}"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje}"; // Texto sin formato HTML
$mail->addAttachment("");
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Ocurrió un error inesperado.";
}