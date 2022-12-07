// rollup 默认导出一个对象，作为打包的配置文件
import babel from 'rollup-plugin-babel'
import serve from "rollup-plugin-serve";
export default {
    input:'./src/index.js', // 入口
    output: {
        file:'./dist/vue.js',// 出口
        name: 'Vue',  // global.Vue
        format: 'umd',  // esm es6模块  commonjs模块  iife 自执行函数 Umd
        sourcemap: true // 希望可以调试源代码
    },
    plugins: [
        babel({
            exclude:'node_modules/**' // 排除 node_modules 下所有文件
        }),
        serve({
            contentBase: '',
            port: 10010,
            openPage: './index.html',
        })
    ]
}

// 为什么 vue2 只能支持 ie9以上 -- Object.defineProperty 不支持低版本的？
