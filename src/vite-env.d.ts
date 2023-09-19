/// <reference types="vite/client" />

declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/en.mjs'

declare module '*.vue'{
    import { DefineComponent } from "vue";
    const compoent:DefineComponent<{},{},any>
    export default compoent
}