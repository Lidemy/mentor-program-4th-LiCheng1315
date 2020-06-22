## 跟你朋友介紹 Git

### Git 基本概念及基礎應用

#### 版本控制
Git 最主要的功能是用來檔案的**版本控制**。所謂版本控制就像是期末報告交出之前可能會有好幾版，例如「期末報告1.dox」、「期末報告_最終版.dox」、「期末報告_終極最終版.dox」...。每產出一個新檔案就得為他命名，但是這中間會出現**無法知道每一個版本有修改了什麼？**的問題。寫程式也是如此，在開發新功能時也會歷經多個版本，但如果沒有一個辦法知道每個檔案間的差異是什麼？或是上一個修改的是誰？為什麼他要這樣修改？對於專案開發而言是一件非常沒效率的事情。

#### Git 概念

![](https://i.imgur.com/9xvdOTv.png)
由上圖可以看出 git 的運作方式。

工程師在開發檔案時，可以將檔案用先放入 staging area （加入版本控制），待沒問題後，再用 commit 到檔案庫中作為最新的版本。
以上流程是僅限於本地端的修改，如果是遠端協作時，當本地端已經寫好程式，也 commit 到檔案庫，則可以使用 git push 將自己的檔案傳到遠端環境（例如 github），而當遠端有修改時，則可以用 git pull 將遠端的檔案庫同步到本地端。

而 git checkout 可以讓檔案回到先前的版本（如果要到現在的版本的話則使用 git checkout master）。



#### Git 操作
如果要在本地端對於一個文件做版本控制，會需要先執行以下的步驟。

1. 建立一個專案的資料夾：mkdir git_test
2. 在資料夾中建立幾個檔案，假設有 test.txt、code1.js、code2.js。
3. 對這個資料夾做初始化：git init。對資料夾做初始化後，git 會在資料夾中新增一個 .git 的系統檔。

在做完基本設定後，以下是基本會用到的指令


##### git status
如果想要看當資料夾的版本狀況，可以使用 git status 指令，看哪些檔案已被修改、哪些檔案有/沒有被追蹤。

##### git add
在執行完 git init 後，資料夾中的檔案並尚未列入版本控制，需要執行 git add 之後才會進行版本控制，使用方法像是 **git add text.txt**。如果想要將所有檔案都列入版本控制，可以使用 **git add .**

##### git commit
git commit 代表新建最新的版本。用法為：git commit -m "new version"。（-m 後面為 commit message，可打任何的敘述）。

每一次檔案都要先透過 git add 加入版本控制後，才能用 git commit -m "xxxx"。如果想要跳過 git add 的步驟的話，可以使用 **git commit -am "xxxx"**。（不過是新檔案的話還是要先用 git add 先加入）

##### git log 
git log 可以查看歷史紀錄

#### branch 概念
專案要開發新功能時，不會直接從主程式直接進行修改，而是會開出一個新的 branch （有點類似開副本的感覺），在 branch 中進行修改，等待一切確定之後，才會與主程式合併，概念如下圖所示：

![](https://i.imgur.com/yWyGHwO.png)

再來介紹 branch 的操作指令

##### git branch (branch name)
用途為創建一個新的 branch。例如：git branch new_branch
#### git branch -v
在創建完 branch 後，可以透過 git branch -v 檢視目前所有的 branch
#### git checkout (branch name)
在創完一個 branch 時，當下應該還是會在 master 中，這時可以透過 git checkout (branch name）切換到 branch 進行修改。(也可以透過 git branch -v 去看目前是在哪個 branch)
#### git branch (branch name) -d
這個指令可以刪除指定的 branch
#### git merge (branch name)
將 branch name 合併“進來”! 所以想要將寫好的新功能合併至穩定版中，需要先切換到 master，再用 git merge (branch name)，將 branch 合併進 master

#### branch conflict
當主程式（master）與 branch 中的同一個程式檔案都被修改，在 merge 時就會發生 conflict。

Conflict 需要手動修改
![](https://i.imgur.com/oVwf6wZ.png)

上圖中 “===” 上半部是 master 中的修改，下半部為 branch 中的修改，可自行決定要保留哪一個版本的修改。

