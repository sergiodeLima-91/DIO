<html>

	<head>

		<title>Meu Primeiro Site em PHP!</title>
		
		<script src="https://code.jquery.com/jquery-3.7.1.min.js"
			integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
			crossorigin="anonymous"></script>
		
		<style type="text/css">
			.linha {
				font-weight: bold;
				color: green;
				padding-left: 10px;
				line-height: 50px;
			}
		</style>
	</head>
	<body>
		<?php
			for ($i = 0 ; $i < 10 ; $i++) {
				print("<span class=\"linha\">Linha número " . $i . "</span><br />");
			}
		?>
	</body>
	
	<script type="text/javascript">
		$(document).ready(function() {
			alert("Woohoo!");
		});
	</script>
	
</html>