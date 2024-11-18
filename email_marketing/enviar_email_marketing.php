<?php 
require("../assets/vendor/phpmailer/class.phpmailer.php");
require("../assets/vendor/phpmailer/class.smtp.php");

ob_start();
include("template_contacto_en_frio_cerrajeria.html");
$cuerpo=ob_get_contents();
ob_end_clean();
// $mails =[
//     "lea.argo@gmail.com",
//     "info@pvcportico.com.ar",
//     "ventas@alumilcerramientos.com.ar"
//     ];
$mails =[
    // "mdsambran@gmail.com",
    "sambran65@gmail.com",
    // "info@miscerrajerosmadrid.com",
    // "info@clickcerrajeros.es",
    // "jesus@cerrajeromadrid.es",
    // "contacto@nextcerrajeros.com",
    // "info@cerrajeros.info",
    // "info@cerrajerosmadrid.madrid",
    // "clientes@cerrajerobcnclaus.com",
    // "cerrajeriabenlloch@gmail.com",
    // "info@solucionesalinstante.es",
    // "info@cerrajeriarapida.net",
    // "cerrajeriame2023@gmail.com",
    // "cerrajeria@vilfer24h.com",
    // "abrefacil@abrefacil.es",
    // "info@cerrajero24horasmarionunez.com",
    // "vegacerrajeros@gmail.com",
    // "info@cerrajeriamacarena.com",
    // "infollave22@gmail.com",
    // "cerrajerogarrido@malaga-cerrajero24h.es",
    // "hola@cerrajerosatalaya.com",
    // "info@cerrajerosac.com",
    // "cerrajeros@rodriguezcoreaehijos.com",
    // "cerrajeriajavierburgos@gmail.com",
    // "info@cerrajerosdecoches.com",
    // "info@ferreteria-soria.com",
    // "administración@metalnavarro.info",
    // "cejhernandez@regmurcia.com",
    // "agv24h@agvcerrajeros.com",
    // "contacto@cerrajeriadominguez.com",
    // "hola@abriendopuertas.es",
    // "ade.elevation@gmail.com",
    // "tancafort@hotmail.es",
    // "taller@rosendoramon.es",
    // "tiendaza@rosendoramon.es",
    // "tienda@rosendoramon.es",
    // "info@rafaelolivessintes.com",
    // "Admin@i-cerrajeros.es",
    // "info@cerrajeriamadridyague.com",
    "david@puertascamino.com"
];
// "info@miscerrajerosmadrid.com",
// "info@clickcerrajeros.es",
// "jesus@cerrajeromadrid.es",
// "contacto@nextcerrajeros.com",
// "info@cerrajeros.info",
// "info@cerrajerosmadrid.madrid"
// "mariocerrajeros@gmail.com",
// "ditec@iniciativazul.com"
foreach ($mails as $key => $email) {
    enviarMailACliente($cuerpo,$email);
}

function enviarMailACliente($cuerpo,$email){
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
 $mail->FromName = "Software para CERRAJERíAS - CONTROL PRO";
 $mail->addAddress("info@mynsolucionesdigitales.com");
 $mail->addAddress($email);

 $name= $_SERVER['DOCUMENT_ROOT'].'/control_pro/assets/video/demo_control_pro.mp4';
 $mail->AddAttachment($name);
 $mail->AddReplyTo("info@mynsolucionesdigitales.com",'mynsolucionesdigitales');
 
//  $mail->Subject = "Contacto MYN SOLUCIONES DIGITALES"; 
 $mail->Subject = "Mejore su productividad con nuestro software innovador"; 
 
 $mensajeHtml = $cuerpo;
 $mail->Body = "$mensajeHtml"; 
 $mail->AltBody = "$cuerpo"; 
 
 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "Message has been sent";
 }      
}

function enviarMailAClienteGmail($cuerpo,$email){
    try {
         // Datos de la cuenta de correo utilizada para enviar vía SMTP
    $smtpHost = "smtp.gmail.com";
    $smtpUsuario = "mynsolucionesdigitales@gmail.com";  
    $smtpClave = "Viviydani25";  
   
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
    $mail->FromName = "CONTROL PRO - DEMO GRATIS";
    $mail->addAddress("mynsolucionesdigitales@gmail.com");
    $mail->addAddress($email);
    
    $mail->AddReplyTo("mynsolucionesdigitales@gmail.com",'mynsolucionesdigitales');
    
    $mail->Subject = "Contacto MYN SOLUCIONES DIGITALES"; 
    
    $mensajeHtml = $cuerpo;
    $mail->Body = "$mensajeHtml"; 
    $mail->AltBody = "$cuerpo"; 
   
    if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
     } else {
        echo "Message has been sent";
     }       
    } catch (\Throwable $th) {
        echo $th;
    }
   
   }