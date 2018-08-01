<?php
session_start();
header("Access-Control-Allow-Origin: *");
include("clases/class.phpmailer.php");
include("clases/class.smtp.php");
$firstname = $lastname = $ruc = $telefono = $email = $volume = $website = $country = $info = "";
$firstname = $_GET['firstname'];
$lastname  = $_GET['lastname'];
$ruc       = $_GET['ruc'];
$telefono  = $_GET['telefono'];
$email     = $_GET['email'];
$volume    = $_GET['volume'];
$website   = $_GET['website'];
$country   = $_GET['country'];
$info      = $_GET['info'];
//echo "Señor(a)".$firstname." ".$lastname." ".$telefono." ".$ruc." ".$email." ".$volume." ".$website." ".$country." ".$info;exit;
$mail             = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth   = true;
$mail->SMTPSecure = "tls";
$mail->Host       = "smtp.gmail.com";
$mail->Port       = 587;
$mail->Username   = "lorogon@gmail.com";
$mail->Password   = "H1r4m_L0r3t0##";

$mail->From       = "lorogon@gmail.com";
$mail->FromName   = "FactuaenUNA";
$mail->Subject    = utf8_decode("Contacto ".$firstname." ".$lastname." ".$ruc);
$mail->AltBody    = "Informacion recibida";
$mensaje          = utf8_decode("Señor(a) ".$firstname." ".$lastname."<br> Teléfono: ".$telefono."<br> RUC: ".$ruc."<br> Email: ".$email."<br> Cantidad de Facturas: "
        .$volume."<br> Sitio Web:".$website."<br> País:".$country."<br> Información: ".$info
        . "\n<b><br><br>Gracias por preferirnos</b>.");
$mail->MsgHTML($mensaje	);

//$email1 = "miguel.quepuy@taxtech.pe";
//$email2 = "jessica.torres@taxtech.pe";
//$mail->AddAddress($resultadoQuery1['Email'], "Destinatario");}
$email1 = "sirrohan@live.com";
$email2 = "hloreto@infoguidepanama.com";
$mail->AddAddress($email, "Destinatario");
$mail->AddAddress($email1, "Miguel");
$mail->AddAddress($email2, "Jessica");
$mail->IsHTML(true);

if(!$mail->Send()) 
{
	echo 0;
} 
else 
{
	echo 1;
}
		
 ?>