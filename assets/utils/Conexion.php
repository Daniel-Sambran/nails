<?php

define('DB_SERVER', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'nails');

// define('DB_SERVER', 'localhost');
// define('DB_USER', 'c2070042');
// define('DB_PASSWORD', '01BUlekeno');
// define('DB_NAME', 'c2070042');

class  Conexion{
	
	public $servidor;
	public $usuario;
	public $clave;
	public $db;
	public $conexion;	
	
	function __construct($servidor="serv", $usuario="us", $clave="clav", $db="db"){
		$this->servidor=DB_SERVER;
		$this->usuario=DB_USER;
		$this->clave=DB_PASSWORD;
		$this->db=DB_NAME;		
		}
		
	public function conectar(){
		/* activar la notificación */
		$controlador = new mysqli_driver();
		$controlador->report_mode = MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT;
		$conexion = new mysqli($this->servidor, $this->usuario, $this->clave, $this->db);
		if ( $conexion->connect_errno) {
			$this->conexion = null;
			
		}
		else{
			$this->conexion=$conexion;
		}
		$conexion->set_charset("utf8");
	
		return $conexion;
		
		// $conexion=mysqli_connect($this->servidor, $this->usuario, $this->clave, $this->db);
		// $this->conexion=$conexion;
		// return $conexion;
		
		}
				
}
?>