const { Client, Intents } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once('ready', () => {
	console.log(`${client.user.tag} now online`);
});

client.on("messageCreate", function(message) {
	if (message.author.bot) return;
  
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
  
	if (command == "test") {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`WHAT H`);
	}
});

client.login(token);