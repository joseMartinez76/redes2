<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname ="globalnet_crm";
// Creamos la conexión con la BD
$conn = mysqli_connect($servername, $username, $password,$dbname);
// check connection -- comprobamos para bingo
if (!$conn){
    die ("Conexión fallida: " . mysqli_connect_error());
}
?>


