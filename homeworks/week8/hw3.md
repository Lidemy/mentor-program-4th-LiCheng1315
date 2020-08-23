## 什麼是 Ajax？
Asynchronous JavaScript and XML
如果想要透過網頁發出 request 到伺服器來改變網頁上的內容，用 Ajax 能夠不用重新載入頁面，從後台去與伺服器溝通，可以避免網頁為了等待後端資料回傳而導致網頁停滯。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單送出資料伺服器的 response 會回傳給瀏覽器，因此當送出 request 後需要將整個網頁重新載入。
而 Ajax 的話伺服器會將資料回傳給網頁上的 Javasciprt，能夠非同步處理不同的 request。

## JSONP 是什麼？
因為 Ajax 受到同源政策的管理，所以不同來源的網站無法直接做溝通，但可以透過 JSONP 解決這個問題。
在 html 標籤中有一些不受同源政策所限制，例如 img、script...。 JSONP 就是透過這樣的特性，用 `<script>` 去傳送與接收 data，得到 js object 的資料。


## 要如何存取跨網域的 API？
在 server 端加上 `Access-Control-Allow-Origin` 的 header。


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
第四週是使用 node.js 去發送 request，因此並沒有跨網域的問題。
而這一週開始是透過瀏覽器去發送 request，但因為瀏覽器本身基於一些安全的因素，會將跨網域的 response 擋下，並得到錯誤。
