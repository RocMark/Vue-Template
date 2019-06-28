# Git 設定

# 設定 remote
```
  // 刪除原來源
  git remote remove origin

  // 新增新來源
  git remote add origin  ~url/~.git
```

# 記憶帳號
```
  // 打開 config 檔案
  git config -e 
  // 記憶帳號設定(自行新增)
  [credential]	
	  helper = store
```

# 設定 git 模板
```
  // 打開 config 檔案
  git config -e 

  // 新增 模板路徑
  [commit]
	  template = C:\\Users\\RocMark\\Desktop\\vue-template\\.gitmessage
  
  // 打開本地 config 確認是否更改成功
  git config --local -l
```