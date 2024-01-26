// 引入编译后的 TypeScript 文件
// const { Main } = require('./Main');

// const Main = require('./Main.js').default; 
// import Main from './Main.ts';

// 创建 MyClass 的实例
// const myInstance = new Main();

// 调用 TypeScript 方法
// myInstance.myMethod(); // 输出: This is my TypeScript method.
// TheGlobal = {};

// 在Cocos Creator项目中的Input组件或其他位置定义你的方法
window.cc = window.cc || {}; // 确保cc对象存在
window.cc.Input = {
    yourMethodName: function () {
        // 这里是你的方法的实际实现
        console.log("Input method called from external JavaScript.");
        
        // TheGlobal.onStart();
    }
};

TSWrapper = {};
(function(){
    TSWrapper.Input = function() {
        console.log("Input method called from external JavaScript.");
        
    }
})();