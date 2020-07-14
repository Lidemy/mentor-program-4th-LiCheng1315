## 請以自己的話解釋 API 是什麼
API 最主要的目的是讓雙方交換資料。API 提供者有權限去決定哪些資料可以被存取，而哪些不行; API 使用者使用者則透過提供者所規定的格式去請求並存取資料。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- 202 Accept。request: 已經被接受，但尚未被執行。
- 401 Unauthorized: 因為使用者沒有目的端的權限，因此 request 無法被滿足，需要登入後才能成功。
- 504 Gateway Timeout: 伺服器以閘道器或代理訪問時，並沒有上游伺服器即時收到完成請求所需的回應。
 

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

| 說明 | Method | path |參數|
| -------- | -------- | -------- | -------- |
| 回傳所有餐廳資料 | GET | /restaurant | |
| 回傳單一餐廳資料    | GET    | /restaurant/:id | |
| 刪除餐廳 | DELETE| /restaurant/:id | |
| 新增餐廳     | POST     | /restaurant     | name: 餐廳名稱 |
| 更改餐廳     | PATCH     | /restaurant/:id     | name: 餐廳名稱 |

