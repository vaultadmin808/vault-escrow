require('dotenv').config();
const { Telegraf } = require('telegraf');
const token = process.env.BOT_TOKEN;
if (!token || token === 'put_your_botfather_token_here') {
  console.error('Set BOT_TOKEN in your private .env file. Never share it publicly.');
  process.exit(1);
}
const bot = new Telegraf(token);
const api = (process.env.API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
bot.start(ctx => ctx.reply('Welcome to VAULT ESCROW. This is a development demo; do not send funds. Use /help for commands.'));
bot.help(ctx => ctx.reply('/deal — demo deal instructions\n/balance — demo status notice\n/mydeals — demo notice\nThis prototype does not hold or transfer crypto.'));
bot.command('deal', ctx => ctx.reply(`To create a demo deal, use the website dashboard at ${api}. Real escrow funding is not enabled.`));
bot.command('balance', ctx => ctx.reply('No live wallet or balance is connected in this prototype.'));
bot.command('mydeals', ctx => ctx.reply('Deal history is not yet linked to Telegram accounts in this prototype.'));
bot.launch().then(() => console.log('VAULT Telegram bot started')).catch(err => { console.error(err); process.exit(1); });
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
