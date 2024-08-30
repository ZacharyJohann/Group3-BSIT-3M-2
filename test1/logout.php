<?php
session_start();
session_unset();
session_destroy();
header("Lhttp://127.0.0.1:5500/MyGroup3sample.html#home"); 
exit();
?>
