// 引入组件
import ymLink from './src';

// 提供 install 安装方法，供按需引入
ymLink.install = function (Vue) {
    // 注册组件
    Vue.component(ymLink.name, ymLink)
}
// 暴露组件
export default ymLink