<?PHP
$errors = '';
$recipient = 'catademar@miniletras.com'; 
if(empty($_POST['email']) &&
   empty($_POST['phoneNumber']))
{
    $errors .= "\n Error: all fields are required";
}

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
  $errors .= "\n Error: Invalid email address";
}

$subject = "MINILETRAS: Formulario completado";

$message.= "\nDesde: miniletras.com";
$message.= isset($_POST['name']) ? "\nDe: " . $_POST['name'] : '';
$message.= isset($_POST['email']) ? "\nE-mail: " . $_POST['email'] : '';
$message.= isset($_POST['phoneNumber']) ? "\nTel: " . $_POST['phoneNumber'] : '';
$message.= isset($_POST['reason']) ? "\nMotivo: " . $_POST['reason'] : '';
$message.= isset($_POST['subscribeChild']) ? "\nNombre del hijo/a: " . $_POST['subscribeChild'] : '';
$message.= isset($_POST['testSession']) ? "\nQuiere una prueba: " . $_POST['testSession'] : '';

$mailheader = "From: " . $email_address;

if (mail($recipient, $subject, $message, $mailheader))
{
  echo "Message accepted: " . "MESSAGE: " . $message;
}
else
{
  echo "Error: Message not accepted: " . $errors;
}
?>
