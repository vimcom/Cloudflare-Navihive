<div align="center">

<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M60 10L105 35V85L60 110L15 85V35L60 10Z" fill="url(#paint0_linear)" stroke="#2D6CDF" stroke-width="2"/>
  <path d="M60 30L80 40V75L60 85L40 75V40L60 30Z" fill="white" stroke="#2D6CDF" stroke-width="2"/>
  <circle cx="60" cy="57" r="10" fill="#2D6CDF"/>
  <path d="M60 43V57L68 65" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear" x1="15" y1="60" x2="105" y2="60" gradientUnits="userSpaceOnUse">
      <stop stop-color="#61DAFB"/>
      <stop offset="1" stop-color="#2D6CDF"/>
    </linearGradient>
  </defs>
</svg>

# NaviHive - 现代化个人导航站

**一个部署在 Cloudflare 边缘网络、响应迅速、安全可靠的现代化个人导航站。**

</div>

<p align="center">
  <a href="https://github.com/zqq-nuli/Cloudflare-Navihive/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/React-19.0.0-61dafb" alt="React">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/TypeScript-5.7-3178c6" alt="TypeScript">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Cloudflare-Workers-f38020" alt="Cloudflare">
  </a>
</p>

<p align="center">
  <a href="https://navihive.chatbot.cab/" target="_blank"><strong>在线演示</strong></a> ·
  <a href="#-部署指南"><strong>部署指南</strong></a> ·
  <a href="https://github.com/zqq-nuli/Cloudflare-Navihive/issues" target="_blank"><strong>提交问题</strong></a>
</p>

<p align="center">
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/zqq-nuli/Cloudflare-Navihive" target="_blank">
    <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers">
  </a>
</p>

---

NaviHive 是一个基于 Cloudflare Workers 构建的轻量级导航站，旨在替代零散的浏览器书签，为您提供一个统一、美观、随时随地可用的网络入口。它拥有直观的可视化管理界面，支持分组、拖拽排序、暗色模式和高度自定义等功能，让您的常用网站触手可及。

得益于 Cloudflare 的全球边缘网络，NaviHive 实现了零成本部署与毫秒级访问，是您管理个人网络世界的理想选择。

## ✨ 核心特性

-   📚 **智能分组**：按类别组织网站，支持无限分组与拖拽排序。
-   🎨 **高度自定义**：自定义标题、Logo、背景图及 CSS 样式，打造专属导航。
-   🌓 **主题切换**：内置深色/浅色模式，呵护您的双眼。
-   🔐 **安全可靠**：基于 JWT + bcrypt 的安全认证，支持访客模式与私密内容保护。
-   🔄 **数据同步**：支持 JSON 格式的数据导入导出，迁移备份轻松搞定。
-   📱 **响应式设计**：在桌面、平板和移动端均有完美适配的浏览体验。
-   ☁️ **全球加速**：部署于 Cloudflare 全球边缘网络，访问速度快如闪电。
-   💰 **零成本部署**：基于 Cloudflare 免费套餐，无需服务器，永久免费使用。

## 📸 应用截图

<details>
<summary><b>点击查看应用截图</b></summary>

| 全局设置 | 网站设置 |
| :---: | :---: |
| <img src="https://img.zhengmi.org/file/1743801673107_1743801661335.jpg" alt="全局设置"> | <img src="https://img.zhengmi.org/file/1743801939121_image.png" alt="网站设置"> |

| 暗色模式 | 拖拽排序（暗色） |
| :---: | :---: |
| <img src="https://img.zhengmi.org/file/1743801684425_image.png" alt="暗色模式"> | <img src="https://img.zhengmi.org/file/1743801720324_image.png" alt="拖拽排序（暗色）"> |

</details>

## 🛠️ 技术栈

-   **前端**: React 19, TypeScript, Vite, Material UI, Tailwind CSS, DND Kit
-   **后端**: Cloudflare Workers, Cloudflare D1 (SQLite)
-   **认证**: JWT, bcrypt-edge
-   **开发工具**: pnpm, Wrangler CLI, ESLint, Prettier

## 🚀 部署指南

我们提供两种部署方案，请根据您的技术背景选择。

> **💡 准备工作**：
> 无论选择哪种方式，您都需要提前注册一个 [Cloudflare 账号](https://dash.cloudflare.com/sign-up) 和一个 [GitHub 账号](https://github.com/signup)。

---

### 方案一：可视化部署 (推荐新手)

通过网页界面完成所有操作，无需编写代码或使用命令行。

<details>
<summary><b>点击查看详细步骤</b></summary>

1.  **Fork 项目**
    -   访问本项目的 GitHub 页面，点击右上角的 **Fork** 按钮，将项目复制到您的账号下。

2.  **一键部署到 Cloudflare**
    -   在您 Fork 的项目页面，点击 **Deploy to Cloudflare Workers** 按钮，并授权 GitHub 访问。

3.  **创建 D1 数据库**
    -   登录 [Cloudflare 控制台](https://dash.cloudflare.com/)，进入 **Workers & Pages** > **D1**。
    -   点击 **Create database**，输入名称 `navigation-db` 并创建。
    -   **记下数据库 ID**，后续步骤会用到。

4.  **配置项目环境变量**
    -   进入您部署的 Worker 项目，点击 **Settings** > **Variables**。
    -   添加以下环境变量：
        | 变量名 | 值 | 说明 |
        | :--- | :--- | :--- |
        | `AUTH_ENABLED` | `true` | 启用登录认证 |
        | `AUTH_REQUIRED_FOR_READ` | `false` | `false` 开启访客只读模式，`true` 则必须登录 |
        | `AUTH_USERNAME` | `admin` | 自定义管理员用户名 |
        | `AUTH_PASSWORD` | *见下方说明* | bcrypt 哈希后的密码 |
        | `AUTH_SECRET` | *见下方说明* | 32 位以上的随机字符串 |
    -   > **密码设置**: 访问 [Bcrypt Generator](https://bcrypt-generator.com/)，输入您的密码，选择 **10 rounds**，复制生成的哈希值。
    -   > **密钥设置**: 访问 [随机字符串生成器](https://www.random.org/strings/)，生成一个 32 位以上的随机字符串。

5.  **绑定 D1 数据库**
    -   在项目设置中，点击 **Settings** > **Bindings** > **Add binding**。
    -   选择 **D1 database**，变量名填写 `DB`，并选择刚创建的 `navigation-db`。

6.  **初始化数据库**
    -   进入 **D1** 管理页面，选择 `navigation-db`，点击 **Console** 标签。
    -   复制并执行 `init_table.sql` 和 `migrations/002_add_is_public.sql` 文件中的 SQL 命令。
    -   > **提示**: 您可以一次性粘贴所有 SQL 命令并执行。

7.  **访问您的导航站**
    -   返回 Worker 项目主页，复制 `.workers.dev` 后缀的访问地址。
    -   在浏览器中打开，使用您设置的用户名和密码登录。

🎉 恭喜！您的专属导航站已部署成功！

</details>

---

### 方案二：开发者部署 (CLI)

适合熟悉命令行和 Git 的开发者，支持本地开发和调试。

<details>
<summary><b>点击查看详细步骤</b></summary>

1.  **克隆项目并安装依赖**
    ```bash
    git clone https://github.com/zqq-nuli/Cloudflare-Navihive.git
    cd Cloudflare-Navihive
    pnpm install
    ```

2.  **登录并配置 Wrangler**
    ```bash
    # 全局安装 Wrangler
    npm install -g wrangler

    # 登录 Cloudflare
    wrangler login
    ```

3.  **创建 D1 数据库**
    ```bash
    wrangler d1 create navigation-db
    ```
    > 终端会返回数据库信息，请记下 `database_id`。

4.  **配置 `wrangler.jsonc`**
    -   将根目录下的 `wrangler.template.jsonc` 复制为 `wrangler.jsonc`。
    -   填入您的 `database_id`。
    -   配置 `vars` 中的认证信息。

5.  **生成安全密码和密钥**
    ```bash
    # 生成密码哈希 (将 YourSecurePassword123 替换为您的密码)
    pnpm hash-password YourSecurePassword123

    # 生成 32 位随机密钥
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    ```
    > 将生成的哈希和密钥填入 `wrangler.jsonc`。

6.  **初始化数据库**
    ```bash
    # 创建基础表结构
    wrangler d1 execute navigation-db --file=init_table.sql

    # 为访客模式添加字段和索引
    wrangler d1 execute navigation-db --file=migrations/002_add_is_public.sql
    ```

7.  **本地开发与部署**
    ```bash
    # 启动本地开发服务器 (前端访问 http://localhost:5173)
    pnpm dev

    # 部署到 Cloudflare
    pnpm run deploy
    ```

</details>

## 📝 使用指南

-   **访客模式 vs 编辑模式**: 未登录时为访客模式，仅展示公开内容。登录后自动进入编辑模式，可进行增删改查。
-   **添加分组/网站**: 登录后，点击页面上的“新增分组”或“添加卡片”按钮即可。
-   **拖拽排序**: 点击“编辑排序”按钮，进入排序模式。完成后，务必点击“保存排序”。
-   **全局设置**: 点击右上角“网站设置”，可自定义标题、背景、CSS 等。
-   **数据管理**: 在“网站设置”中可随时导出或导入您的导航数据。

## ❓ 常见问题 (FAQ)

<details>
<summary><b>点击展开/折叠</b></summary>

**Q: 忘记了管理员密码怎么办？**
A: 在 Cloudflare 控制台的 **Settings > Variables** 中修改 `AUTH_PASSWORD` 为新的哈希值即可。

**Q: 部署后访问网站提示 "请先登录"，但无法登录？**
A: 这是因为数据库尚未初始化。请按照部署指南的步骤执行 SQL 命令创建表结构。

**Q: 如何更新到最新版本？**
A:
- **可视化部署**: 在您 Fork 的 GitHub 仓库页面，点击 **Sync fork > Update branch**，Cloudflare 会自动重新部署。
- **开发者部署**: 在本地执行 `git pull` 拉取最新代码，然后执行 `pnpm run deploy`。

**Q: 如何使用自定义域名？**
A: 在 Cloudflare Worker 项目的 **Settings > Triggers** 中，添加您的自定义域名即可。Cloudflare 会自动处理 DNS 和 SSL 证书。

</details>

## 🗂️ 项目结构

```
Cloudflare-Navihive/
├── worker/                  # Cloudflare Workers 后端源码
│   └── index.ts             # API 路由、认证和数据库逻辑
├── src/                     # React 前端源码
│   ├── API/                 # API 客户端
│   ├── components/          # React UI 组件
│   ├── App.tsx              # 主应用组件
│   └── main.tsx             # 应用入口
├── migrations/              # D1 数据库迁移脚本
├── scripts/                 # 工具脚本 (如密码哈希)
├── wrangler.jsonc           # Cloudflare Workers 配置文件
├── vite.config.ts           # Vite 配置文件
└── package.json             # 项目依赖和脚本
```

## 🤝 贡献指南

欢迎所有形式的贡献！您可以：
-   提交 Bug 报告或功能建议到 [Issues](https://github.com/zqq-nuli/Cloudflare-Navihive/issues)。
-   Fork 项目并提交 Pull Request。

请在提交代码前运行 `pnpm lint` 和 `pnpm format` 以确保代码风格一致。

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

## 🙏 致谢

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [Material UI](https://mui.com/)
-   [Cloudflare Workers](https://workers.cloudflare.com/)
-   **Claude Code**
-   **Codex**
-   **Gemini CLI**
-   以及所有为本项目提供灵感和支持的开源社区！

---

## 📈 Star History

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=zqq-nuli/Cloudflare-Navihive&type=Date&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=zqq-nuli/Cloudflare-Navihive&type=Date" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=zqq-nuli/Cloudflare-Navihive&type=Date" />
</picture>