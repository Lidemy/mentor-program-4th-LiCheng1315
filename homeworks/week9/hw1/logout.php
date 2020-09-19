<?php
  session_start();
  require_once("conn.php");

  unset($_SESSION['nickname']);

  header("Location: ./index.php");

?>