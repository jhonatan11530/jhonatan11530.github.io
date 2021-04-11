<?php
$idioma = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
if($idioma=='es'){
    header("Location: https://jhonatan11530.github.io/es");
}else{
    header("Location: https://jhonatan11530.github.io/en");
}
?>
