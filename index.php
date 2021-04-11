<?php
$idioma = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
if($idioma=='es'){
    header("Location: es");
}elseif($idioma=='fr'){
    header("Location: fr");
}else{
    header("Location: en");
}
?>