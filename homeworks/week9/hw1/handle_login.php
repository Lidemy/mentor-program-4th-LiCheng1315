<?php
  session_start();
  require_once("conn.php");

  $nickname = $_POST['nickname'];
  $password = $_POST['password'];

  $errCode = NULL;

  if (empty($nickname) || empty($password)) {
    header("Location: ./login.php?errCode=1");
    die("資料不齊全");
  }

  $sql = sprintf("SELECT * FROM licheng1315_users WHERE nickname = '%s' and password = '%s' ",
          $nickname,
          $password
        );

  $result = $conn->query($sql);

  if ($result->num_rows) {
    $_SESSION['nickname'] = $nickname;
    header("Location: ./index.php");
  } else {
    header("Location: ./login.php?errCode=2");
    die("暱稱或密碼錯誤");
  }
?>