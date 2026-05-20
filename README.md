# Alyssum Official Website

Alyssum Information Co., Ltd. 的企業官網專案，使用 Vue 3 + Vuetify 建置，目標為展示核心服務、案例實績並導向 B2B 諮詢轉換。

## 技術棧

- Vue 3（Composition API + `<script setup>`）
- Vuetify
- Vue Router（Hash History，適用 GitHub Pages）
- Vue I18n（`zh-TW`）
- Unhead（頁面 SEO / Open Graph）
- pnpm

## 快速開始

```bash
pnpm install
pnpm dev
```

## 主要指令

- `pnpm dev`：本機開發
- `pnpm build`：型別檢查 + 正式建置
- `pnpm lint`：ESLint 檢查
- `pnpm preview`：預覽建置結果

## 環境變數

請於 `.env` 或部署平台設定以下變數：

- `VITE_GOOGLE_FORM_URL`：諮詢表單連結（首頁/聯絡頁 CTA）
- `VITE_SITE_URL`：網站完整網址（SEO `og:url` 用）
- `VITE_GTM_ID`：Google Tag Manager Container ID（例如 `GTM-XXXXXXX`）

## 部署

- 已提供 GitHub Actions 工作流：`.github/workflows/deploy.yml`
- push 到 `main` 分支會自動執行 `pnpm install`、`pnpm build` 並部署到 GitHub Pages

## 專案結構（節錄）

- `src/pages/`：首頁、服務、案例、關於、聯絡頁
- `src/components/`：共用導覽列與頁尾
- `src/locales/zh-TW.json`：主要文案與 i18n 字串
- `src/composables/usePageHead.ts`：每頁 SEO meta 設定
