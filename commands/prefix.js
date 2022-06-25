const prefixSchema = require("../../models/prefix")

exports.run = async (client, message, args) => {
	prefixSchema.findOne({ Guild: message.guild.id }, async(data, err) => {
     if(!data) {
			 new prefixSchema({ 
			 Guild: message.guild.id,
		   Prefix: args[0]
		 }).save()
		} else {
			 data.delete({ Prefix: args[0] })
			 data.push({ Prefix: args[0] })
			 message.channel.send({ content: `Prefix set to ${args[0]}` })
		}
	})
}

exports.help = {
  name: "prefix"
};