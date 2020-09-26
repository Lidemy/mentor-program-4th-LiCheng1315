<?php
  require_once('conn.php');
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8">

      <title>Week9 HW Comment Board</title>
      <link href="style.css?v=<?php echo time(); ?>" rel="stylesheet" type="text/css" />

  </head>

  <body>
    <div class = "warning">這是作業，不要用真的帳密</div>
    <main class = "board">
      <section class = "add-comment">
        <a class = "btn" href="index.php">回留言板</a>
        <h1>登入</h1>
        <?php
          if (!empty($_GET['errCode'])) {
            $errCode = $_GET['errCode'];
            if ($errCode === '1') { ?>
              <h3 class="error"> 資料不完整 </h3>  
          <?php 
            } else if ($errCode === '2') { ?>
              <h3 class="error"> 暱稱或密碼不正確 </h3> 
          <?php
            }
          }
        ?>
        <form class="signin" method = "POST" action = "./handle_login.php">
          暱稱：<input type = "text" name = "nickname" /><br>
          密碼：<input type = "password" name = "password" /><br>
          <br>
          <input type = "submit" value = "送出" class = "btn"></input>
        </form>
      </section>
    </main>  
  </body>
</html>