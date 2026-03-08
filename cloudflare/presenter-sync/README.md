# Optional Cloudflare presenter sync

This module adds an optional Cloudflare Workers + Durable Objects relay for cross-browser presenter sync.

It is intentionally isolated from the main GitHub Pages app:

- The main site still works without Cloudflare.
- If you do not deploy this worker, the app falls back to same-browser sync.
- This module only relays presentation messages and replays the latest presenter state to new connections.

## Realtime behavior

- A room is keyed by `session=<id>`.
- WebSocket clients must connect with `role=presenter` or `role=audience`.
- Controller audience clients also send `control=<token>`.
- The relay keeps only the latest presenter `SYNC_STATE` in memory so a newly connected audience can catch up quickly.

This worker is intentionally minimal. It does not store course content or maintain long-term session history.

## Local development

1. Install worker dependencies:

   ```bash
   cd cloudflare/presenter-sync
   npm install
   ```

2. Run the worker locally:

   ```bash
   npm run dev
   ```

3. Optional: restrict browser origins with an allowlist:

   ```bash
   ALLOWED_ORIGINS=http://localhost:5173,https://<your-github-pages-domain>
   ```

4. Start the frontend with the worker URL:

   ```bash
   VITE_PRESENTATION_SYNC_MODE=auto \
   VITE_PRESENTATION_SYNC_URL=http://127.0.0.1:8787/websocket \
   npm run dev
   ```

## Deploy

1. Authenticate Wrangler with your Cloudflare account.
2. Deploy the worker:

   ```bash
   cd cloudflare/presenter-sync
   npm run deploy
   ```

3. Configure the static app with the deployed worker URL:

   ```bash
   VITE_PRESENTATION_SYNC_MODE=auto
   VITE_PRESENTATION_SYNC_URL=https://<your-worker-domain>/websocket
   ```

4. Recommended: configure `ALLOWED_ORIGINS` in the Worker environment so only your course site can open browser WebSocket sessions.

### Suggested Worker environment

- `ALLOWED_ORIGINS=https://<your-github-pages-domain>`

For local testing you can temporarily include `http://localhost:5173`.

### Suggested GitHub repository variables

- `VITE_PRESENTATION_SYNC_MODE=auto`
- `VITE_PRESENTATION_SYNC_URL=https://<your-worker-domain>/websocket`

The main GitHub Pages workflow already reads those values at build time.

## Security model

- Only presenter messages may send `HEARTBEAT` or `END_SESSION`.
- Only audience messages may send `REQUEST_SYNC`.
- Audience control messages are accepted only when the WebSocket connection itself was opened with a valid control token and the message token matches it.
- Messages outside the freshness window are ignored to reduce replay risk.
- Oversized payloads are rejected.
- Rooms enforce a connection cap to limit abuse.

This is still a lightweight relay. If you need stronger guarantees on the public internet, add explicit authentication, session expiration, and abuse-rate controls.

## Deployment checklist

1. Deploy the worker and confirm `GET /health` returns `ok`.
2. Set `ALLOWED_ORIGINS`.
3. Configure repository variables in GitHub.
4. Run the GitHub Pages deployment workflow again.
5. Verify presenter mode from one browser and a shared audience URL from another browser.

## Endpoints

- `GET /health` returns `ok`
- `GET /websocket?session=<id>&role=<presenter|audience>[&control=<token>]` upgrades to a presenter-sync WebSocket room
