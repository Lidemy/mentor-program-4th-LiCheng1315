## 教你朋友 CLI

### 什麼是 Command Line ?
Coomand Line 簡單來說就是透過文字直接對電腦下指令。

平時我們在使用電腦時大多是透過圖形使用者介面（Graphic User Inerface, GUI）來操作，像是電腦中的游標、資料夾、垃圾桶的圖示等，使用者可以透過這些圖示去命令電腦執行一些任務。

相對於 GUI，Command Line Interface（CLI）則是在終端機上直接用文字對電腦下指令，像是創建資料夾、移動檔案、建立新檔案等等等。

那要如何開始使用 CLI 呢？
如果你是使用 Windows 作業系統的話，在電腦中搜尋 **cmd** 找到終端機，就可以開始使用了！
iOS 的話在電腦中找，**Terminal.app**，或是去谷歌搜尋並下載 **iTerm** 編輯器。

有了編輯器之後就可以開始對電腦下指令了！

### 想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案

要完成以上的任務，主要會用到三個指令：
- mkdir：建立新的資料夾
- cd：切換路徑
- touch：有兩個用途
    - 更改時間：touch 檔案後，時間即更改為當前時間，但檔案內容不變。
    - 建立檔案：當 touch 的檔案不存在，則會建立新的檔案。

所以步驟就會是這樣：
1. 建立叫做 wifi 的資料夾：mkdir wifi
2. 切換路徑到 wifi 資料夾：cd wifi
3. 在 wifi 資料夾中建立 afu.js：touch afu.js 