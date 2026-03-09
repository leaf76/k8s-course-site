# K8s Course Site

## 專案簡介 / Project Description
這是一個 K8s 課程網站，旨在幫助學員掌握 Kubernetes 的基本概念和操作。

This is a K8s course website designed to help learners understand Kubernetes and its ecosystem.

## 技術棧 / Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS

## 如何啟動 / Getting Started
1. 執行 `npm install` 安裝依賴
2. 執行 `npm run dev` 啟動開發伺服器

## Optional Cross-browser Presenter Sync

The default GitHub Pages deployment still uses same-browser sync.

If you want cross-browser presenter sync, deploy the optional Cloudflare Workers + Durable Objects module in `cloudflare/presenter-sync/` and configure:

- `VITE_PRESENTATION_SYNC_MODE=auto`
- `VITE_PRESENTATION_SYNC_URL=https://<your-worker-domain>/websocket`

When those variables are missing or the realtime endpoint is unavailable, the app automatically falls back to same-browser sync.

### What this enables

- Presenter and audience can sync across different browsers and devices.
- Presenter mode still opens one controller audience window as before.
- When cross-browser sync is active, presenter mode also shows a `Copy audience URL` action for sharing a read-only audience link with other browsers.

### Recommended rollout order

1. Deploy the optional Cloudflare worker first.
2. Verify the worker locally or on its public URL.
3. Add GitHub Actions repository variables:
   - `VITE_PRESENTATION_SYNC_MODE=auto`
   - `VITE_PRESENTATION_SYNC_URL=https://<your-worker-domain>/websocket`
4. Re-run the GitHub Pages workflow.

This order avoids deploying a frontend that points to a realtime endpoint that does not exist yet.

### GitHub Pages build-time variables

GitHub Pages does not read runtime environment variables for a Vite app. The values are injected during the GitHub Actions build defined in `.github/workflows/deploy.yml`.

After changing repository variables, trigger a new workflow run from the Actions tab or push a new commit.

### Security notes

- The copied audience URL is read-only. It does not include the presenter control token.
- The controller audience window opened by presenter mode uses a separate URL with a control token. Do not share that URL.
- If you deploy the Cloudflare worker, configure `ALLOWED_ORIGINS` so arbitrary sites cannot open browser WebSocket sessions against your relay.
- This realtime feature is intentionally lightweight. It is suitable for course delivery and demos, not for hostile public environments without additional authentication and abuse protection.

### Manual validation

1. Start presenter mode on the admin page.
2. Confirm the status shows cross-browser sync instead of same-browser fallback.
3. Use `Copy audience URL` and open the copied link in a different browser.
4. Confirm the shared audience follows presenter navigation but does not control the presenter.
5. Confirm the controller audience window can still navigate presenter slides when its URL includes the control token.

## 專案結構 / Project Structure
- `src/` - 應用程式源代碼
- `public/` - 靜態資源
- `package.json` - 專案依賴和腳本配置
