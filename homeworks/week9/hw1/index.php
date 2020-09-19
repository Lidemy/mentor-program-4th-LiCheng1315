<?php
  session_start();
  require_once('conn.php');
  $sql = "SELECT * FROM comments ORDER BY id DESC";
  $result = $conn->query($sql);


  $nickname = NULL;
  if(!empty($_SESSION['nickname'])) {
    $nickname = $_SESSION['nickname'];
  }

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
        <?php if ($nickname) { ?>
          <a class = "btn" href="./logout.php">登出</a>
        <?php
          } else { ?>
            <a class = "btn" href="./signin.php">註冊</a>
            <a class = "btn" href="./login.php">登入</a>
        <?php
          }
        ?>
        
        <?php
          if ($nickname) { ?>
           <h3><?php echo $nickname ?>，你好</h3>
        <?php
          }
        ?>

        <h1>留言板</h1>
        <?php
          if (!empty($_GET['errCode'])) {
            $errCode = $_GET['errCode'];
            if ($errCode === '1') { ?>
              <h3 class="error"> 資料不完整 </h3>  
          <?php 
            }
          }
        ?>
        <form method = "POST" action = "./handle_add_comment.php">
          <textarea rows=5 name = "content"></textarea><br>
          <input type = "hidden" value = <?php echo $nickname ?> name = "nickname">
          <?php if ($nickname) { ?>
            <input type = "submit" value = "送出" class = "btn"></input>
          <?php
          } else { ?>
            <h3>請登入後再留言</h3>
          <?php
          }
          ?>
          
        </form>
      </section>
      
      <hr>

      <section class = "comments">
        <?php
          
          if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) { 
              ?>
              <div class = "comment">
                <div class = "comment__avartar"></div>
                <div class = "comment__body">
                  <div class = "comment__nickname"><strong><?php echo $row['nickname'] ?></strong></div>
                  <div class = "comment__created-at"><?php echo $row['created_at'] ?></div>
                  <p class = "comment__content"><?php echo $row['content'] ?></p>           
                </div>         
              </div>              
            
        <?php
            }
          }
        ?>
      </section>
    </main>  
  </body>
</html>