# 跳转页
页面跳转，现以蓝屏的方式呈现

换域名了，想写个跳转，于是用一天的时间搓了一个看起来像是 Windows 10/11 蓝屏界面的跳转页。

同时在里面藏了一些彩蛋，欢迎发掘。

# 预览

![preview](assets/preview.png)

# 使用
技术栈：HTML、CSS、JavaScript，无任何 jQuery 及其它添加。

直接将本项目克隆到服务器上，然后使用 `nginx` 或者 `caddy` 等开启一个 HTTP 服务即可。

或者直接 fork 此项目，完成修改后，在任何一个已知的 Serverless 平台部署也可。

# 配置
`main.js` 的 `setTimeout(function()` 段中定义了如下行为：

在 5s 后，根据所打开的页面的 URL，按照下面的逻辑，跳转到对应的新的页面：

如果所对应的三级域名为 `lab` 或者 `blog` 那么统一跳转至 `https://lab.gb0.dev` 的对应页面，否则跳转至 `https://gb0.dev` 对应页面。

修改这一部分逻辑即可。

# 授权
代码以 [GNU Affero General Public License v3.0 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.en.html) 授权，详情见 LICENSE 文件。

涉及到的其它资源的版权归其原作者所有。

Windows 是 Microsoft 公司的商标，设计版权归其所有，本人仅因为乐子而模仿了这么一个页面，无意盈利。