// 引入组件
import ymHeader from './src';

// 提供 install 安装方法，供按需引入
ymHeader.install = function (Vue) {
    // 注册组件
    Vue.component(ymHeader.name, ymHeader)
}
// 暴露组件
export default ymHeader