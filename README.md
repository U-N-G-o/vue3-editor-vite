# Vue 3 + Vite

这是[原项目](https://github.com/U-N-G-o/vue3-editor)，之前使用 `vue-cli` 搭建，当时没有想到 `Vite` 和 `Webpack` 的差距能有这么大。这里可以对比看一下，

<image src='./upload/屏幕截图 2022-09-05 161904.png' />

如果使用 `Vue 3` 的话，那 `Vite` 一定是最好的组合，当然 `Webpack` 也是有 `plugin` 可以提速的，可以考虑 `SWC` 和 `esbuild`。

## 迁移项目中遇到的坑

1. `Vite` 原生不支持省略 .vue 文件名，虽然可以通过配置实现，但官方并不推荐这么做
2. 使用 `sass` 的话可以不用再装 sass-loader 了
3. `Vite` 基于 EsModule 所以不再支持 CommonJs 中的 require