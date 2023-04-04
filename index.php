<?php
/* $data = file_get_contents('http://192.168.20.21/zoolafps-3/backend/api/getAll/users');
print_r ( $data); */
/* print_r ( $data{1}[0]); */


/* requerimientos */
require_once 'config/config.php';

require_once 'libs/controller.php';
require_once 'libs/model.php';
require_once 'libs/view.php';

/* inicializacion */
require_once 'libs/app.php';
$app = new App();
?>