# readme

## 解决默认端口占用

修改 `package.json` 文件

```{json}
"scripts": {
    "docs:clean-dev": "vuepress dev src --clean-cache --port 8089",
    "docs:dev": "vuepress dev src --port 8089",
  },
```

## 预览与编译

```{cmd}
yarn docs:dev
yarn docs:build
```

## 提交

```{cmd}
cd src/.vuepress/dist

git init
git add .
git commit -m "更新了一些内容"
git push -f git@github.com:Wang-Alan/myblog.git master
```