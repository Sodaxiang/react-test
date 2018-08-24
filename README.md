# 考题

1. 克隆工程`https://rdc.hand-china.com/gitlab/train-front-end/react-test.git`并切换分支，分支名为工号 
2. 初始化npm，命名react-工号 
3. 创建目录src，完成要求所需代码
4. 建立名为start的npm脚本，能够使用webpack-dev-server打包并启动服务，服务端口号9090
5. 提交代码到gitlab

## 要求

1. 页面结构分为纵向排列的header和section
2. header高度60px，其中有横向排列的两个链接右对齐，其路由和文案分别为 [/]`首页`、[/product]`产品`
3. 当路由为[/]时，section中显示居中文案(欢迎访问Choerodon)
4. 当路由为[/product]时，section中横向分为两块，左边部分宽度为200px，显示纵向排列的两个链接，
    其路由和文案分别为[/product/iam]`iam产品`、[/product/devops]`devops产品`，
    右边部分显示居中文案（欢迎访问Choerodon产品）
5. 当路由为[/product/iam]时，section中横向分为两块，左边部分宽度为200px，显示纵向排列的两个链接，
    其路由和文案分别为[/product/iam]`iam产品`、[/product/devops]`devops产品`，
    右边部分显示居中文案（欢迎访问iam产品）
6. 当路由为[/product/devops]时，section中横向分为两块，左边部分宽度为200px，显示纵向排列的两个链接，
    其路由和文案分别为[/product/iam]`iam产品`、[/product/devops]`devops产品`，
    右边部分显示居中文案（欢迎访问devops产品）
7. Route数量不超过3个
8. 链接匹配到路由时，字体颜色为#f00
9. Router使用BrowserRouter
10. 在地址栏直接输入以上所有路由均能正常访问


## 附加题

1. 所有Route的component属性值为同一个类
2. section下的链接不使用Link或NavLink，而是普通a标签监听onClick来实现路由跳转