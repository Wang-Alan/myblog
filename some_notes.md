# readme

## 解决默认端口占用

修改 `package.json` 文件

```{json}
"scripts": {
    "docs:clean-dev": "vuepress dev src --clean-cache --port 8089",
    "docs:dev": "vuepress dev src --port 8089",
  },
```

## 预览

```{cmd}
yarn docs:dev
```

## 拉取

```{cmd}
git pull origin master
```