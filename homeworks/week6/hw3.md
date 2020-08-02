## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- select: 創建多選跟單選的選單
- option: 定義 select 標籤下的下拉選單的選項。
- base: 控制網頁內的連結屬性，用 target 屬性可以決定如何開啟網頁
    - _blank: 在新視窗開啟連結
    - _parent: 在父層視窗開啟連結
    - _self: 在框架內開啟連結。
    - _top: 在整個視窗開啟連結（沒理解錯的話？）。

## 請問什麼是盒模型（box modal）
盒模型可以看出每一個 html 元素包含 margin、border、padding、實際內容的大小。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- block: 一個 block 會撐滿整行，如 div、h1、p
- inline: 行內元素，預設是元素並排排列，無法調整 height、width，調整 padding 與 margin 時，上下距不會被改變，如 span、a。
- inline-block: 結合 block 與 inline 的特點，可以跟 inline 一樣將元素水平排列，也可以像 block 一樣調整元素的上下距等等



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- static: 元素會出現在預設的位置上。
- relative: 可以調整 top、left、right、bottom 的距離，讓元素出現在與預設的位置相對位置。
- absolute: 也可以調整出現的位置，但 absolute 是會使元素出現在上層元素的相對位置，如果上層元素不是 relative 的話，元素則會出現在以 body 為準的絕對位置。
- fixed 與上述不同之處，是會以瀏覽器為定位點，當頁面滾動時，元素還是會在瀏覽器上固定的位置。
