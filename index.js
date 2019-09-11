const Discord = require('discord.js');
const client = new Discord.Client();
var PREFIX = '~';
var crypto = require('crypto'),
    format = require('biguint-format');

function randomC (qty) {
    var x= crypto.randomBytes(qty);
    return format(x, 'dec');
}
function random (low, high) {
    return randomC(4)/Math.pow(2,4*8-1) * (high - low) + low;
}

client.login('');

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setGame('~help')
});

client.on('message', async message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(PREFIX)) return;
	const input = message.content.slice(PREFIX.length).trim();
	if (!input.length) return;
	const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);

	if (command === 'help') {
		const target = message.mentions.users.first() || message.author;
		return message.channel.send('```~jovo: Megtippeli a jövődet\n~dobokocka: Dob a dobókockával\n~keszito: Kiírja a készítőt```');
	}
	if (command === 'keszito') {
		const target = message.mentions.users.first() || message.author;
		return message.channel.send('**Készítette:** ***ChromiumCat***');
	}
	if (command === 'dobokocka') {
		var dobokocka = random(1, 6);
		var dobokockanumber = Math.floor(dobokocka);
		while (dobokockanumber >= 7) {
			var dobokocka = random(1, 6);
			var dobokockanumber = Math.floor(dobokocka);
		}
		const target = message.mentions.users.first() || message.author;
		return message.channel.send(`**A dobókocka ezen a számon állt meg: ** *${dobokockanumber}*`);
	}	
	if (command === 'jovo') {
		const target = message.mentions.users.first() || message.author;
		var rand = random(1, 6);
		var randomnum = Math.floor(rand);
		while (randomnum >= 7) {
			var rand = random(1, 6);
			var randomnum = Math.floor(rand);
		}
		if (randomnum === 1) {
			return message.channel.send(`**A bot szerint nagyon rossz jövőd lesz!**`);
		} else if (randomnum === 2) {
			return message.channel.send(`**A bot szerint rossz jövőd lesz!**`);
		} else if (randomnum === 3) {
			return message.channel.send(`**A bot szerint átlagos jövőd lesz!**`);
		} else if (randomnum === 4) {
			return message.channel.send(`**A bot szerint a jövőd jobb lesz, mint az átlagos!**`);
		} else if (randomnum === 5) {
			return message.channel.send(`**A bot szerint jó jövőd lesz!**`);
		} else if (randomnum === 6) {
			return message.channel.send(`**A bot szerint nagyon jó jövőd lesz!**`);
		}
	}
	if (command === 'chromiumszupertitkosparancsa') {
	const target = message.mentions.users.first() || message.author;
	return message.channel.send("*Bevetted :D*");
	}
});
