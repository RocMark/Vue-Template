# 全域 SASS 檔案

# 建立檔案
- 建立在 src/scss/style.scss
- 於 main.js 撰寫即可
- [參考資料](http://bit.ly/bs4-in-vuecli3)
```js
  import './scss/style.scss'
```


# 安裝套件
- Vue UI 新增套件 sass-resources-loader
```
  vue-cli-plugin-sass-resources-loader
```

# 建立設定
- 自行建立 vue.config.js 檔
- @ 代表 /src，路徑需要自行修改
```js
  module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_base.scss";
          `,
        },
      },
    },
  }
```

# 參考資料
- [Globally Load SASS into Vue.js](https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/)