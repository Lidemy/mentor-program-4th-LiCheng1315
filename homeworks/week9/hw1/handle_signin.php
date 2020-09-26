<?php
  session_start();
  require_once("conn.php");

  $name = $_POST['name'];
  $nickname = $_POST['nickname'];
  $password = $_POST['password'];

  $errCode = NULL;

  if (empty($nickname) || empty($name) || empty($password)) {
    header("Location: ./signin.php?errCode=1");
    die("資料不齊全");
  }


  $sql_check = sprintf("SELECT * FROM licheng1315_users WHERE nickname = '%s'",
                $nickname
              );
  $result_check = $conn->query($sql_check);


  if ($result_check->num_rows == 0) {
    $sql = sprintf("INSERT INTO `licheng1315_users`(`name`,`nickname`, `password`) VALUES ('%s', '%s','%s')",
    $name,
    $nickname,
    $password
  );

    $result = $conn->query($sql);

    if (!$result) {
    echo "失敗" . $conn->error;
    } else {
      $_SESSION['nickname'] = $nickname;
      header("Location: ./index.php");
    }
  } else {
    header("Location: ./signin.php?errCode=2");
    die("暱稱已被使用");
  }
  

?>