# 游戏网站项目

基于Next.js的网页应用程序，用作HTML5游戏的托管和游玩平台。该网站收集了各种类别的经典和现代浏览器游戏。

## 项目结构

项目组织如下：

- `web/` - 主要网站项目目录
  - `src/` - 源代码
    - `app/` - Next.js App Router结构，包含页面和布局
    - `components/` - 可复用的React组件
    - `data/` - 数据文件，包括游戏信息
    - `hooks/` - 自定义React钩子
    - `i18n/` - 国际化（英文和中文）
    - `pages/` - 额外的页面组件
    - `utils/` - 工具函数
  - `public/` - 静态资源
    - `html5/` - HTML5游戏集合（45+游戏）
  - `.next/` - Next.js构建输出（自动生成）

## 功能特性

- **HTML5游戏集合**：45+款跨多种类别的HTML5游戏
- **多语言支持**：支持英文和中文
- **响应式设计**：适用于桌面和移动设备
- **游戏分类**：通过益智、街机、动作等类别浏览游戏
- **游戏统计**：追踪评分和游玩次数
- **Cloudflare优化**：针对Cloudflare Pages的部署配置

## 开始使用

### 前提条件

- Node.js（建议18版本或更高）
- npm或yarn

### 安装

1. 克隆仓库
```bash
git clone <仓库URL>
cd web
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

## 开发

使用Turbopack启动开发服务器，实现更快的构建：

```bash
npm run dev
# 或
yarn dev
```

在浏览器中打开[http://localhost:3000](http://localhost:3000)。

## 构建

为生产环境构建应用：

```bash
npm run build
# 或
yarn build
```

## 测试

运行ESLint检查代码质量和格式问题：

```bash
npm run lint
# 或
yarn lint
```

## 部署

项目配置为Cloudflare Pages部署，使用独立输出配置。

```bash
npm run deploy
# 或
yarn deploy
```

这将使用`deploy-to-cloudflare.js`脚本进行部署。

## 技术栈

- **Next.js 15**：React框架，带App Router
- **React 19**：UI库
- **TypeScript**：类型安全的JavaScript
- **Tailwind CSS 4**：实用优先的CSS框架
- **ESLint**：代码检查和质量控制
- **Turbopack**：快速构建的开发服务器

## 国际化

应用通过使用React上下文的自定义i18n实现支持英文和中文。

语言偏好存储在浏览器的localStorage中，用户可以通过语言切换组件切换语言。

## 游戏集成

HTML5游戏托管在`/public/html5/`目录中，每个游戏在自己的子目录中。游戏集成方式：

1. 将游戏文件添加到public目录
2. 在`src/data/games.ts`文件中添加游戏元数据
3. 访问时游戏在iframe中渲染

## 如何贡献

1. Fork仓库
2. 创建新的功能分支
3. 进行修改
4. 提交拉取请求

## 许可证

[此处指定许可证信息]