let tmi = require('tmi.js');
let config = require('./config.json');
let client = new tmi.Client({
    identity:{
        username:config.username,
        password:config.oauth
    },
    channels: config.channels,
    options: {debug:true}
});
//awoiding twitch's duplicated message restriction
let lastmsg = null;
async function send(chn, msg){
    if (msg == lastmsg) msg = msg+" .";
	lastmsg = msg;
    return await client.say(chn, msg);
}
client.connect();
let emote = 'pajaL'; //emote with which script should spam, edit it
let spam = '';
while(spam.length<500){
	spam = spam.concat(` ${emote}`);
}
spam.trim();
//spamming imidiatelly after joining someone's channel
client.on('join', async (channel, username, self) => {
    for (let i=0;i<120;i++) {await send(channel, spam);}
	await client.disconnect();
	await client.connect();
});