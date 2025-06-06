# Offer确认页面 - GitHub Pages 部署指导

## 概述

本指导将帮助您将Offer接受确认页面部署到GitHub Pages，创建一个专业的录用通知确认网站。

## 项目介绍

这是一个简洁优雅的Offer接受确认页面，具有以下特点：
- 现代化的设计风格
- ByteDance品牌元素
- 响应式布局
- 流畅的交互效果
- 跳转到详细页面的功能

## 前提条件

- 拥有GitHub账号
- 基本的GitHub操作知识

## 部署步骤

### 第一步：创建GitHub仓库

1. 登录您的GitHub账号
2. 点击右上角的"+"号，选择"New repository"
3. 填写仓库信息：
   - Repository name: `offer-confirmation`（或您喜欢的名称）
   - Description: `Offer接受确认页面`
   - 选择"Public"（GitHub Pages免费版需要公开仓库）
   - 勾选"Add a README file"
4. 点击"Create repository"

### 第二步：上传项目文件

#### 方法A：通过GitHub网页界面上传（推荐）

1. 在新创建的仓库页面，点击"uploading an existing file"
2. 将项目文件夹中的所有文件拖拽到上传区域：
   - index.html
   - styles.css
   - script.js
   - README.md
   - images/ 文件夹（包含image.png）
3. 在页面底部填写提交信息：
   - Commit title: `初始化Offer确认页面`
   - Description: `上传所有项目文件`
4. 点击"Commit changes"

#### 方法B：使用Git命令行

```bash
# 克隆仓库到本地
git clone https://github.com/您的用户名/offer-confirmation.git

# 进入仓库目录
cd offer-confirmation

# 复制项目文件到仓库目录
# （将下载的项目文件复制到这个目录）

# 添加所有文件
git add .

# 提交更改
git commit -m "初始化Offer确认页面"

# 推送到GitHub
git push origin main
```

### 第三步：启用GitHub Pages

1. 在仓库页面，点击"Settings"选项卡
2. 在左侧菜单中找到"Pages"
3. 在"Source"部分：
   - 选择"Deploy from a branch"
   - Branch选择"main"
   - Folder选择"/ (root)"
4. 点击"Save"

### 第四步：访问您的网站

1. GitHub会自动构建您的网站，通常需要几分钟时间
2. 构建完成后，您会在Pages设置页面看到网站地址：
   `https://您的用户名.github.io/offer-confirmation/`
3. 点击链接即可访问您的Offer确认页面

## 自定义配置

### 修改跳转链接

如果您需要修改"查看 Offer 详情"按钮的跳转地址：

1. 编辑 `script.js` 文件
2. 找到这一行：
   ```javascript
   window.open('https://bvirtyhc.manus.space', '_blank');
   ```
3. 将URL替换为您的目标地址
4. 提交更改，GitHub Pages会自动更新

### 修改公司信息

1. 编辑 `index.html` 文件
2. 找到 `<p class="company-name">ByteDance</p>`
3. 将"ByteDance"替换为您的公司名称
4. 提交更改

### 修改颜色主题

1. 编辑 `styles.css` 文件
2. 找到颜色定义（如 `#4A90E2`）
3. 替换为您喜欢的颜色
4. 提交更改

## 自定义域名（可选）

如果您有自己的域名：

1. 在Pages设置页面的"Custom domain"部分输入您的域名
2. 在您的域名DNS设置中添加CNAME记录，指向`您的用户名.github.io`
3. 等待DNS生效

## 更新网站

当您需要更新网站内容时：

1. 直接在GitHub仓库中编辑文件，或
2. 上传新的文件覆盖旧文件
3. GitHub Pages会自动重新构建和部署

## 注意事项

1. **文件大小**：确保图片文件不要过大，建议压缩后上传
2. **文件名**：避免使用中文文件名，使用英文和数字
3. **路径**：确保所有文件路径正确，特别是图片路径
4. **更新时间**：文件更新后，网站更新可能需要几分钟时间

## 故障排除

### 常见问题

**Q: 网站显示404错误**
A: 检查是否正确启用了GitHub Pages，确保选择了正确的分支

**Q: 图片无法显示**
A: 检查images文件夹是否正确上传，图片路径是否正确

**Q: 按钮点击没有反应**
A: 检查script.js文件是否正确上传，浏览器控制台是否有错误

**Q: 样式显示不正确**
A: 检查styles.css文件是否正确上传，路径是否正确

### 测试建议

部署完成后，建议测试以下功能：
1. 页面是否正确显示
2. 响应式设计在移动设备上的效果
3. 按钮点击是否正常跳转
4. 所有图片是否正确加载

## 进阶功能

### 添加访问统计

可以集成Google Analytics来跟踪页面访问情况：

1. 在Google Analytics创建账号
2. 获取跟踪代码
3. 将代码添加到index.html的`<head>`部分

### 添加联系表单

如果需要收集用户反馈，可以集成表单服务如Formspree。

## 总结

完成以上步骤后，您就拥有了一个专业的Offer确认页面，可以：
- 展示专业的录用确认界面
- 提供良好的用户体验
- 轻松跳转到详细页面
- 完全免费使用和维护

祝您部署成功！如有问题，请参考GitHub Pages官方文档或寻求技术支持。

