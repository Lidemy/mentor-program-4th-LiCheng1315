## 交作業流程
1. 開一個新的 branch：git branch week1
2. 到新的 branch：git checkout week1
3. 寫作業
4. 將檔案新增到 git 追蹤：git add .
5. commit 此版本的檔案：git commit -am "week1 完成"
6. 將本地端的 branch 推到遠端去：git push origin week1
7. 在 github 上點選 “compare & pull request”
8. 在 github 上寫 title 與 comment，最後 create pull request
9. 到學習系統中的「作業列表」新增作業，輸入 PR 連結
10. 改完後助教會將我上傳的作業 branch merge 到 master
11. 在本地端切換到 master
12. 將遠端的 master 與本地的 master 同步：git pull origin master
13. 刪掉本地的 branch：git branch -d week1