const Discord = require("discord.js");
const client = new Discord.Client();

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

const prefix = "PREFIX";

client.on("ready", () => {
  console.log("Simple | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Support Magic |${-}new`);
});


client.on("message", (message) => {
  if (!message.content.startsWith(-) || message.author.bot) return;

if (message.content.toLowerCase().startsWith( PREFIX + `help`)) 
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Simple Help`)
    .setColor(0xCF40FA)
    .setDescription(`مرحبا انا بوت التكت انا متخصص لمساعده الناس وهذه هي اوامري:`)
    .addField(`Tickets`, `[${-}new]() > يفتح لك روم يراها فقط الادارة\n[${-}close]() > اغلاق الروم`)
    .addField(`Other`, `[${-}help]() > يريك اوامر البوت ويساعدك\n[${-}ping]() > يريك بينق البوت اذا متأخر او لا\n[${-}about]() > Tells you all about Vulnix`)
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(- + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

if (message.content.toLowerCase().startsWith( PREFIX + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith( PREFIX + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You cant use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-close', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

client.login(process.env.BOT_TOKEN);
