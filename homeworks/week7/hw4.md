## 什麼是 DOM？
將 html 文件中的標籤轉成物件型態，並用樹狀圖的方式表示。當中每一個標籤都是一個節點，可以在節點上加上 eventListener 讓網頁去執行一些程序。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
當事件產生時，會先傳給 window 後再向下傳遞到觸發的元件，到的觸發的元件（target）後，再向上傳遞至 window，而這向下與向上兩階段可以分成捕獲及冒泡。
冒泡：從事件觸發的元件開始往上傳遞
捕獲：與冒泡相反，從上至事件觸發的元件向下傳遞

## 什麼是 event delegation，為什麼我們需要它？
event delagation 是運用事件傳遞機制的特性，將 eventListener 加在目標元件的上層元素。
以 10 個分別為 1 ~ 10 的數字按鈕為範例，如果想要執行點擊按鈕就 alert 該按鈕的數字的話，最直覺的方法是在每個按鈕上都增加 eventListener，但這會比較麻煩。
因此透過事件代理機制，只需要增加一個 eventListener 就可以達成上述的目標。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- `event.preventDefault()`：停止事件的預設行為。例如在表單驗證上，如果有必填的問題沒有回答的話，可以透過 `event.preventDefault()`中止表單送出的動作。
- `event.stopPropagation()`: 停止事件在捕獲或冒泡階段的傳遞。