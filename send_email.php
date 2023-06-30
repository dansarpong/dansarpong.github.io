<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $project = $_POST["project"];
    $message = $_POST["message"];

    // Set the recipient email address where you want to receive the form submissions
    $to = "dansarpong.me@gmail.com";

    // Subject of the email
    $subject = "New Form Submission from Portfolio Website";

    // Compose the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Project: $project\n";
    $body .= "Message: $message\n";

    // Send the email
    mail($to, $subject, $body);

    // Redirect the user back to the form page or a thank-you page
    header("Location: thank_you.html");
    exit;
}
?>
