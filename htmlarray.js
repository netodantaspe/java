<html>
<head>
<script language=javascript type="text/javascript">
array1 = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
var now = new Date;
</script>
</head>
<body>
<script language=javascript type="text/javascript">
document.write("Hoje, o dia da semana é " + array1[0] );
document.write("Hoje, o dia da semana é " + array1[1] );
document.write("Hoje, o dia da semana é " + array1[ now.getDay() ] );
</script>
</body>
</html>