### 請解釋後端與前端的差異。
- 前端：使用者所看到的瀏覽器頁面，使用者可以從瀏覽器對 server 送出 request (例如傳送表單)，並接收呈現 server 的 response。 
- 後端：在前端發出 request 之後，server 會根據 request 內容處理相對應的任務，例如從 Database 撈取資料然後 response 到前端。




### 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器經由作業系統、硬體網卡對 Google 遠端雲端 Server 發出 request
2. 雲端 Server 收到 request 後，到後端資料庫搜尋有關 JavaScript 的網頁資料
3. 找到資料後，將結果經由雲端 Server 回傳 response 到使用者端的伺服器，並從瀏覽器呈現結果

### 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。
- &&：一行執行多個命令
    - mkdir wifi && cd wifi && git init：創建一個名為 wifi 的資料夾後並初始化 git
- find：尋找檔案
    - find /(path) -name (filename)
    - filename 的地方可以用 * 代表模糊搜尋，例如"*.png" ，代表去尋找最後是 .png 的檔案。
- history：印出終端機的搜尋紀錄