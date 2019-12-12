# a smol spam script
This is a 5-minute project quickly created to boost some twitch emotes numbers
<br>After starting up, it joins channels given in config file and spams emotes in those.
<br>I **do** reccomend running it on channels where your account is modded/vipped for better performance.
<br>**WARNING:** Your account might end up being temporarily banned from chatting for 30 minutes 4Head

### running the bot
**TL;DR** make sure you have node.js, edit config and run node process

1. Download node.js from [node.js website](https://nodejs.org/en/) (use Recommended version).
2. Download this repository, extract it, open its catalog in terminal and run `npm install`.
3. If you don't want to use your main account for this, create a new account on [Twitch™](https://twitch.tv/).
4. Head over to [twitchapps.com](https://twitchapps.com/tmi/) and generate an oauth token for the account you want to use (you will use this instead of a passowrd).
5. Change `config.example.json` to `config.json` and replace values in it (`channels` array can contain more than one channel but I don't recommend that).
6. Simply run the bot with `spam` (or hook this project to pm2 and start with `node .` if you're on Linux).

### disclaimer
This thing is very lidl, because I spent more time on creating this readme than I spent on writing the source code pajaScoots
<br>So.. don't just expect fireworks in that short code.