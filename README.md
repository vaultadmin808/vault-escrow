# VAULT ESCROW — starter project

This is a development starter, not a live or production escrow service. It does not custody cryptocurrency, generate deposit addresses, monitor blockchains, or send real transfers. Do not accept customer funds using this prototype.

## What is included
- Telegram bot starter (Telegraf) with basic commands.
- Express API starter shared by the bot and website.
- Simple static dashboard page.
- PostgreSQL schema draft and admin/wallet architecture notes.

## Requirements
- Node.js 20+
- A Telegram bot token from BotFather (keep it secret; never paste it into chat or commit it to GitHub).
- PostgreSQL for persistent data when you move beyond the demo.

## Run locally on Windows
1. Install Node.js 20 or newer.
2. Extract this ZIP.
3. Open PowerShell in the extracted `vault-escrow` folder.
4. Run `npm install`.
5. Copy `.env.example` to `.env` and enter your bot token privately.
6. In one PowerShell window run `npm run server`.
7. In another run `npm run bot`.
8. Open `http://localhost:3000` in your browser.

The demo stores deals in memory. Restarting the server clears them. The bot needs a public HTTPS webhook or polling process running on a host to work continuously. Private per-deal Telegram groups require a human-created group; the bot can then be added as admin and create invite links if it has the required permissions.

## Before real launch
Implement PostgreSQL persistence, authenticated admin dashboard with MFA/RBAC, Telegram identity and group authorization, dispute workflow, auditable approval queue, custody provider/MPC/HSM signing, blockchain deposit monitoring, confirmations/reorg handling, ledger/reconciliation, withdrawal controls, monitoring, legal/compliance review, and independent security testing. Keep real deposits and transfers disabled until these are complete.
