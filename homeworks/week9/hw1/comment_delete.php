<?php
  require_once('conn.php');
  $id = $_GET['id'];

  $sql = sprintf("DELETE FROM user WHERE id = '%s'",
         $id
        );
  $result = $conn->query($sql);

  if ($result) {
    header("Location: ./index.php");
  } else {
    die("Error" . $conn->error);
  }
?>