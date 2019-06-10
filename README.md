<h1 align="center">介绍</h1>

vuepress 是使用vue开发主题生成极简静态网站生成器，方便书写技术文档。

# 开发
```
// 安装本地项目依赖，不建议全局安装
npm install -D vuepress
```

接着，在 package.json 里加一些脚本:
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

```
npm run docs:dev

npm run docs:build
```

# 配置

- 项目文件目录

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
|     ├─components // 自定义组件
      ├─override.styl // 覆盖样式
│     └─ config.js // 配置文件
└─ package.json
```

- 页面配置
```javascript
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

# 部署
- 文档放置在项目的 docs 目录中；
- 使用的是默认的构建输出位置；
- VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:
```
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```
## GitHub Pages
如果你打算发布到 `https://<USERNAME>.github.io/`

```
// 生成静态文件
npm run docs:build

// 进入生成的文件夹
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'


// 如果发布到 https://<USERNAME>.github.io

git remote add origin git@github.com:zhaotianbj.github.io.git

git push -f git@github.com:zhaotbj/zhaotbj.github.io.git

// or git push -f git@github.com:zhaotbj/zhaotianbj.github.io.git master


// 访问
https://zhaotbj.github.io
```