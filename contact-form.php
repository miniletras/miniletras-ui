$errors = '';
$recipient = 'cata.cabanilllas@gmail.com'; 
if(empty($_POST['email']) &&
   empty($_POST['phoneNumber']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$reason = $_POST['reason'];
$subscribeChild = $_POST['subscribeChild'];
$testSession = $_POST['testSession'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

$mailheader = "From:".$email_address"<".$email_address.">\r\n";

mail($recipient, "CONTACT", $email_address, $mailheader) or die("Error!");

echo'
