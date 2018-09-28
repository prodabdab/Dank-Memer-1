const GenericCommand = require('../../models/GenericCommand');

module.exports = new GenericCommand(
  async ({msg}) => (`Latency: \`${msg.channel.guild.shard.latency}ms\``),
  {
    triggers: ['ping'],
    description: 'test cmd plz ignore'
  }
);
