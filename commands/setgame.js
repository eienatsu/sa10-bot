exports.run = function(client, message, args) {
	
	let game = args.slice(0).join(' ');
	client.user.setGame(game);
	message.channel.send(`${client.user} is now playing **"${game}"**.`);
	console.log(`DEBUG: setgame = "${game}"`);
};