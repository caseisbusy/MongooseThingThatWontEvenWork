const Client = require("discord.js")

const client = new Client({
	intents: 32767
})

const mongoose = require("mongoose")
  mongoose.connect('This file is not imporatnt rn', {
			useUnifiedTopology: true,
			useNewUrlParser: true
}).then(console.log('Connected to mongodb'));

const prefix = require("./models/prefix")
client.prefix = async function(message) {
        let custom;

        const data = await prefix.findOne({ Guild : message.guildId })
            .catch(err => console.log(err))
        
        if(data) {
            custom = data.Prefix;
        } if(!data) {
            const prefix = "bots prefix"
                
            
            custom = prefix
        }
        return custom;
   };

client.login('blah blah')

client.on("messageCreate", async message => {
	const pref = await client.prefix(message)
	const [cmd, ...args] = message.content
        .slice(p.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()))

    if(!command) return;
})