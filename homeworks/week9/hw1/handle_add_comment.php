<?php
  require_once("conn.php");

  $nickname = $_POST['nickname'];
  $content = $_POST['content'];

  $errCode = NULL;

  if (empty($nickname) || empty($content)) {
    header("Location: ./index.php?errCode=1");
    die("資料不齊全");
  }

  $sql = sprintf("INSERT INTO `licheng1315_comments`(`nickname`, `content`) VALUES ('%s', '%s')",
          $nickname,
          $content
        );

  $result = $conn->query($sql);

  if (!$result) {
    echo "失敗" . $conn->error;
  } else {
    header("Location: ./index.php");
  }

?>