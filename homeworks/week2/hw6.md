``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 3 行，設定 i 為 0，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行，開始進入第一圈迴圈
2. 執行第 4 行，判斷 arr[0] 是否小於 0，否，進入第二圈迴圈
3. i++，i 變成 1，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行
4. 執行第 4 行，判斷 arr[1] 是否小於 0，否，進入第三圈迴圈
5. i++，i 變成 2，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行
6. 執行第 4 行，判斷 arr[2] 是否小於 0，否，進入第四圈迴圈
7. i++，i 變成 3，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行
8. 執行第 4 行，判斷 arr[3] 是否小於 0，否，進入第五圈迴圈
9. i++，i 變成 4，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行
10. 執行第 4 行，判斷 arr[4] 是否小於 0，否，進入第六圈迴圈
11. i++，i 變成 5，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行
12. 執行第 4 行，判斷 arr[5] 是否小於 0，否，進入第七圈迴圈
13. i++，i 變成 6，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），否，跳出迴圈
14. 執行第 6 行，設定 i 為 2，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行，開始進入第一圈迴圈
15. 執行第 7 行，判斷 arr[2] 是否不等於 arr[1] + arr[0]，否，進入第二圈迴圈
16. i++，i 變成 3，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行
17. 執行第 7 行，判斷 arr[3] 是否不等於 arr[2] + arr[1]，否，進入第三圈迴圈
18. i++，i 變成 4，檢查 i 是否小於輸入陣列的長度（陣列長度為 6），是，繼續執行
19. 執行第 7 行，判斷 arr[4] 是否不等於 arr[3] + arr[2]，是，回傳 invalid
20. 執行完畢