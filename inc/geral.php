<?php
$dir = $_SERVER['SCRIPT_NAME'];
$dir = pathinfo($dir);
$host = $_SERVER['HTTP_HOST'];
$http = $_SERVER['REQUEST_SCHEME'];
if ($dir["dirname"] == "/") {
$url = $http."://".$host."/";
}else {
$url = $http."://".$host.$dir["dirname"]."/";
}
	$nomesite	    = 'Tess';
		$empresa	  	= 'Quamtum Tecnologia';
		$estado 		= 'SP';
		$cidade 		= 'São Paulo';
			$ddd 			= '28';
		$telefone		= '99920-7836';
?>