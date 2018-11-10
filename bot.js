const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as -{client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`Start -{new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " -{client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " -{client.guilds.size} " ]`);
  console.log(`Users! [ " -{client.users.size} " ]`);
  console.log(`channels! [ " -{client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
	
});



client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `-{user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `-{message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `-{reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

var prefix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `-{user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `-{message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `-{reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
   
      if(command === "-clear") {
          const emoji = client.emojis.find("name", "simple")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
      msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });

  client.on('message', message => {
 
    if (message.content === "-mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "-unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
 
 
 
});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[-{message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix+"cr")) {
        var args = message.content.split(" ").slice(1);
        var argrst = args.join(' ');
                    message.guild.createChannel(`-{argrst}`, 'text')
          }
    });

client.on('message', message => {
        if (message.content.startsWith(prefix+"cv")) {
            var args = message.content.split(" ").slice(1);
            var argrst = args.join(' ');
                        message.guild.createChannel(`-{argrst}`,'voice')
                 
                }
        });

client.on('message', message => {
            if (true) {
          if (message.content === '-invite') {
                message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=510512761977962500&permissions=0&scope=bot  |  تفضل ربط البوت    ').catch(e => console.log(e.stack));
           
              }
             }
            });
           
           
          client.on('message', message => {
               if (message.content === "-invite") {
               let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#9B59B6")
            .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
               
               
               
            message.channel.sendEmbed(embed);
              }
          });

          client.on('message', async message =>{
            var prefix = "-";
          const ms = require("ms");
          if (message.author.omar) return;
          if (!message.content.startsWith(prefix)) return;
          if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
          var command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
          var args = message.content.split(" ").slice(1);
              if(command == "mute") {
              let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
              if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
              if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
              let muterole = message.guild.roles.find(`name`, "Muted");
              //start of create role
              if(!muterole){
                try{
                  muterole = await message.guild.createRole({
                    name: "Muted",
                    color: "#070000",
                    permissions:[]
                  })
                  message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false,
                      SPEAK : false
                    });
                  });
                }catch(e){
                  console.log(e.stack);
                }
              }
              //end of create role
              let mutetime = args[1];
              if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
           
              await(tomute.addRole(muterole.id));
          message.reply(`<@-{tomute.id}> **تم اعطائه ميوت ومدة الميوت** : -{ms(ms(mutetime))}`);
          setTimeout(function(){
                tomute.removeRole(muterole.id);
                message.channel.send(`<@-{tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
              }, ms(mutetime));
           
           
           
            }
          if(command === `unmute`) {
            if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
           
            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
           
            let role = message.guild.roles.find (r => r.name === "Muted");
           
            if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
           
            await toMute.removeRole(role)
            message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
           
            return;
           
            }
           
          });

client.on('message', message => {
            if(message.channel.type === 'dm') {
                var guildID = '510880563545112576'; // <=============== ايدي السيرفر حقك
                if(message.content.includes('discord.gg/')) {
                    var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
                    member.ban({ reason: 'ADS In Private.' }).catch();
                }
            }
        });

client.on('message', function(message) {
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
                    let command = message.content.split(" ")[0];
                if(message.content.includes('discord.gg')){
                message.reply (' ')
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             message.member.addRole(message.guild.roles.find('name', 'Muted'));
            const embed500 = new Discord.RichEmbed()
              .setTitle(":x: | تمت معاقبتك")
                    .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
              .addField(`by`,`ALPHACODES`)
                    .setColor("c91616")
                    .setThumbnail(`-{message.author.avatarURL}`)
                    .setAuthor(message.author.username, message.author.avatarURL)
                .setFooter(`-{message.guild.name} Server`)
             message.channel.send(embed500)
           
               
            }
            }
        })

const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json"));;
const client = new Discord.Client();
         
         
        client.on('message', async message => {
         
          if (message.author.x5bz) return;
          if (!message.content.startsWith(prefix)) return;
         
         
          let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
         
          let args = message.content.split(" ").slice(1);
         
          if (command == "warn") { //??? ???????
         
                       if(!message.channel.guild) return message.reply('** This command only for servers**');
                 
          if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
          let user = message.mentions.users.first();
          let reason = message.content.split(" ").slice(2).join(" ");
         
          if (message.mentions.users.size < 1) return message.reply("**???? ???**");
          if(!reason) return message.reply ("**???? ??? ?????**");
         
         
          if(!warns[user.id]) warns[user.id] = {
            warns: 0
          };
         
          warns[user.id].warns++;
         
          fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err)
          });
         
         
          const banembed = new Discord.RichEmbed()
          .setAuthor(`WARNED!`, user.displayAvatarURL)
          .setColor("RANDOM")
          .setTimestamp()
          .addField("**User:**",  '**[ ' + `-{user.tag}` + ' ]**')
          .addField("**By:**", '**[ ' + `-{message.author.tag}` + ' ]**')
          .addField("**Reason:**", '**[ ' + `-{reason}` + ' ]**')
           client.channels.find('name', 'log').send({
            embed : banembed
          })
         
            if(warns[user.id].warns == 2){ //??? ???????? ??????
            let muterole = message.guild.roles.find(`name`, "Muted");
            if(!muterole){
              try{
                muterole = await message.guild.createRole({
                  name: "Muted",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
            }
           
            let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!tomute) return message.reply("**??? ???? ?????? ?????**:x: ") .then(m => m.delete(5000));
           
            let mutetime = "60s";
            await(tomute.addRole(muterole.id));
            message.channel.send(`<@-{user.id}> has been temporarily muted`);
         
            setTimeout(async function(){
            await(tomute.removeRole(muterole.id));
              message.reply(`<@-{user.id}> has been unmuted.`)
            }, ms(mutetime))
          }
          if(warns[user.id].warns == 3){  //??? ???????? ??????
            message.guild.member(user).ban(reason);
            message.reply(`<@-{user.id}> has been banned.`)
          }
         
        }
        }
        );

client.on("message", message => {
            var prefix = "-";
            const command = message.content.split(" ")[0];
         
            if(command == prefix+"vc"){
         
                if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
                    return message.reply('you do not have permission to perform this action!');
                }
         
                var member = message.guild.members.get(message.mentions.users.array()[0].id);
                if(!message.mentions.users){
                    message.reply("please mention the member")
                    return;
                }
         
            if(!member.voiceChannel){
            message.reply("i can't include voice channel for member!")
            return;
            }
                      message.guild.createChannel('voicekick', 'voice').then(c => {
                        member.setVoiceChannel(c).then(() => {
                            c.delete(305).catch(console.log)
               
         
         
           
              });
             });
            }
        });

client.on('message', message => {
            if(!message.channel.guild) return;
    if (message.content.startsWith('-ping')) {
        if(!message.channel.guild) return;
        var msg = `-{Date.now() - message.createdTimestamp}`
        var api = `-{Math.round(client.ping)}`
        if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username,message.author.avatarURL)
    .setColor('RANDOM')
    .addField('**Time Taken:**',msg + " ms 📶 ")
    .addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
    }
});

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`-{x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', function(msg) {
    const prefix = '*'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **-{msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __-{msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __-{msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __-{msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __-{msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __-{msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __-{msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**-{msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**-{msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

  client.on('message', message => {
    var prefix = "-"
  var args = message.content.split(" ").slice(1);    
  if(message.content.startsWith(prefix + 'id')) {
  var year = message.author.createdAt.getFullYear()
  var month = message.author.createdAt.getMonth()
  var day = message.author.createdAt.getDate()
  var men = message.mentions.users.first();  
  let args = message.content.split(' ').slice(1).join(' ');
  if (args == '') {
  var z = message.author;
  }else {
  var z = message.mentions.users.first();
  }
   
  let d = z.createdAt;          
  let n = d.toLocaleString();  
  let x;                      
  let y;                        
   
  if (z.presence.game !== null) {
  y = `-{z.presence.game.name}`;
  } else {
  y = "No Playing... |💤.";
  }
  if (z.bot) {
  var w = 'بوت';
  }else {
  var w = 'عضو';
  }
  let embed = new Discord.RichEmbed()
  .setColor("#502faf")
  .addField('🔱| اسمك:',`**<@` + `-{z.id}` + `>**`, true)
  .addField('🛡| ايدي:', "**"+ `-{z.id}` +"**",true)
  .addField('♨| Playing:','**'+y+'**' , true)
  .addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
  .addField('📛| الكود حق حسابك:',"**#" +  `-{z.discriminator}**`,true)
  .addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
  .addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
   
  .addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
  .addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            
   
  .setThumbnail(`-{z.avatarURL}`)
  .setFooter(message.author.username, message.author.avatarURL)
   
  message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
   
  }
   
  });

  const hastebin = require('hastebin-gen');
  client.on('message', message => {
  var PREFIX = '-';
      if(message.content.startsWith(PREFIX + 'ctag')) {
              var args = message.content.split(' ').slice(1).join(' ');
  }
        var array = [];
        var i = 0;
        if(args){
  client.users.filter(u => u.discriminator == args).map(u => {
      if(i > 4){
       return;
      }
      i = i + 1;
   
     array.push(`-{u.tag}`);
  });
  }
  hastebin(`-{array.slice(0, 30).join('\n')}`, 'txt').then(l => {
      message.channel.send(`-{l}`);
  }).catch(console.error);
  });
  client.on('message' , message => {
  var PREFIX = '-';
  if(message.content === `-{PREFIX}dis         `         ) {
                        let array = [];
                        var i = 0;
  client.users.filter(u => u.discriminator == message.author.discriminator).map(u => {
      if(i > 4){
       return;
      }
      i = i + 1;
     array.push(`-{u.tag}`);
  });
  hastebin(`-{array.slice(0, 30).join('\n')}`, 'txt').then(l => {
      message.channel.send(`-{l}`);
  }).catch(console.error);
   
          }
  });

  const fs = require('fs')
  const p = {}
  const devs = ['507978288250093568']
  client.on('message', message => {
  if(message.channel.type === "dm") return;
  if(message.author.bot) return;
  if(!p[message.guild.id]) p[message.guild.id] = {
      prefix: "-"
  }
  const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "setprefix")) {
      if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
      let newPrefix = message.content.split(' ').slice(1).join(" ")
      if(!newPrefix) return message.reply(`**-{prefix}setprefix <prefix>**`)
      p[message.guild.id].prefix = newPrefix
      message.channel.send(`**-{message.guild.name}'تم تغيير البرفكس -{newPrefix}**`);
  } 
  
  
  });

client.on("message", message => {

    if (message.content.startsWith(prefix + "bc1")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
m.send(`-{argresult}\n -{m}`);
})
message.channel.send(`\`-{message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});

client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc2')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)
 .setAuthor(`محتوى الرساله -{args}`)
 .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
 if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
  
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
  
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
  
 EmbedBc.on("collect", r => {
 message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
   .setTitle('`-Broadcast-`')
 .setAuthor(`Server : -{message.guild.name}`)
 .setFooter(`Sender : -{message.author.username}`)
 .setDescription(`Message : -{args}`)
 .setThumbnail(message.author.avatarURL)
 m.send({ embed: bc })
 msg.delete();
 })
 })
 NormalBc.on("collect", r => {
   message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 m.send(args);
 msg.delete();
 })
 })
 })
 }
 });
 

 const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا ��خص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
          var prefix = "-"
if (message.content.startsWith(prefix + 'صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("Alpha")
 .setColor('RANDOM')
 .setDescription(`-{Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});

client.on('message', message => {
    var prefix = "-";
    var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
            var args = message.content.split(" ").slice(1);
        if(message.content.startsWith(prefix + 'نكت')) {
             var cat = new Discord.RichEmbed()
    .setImage(cats[Math.floor(Math.random() * cats.length)])
    message.channel.sendEmbed(cat);
        }
    });

    client.on('message', message => {
        if(message.content.startsWith(prefix + 'cat')) {
          let args = message.content.split(" ").slice(1);
           let hug = [
               "https://cdn.discordapp.com/attachments/466949822604247044/467186871290822657/pat-B1SOzCV0W.gif",
               "https://cdn.discordapp.com/attachments/466949822604247044/466954354927337472/26d886c039e5f438d36c22964f1e79d0.gif",
               "https://cdn.discordapp.com/attachments/466949822604247044/466952080750280724/tenor.gif",
               "https://cdn.discordapp.com/attachments/466949822604247044/466951974726664192/1506871682_tumblr_o925gmua611uhpv9wo1_540.gif",
               "https://cdn.discordapp.com/attachments/466949822604247044/466951961439109130/pets.gif",
               "https://cdn.discordapp.com/attachments/466949822604247044/466951936873201664/tenor-1.gif",
               "https://media2.giphy.com/media/109ltuoSQT212w/giphy.gif",
               "https://media3.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
               "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
               "https://media2.giphy.com/media/aPOuFhSOoeoAo/giphy.gif",
               "https://media0.giphy.com/media/L2z7dnOduqEow/giphy.gif",
               "https://media0.giphy.com/media/X9MUeQelKifU4/giphy.gif",
               "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif",
               "https://media1.giphy.com/media/e7xQm1dtF9Zni/giphy.gif",
               "https://78.media.tumblr.com/6d55745d63a3829693ce68a71ddbd218/tumblr_ox5dckEwTQ1rupogao1_500.gif",
               "https://78.media.tumblr.com/59074e59e5563e15623216e3e33cd259/tumblr_ojt62uIuDB1vztiw8o1_500.gif",
           ]
           let hugresult = Math.floor((Math.random() * hug.length));
           if (!args[0]) {
               const ghembed = new Discord.RichEmbed()
               .setColor("RANDOM")
                   .setTitle(``)
                   .setImage('')
               message.channel.send({
                   embed: ghembed
               })
               return;
            }
           if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
               const hembed = new Discord.RichEmbed()
               .setColor("RANDOM")
                   .setTitle(`-{message.mentions.members.first().user.username} you have been patted by -{message.author.username}`)
                   .setImage(hug[hugresult])
               message.channel.send({
                   embed: hembed
               })
               return;
           }
           const ghembed = new Discord.RichEmbed()
               .setColor(RANDOM)
               .setTitle(``)
               .setImage('')
           message.channel.send({
               embed: ghembed
           })
       }
       });

var RAW1 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var RAW2 = ["ًں“™__60%__  **|**  ًں“ک__40%__","ًں“™__63%__  **|**  ًں“ک__37%__","ًں“™__89%__  **|**  ًں“ک__11%__","ًں“™__97%__  **|**  ًں“ک__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="-";
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait -{pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(RAW1[Math.floor(Math.random() * RAW2.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('ًں“ک').then( r => {
        msg.react('ًں“™')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === 'ًں“ک' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === 'ًں“™' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(RAW2[Math.floor(Math.random() * RAW2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(RAW2[Math.floor(Math.random() * RAW2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });

                                 const adkar = [
                                    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
                                    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
                                    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
                                    '**‏اذكار  |  **أستغفر الله .',     
                                    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
                                    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
                                    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
                                    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
                                    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
                                    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
                                    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
                                    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
                                    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
                                    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
                                    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
                                    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
                                    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
                                    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
                                    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
                                    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
                                    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
                                    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
                                    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
                                    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
                                    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
                                    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
                                    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
                                    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
                                    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
                                    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
                                    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
                                  ]
                                  client.on('message', message => {
                                          var prefix = "-"
                                  if (message.author.bot) return;
                                  if (message.content.startsWith(prefix + 'اذكار')) {
                                    if(!message.channel.guild) return;
                                  var client= new Discord.RichEmbed()
                                  .setTitle("Legend GaMerZ .")
                                  .setThumbnail(message.author.avatarURL)
                                  .setColor('RANDOM')
                                  .setDescription(`-{adkar[Math.floor(Math.random() * adkar.length)]}`)
                                                 .setTimestamp()
                                  message.channel.sendEmbed(client);
                                  message.react("??")
                                  }
                                  });

                                  client.on('message', message => {
                                    if (message.content == "-امثال") {
                                        var x = ["أذا ذل رويال فهو ...",
                                "الإتحاد ...",
                                "الناس سواسية كأسنان ...",
                                "ما أشبه الليله",
                                "البعد ...",
                                "الماء أهون موجود وأعز ...",
                                "الهزيمة تحل ...",
                                "العقل ...",
                                "البطنة تزيل ...",
                                "اللبيب بالإشارة ...",
                                "اخطب لابنتك ولا تخطب ...",
                                "أعز من الولد ولد ...",
                                "القرد في عين أمه ...",
                                "الكتاب يقرأ من ...",
                                "آخر الحياة ...",
                                "أكرم نفسك عن كل",
                                "العز في نواصي",
                                ];
                                        var x2 = ['ذليل',
                                        "قوة",
                                        "المشط",
                                        "بالبارحة",
                                        "جفاء",
                                        "مفقود",
                                        "العزيمة",
                                        "زينة",
                                        "الفطنة",
                                        "يفهم",
                                        "لابنك",
                                        "الولد",
                                        "غزال",
                                        "عنوانه",
                                        "الموت",
                                        "دنيء",
                                        "الخيل",
                                        
                                        
                                        
                                        
                                        ];
                                        
                                        var x3 = Math.floor(Math.random()*x.length)
                                        message.channel.send(` اكمل المثل التآلي :  __**-{x[x3]}**__ ؟
                                    لديك 30 ثآنية للإجآبة `).then(msg1=> {
                                            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                                                maxMatches : 1,
                                                time : 30000,
                                                errors : ['time']
                                            })
                                        r.catch(() => {
                                            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
                                            الإجآبة الصحيحةة هي __**-{x2[x3]}**__`)
                                        })
                                        
                                        r.then((collected)=> {
                                            message.channel.send(`-{collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
                                        })
                                        })
                                    }
                                })

                                client.on("message", function(message) {
                                    var prefix = "-";
                                   if(message.content.startsWith(prefix + "rps")) {
                                    let messageArgs = message.content.split(" ").slice(1).join(" ");
                                    let messageRPS = message.content.split(" ").slice(2).join(" ");
                                    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
                                    let result = `-{arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
                                    var RpsEmbed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username)
                                    .setThumbnail(message.author.avatarURL)
                                    .addField("Rock","ًں‡·",true)
                                    .addField("Paper","ًں‡µ",true)
                                    .addField("Scissors","ًں‡¸",true)
                                    message.channel.send(RpsEmbed).then(msg => {
                                        msg.react(' ًں‡·')
                                        msg.react("ًں‡¸")
                                        msg.react("ًں‡µ")
                                .then(() => msg.react('ًں‡·'))
                                .then(() =>msg.react('ًں‡¸'))
                                .then(() => msg.react('ًں‡µ'))
                                let reaction1Filter = (reaction, user) => reaction.emoji.name === 'ًں‡·' && user.id === message.author.id;
                                let reaction2Filter = (reaction, user) => reaction.emoji.name === 'ًں‡¸' && user.id === message.author.id;
                                let reaction3Filter = (reaction, user) => reaction.emoji.name === 'ًں‡µ' && user.id === message.author.id;
                                let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
                                        
                                let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
                                let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
                                reaction1.on("collect", r => {
                                        message.channel.send(result)
                                })
                                reaction2.on("collect", r => {
                                        message.channel.send(result)
                                })
                                reaction3.on("collect", r => {
                                        message.channel.send(result)
                                })
                                
                                    })
                                }
                                });




                                client.on('message', message => {
                                    if (message.content.startsWith(prefix + 'Help')) { 
                                        let pages = [`
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    :earth_africa: The Public Commands :earth_africa: 
                                    1༺༻  -server  | Show Server Informatios༺༻
                                    2༺༻  -id | Shows User ID༺༻
                                    3༺༻  -server | Shows Server Info༺༻
                                    4༺༻  -ping | Show your ping༺༻
                                    5༺༻  -صراحه ༺༻
                                    6༺༻ -نكت ༺༻
                                    7༺༻  -لو خيروك ༺༻
                                    8༺༻  -اذكار ༺༻
                                    9༺༻ -امثال   ༺༻
                                    10༺༻  -rps | حجره ورقه مقص ༺༻
                                    11༺༻  -invite  | give you bot link༺༻
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    Click On ▶ To Go Administor Side
                                       `
                                    ,`
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    :closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
                                    1༺༻  -clear | Clear The Chat༺༻
                                    2༺༻  -bc1 / -bc2 | Double Broadcast :scream: ༺༻
                                    3༺༻  -kick | Kick With Reson༺༻
                                    4༺༻  -ban | Ban With Reason༺༻
                                    5༺༻  -mutechannel / -unmutechannel | Close room and open it༺༻
                                    6༺༻  -cr | Create Room༺༺༻
                                    7༺༻  -cv | Create Voice Room༺༻
                                    6༺༻  -mute / -unmute | give someone text mute༺༻
                                    7༺༻  -warn | give somone warn༺༻
                                    7༺༻  -vc | kick someone from voice༺༻
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    Click On ▶ To Go To Bot Info
                                       `,`
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    1༺༻  There is Commands Just For Simple | Bot By: Simple༺༻
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                       `]
                                        let page = 1;
                                    
                                        let embed = new Discord.RichEmbed()
                                        .setColor('RANDOM')
                                        .setFooter(`Page -{page} of -{pages.length}`)
                                        .setDescription(pages[page-1])
                                    
                                        message.author.sendEmbed(embed).then(msg => {
                                    
                                            msg.react('◀').then( r => {
                                                msg.react('▶')
                                    
                                    
                                            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
                                            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
                                    
                                    
                                            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
                                            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
                                    
                                    
                                    
                                            backwards.on('collect', r => {
                                                if (page === 1) return;
                                                page--;
                                                embed.setDescription(pages[page-1]);
                                                embed.setFooter(`Page -{page} of -{pages.length}`);
                                                msg.edit(embed)
                                            })
                                            forwards.on('collect', r => {
                                                if (page === pages.length) return;
                                                page++;
                                                embed.setDescription(pages[page-1]);
                                                embed.setFooter(`Page -{page} of -{pages.length}`);
                                                msg.edit(embed)
                                            })
                                            })
                                        })
                                        }
                                    }); 
                                    
                                    
                                    client.on('message', message => {
                                    if (message.content.startsWith(prefix + 'Help')) { /// And This is The Channel One Send The Help In Channel // Code By NotGucci
                                        let pages = [`
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    :earth_africa: The Public Commands :earth_africa: 
                                    1༺༻  -server  | Show Server Informatios༺༻
                                    2༺༻  -id | Shows User ID༺༻
                                    3༺༻  -server | Shows Server Info༺༻
                                    4༺༻  -ping | Show your ping༺༻
                                    5༺༻  -صراحه ༺༻
                                    6༺༻ -نكت ༺༻
                                    7༺༻  -لو خيروك ༺༻
                                    8༺༻  -اذكار ༺༻
                                    9༺༻ -امثال   ༺༻
                                    10༺༻  -rps | حجره ورقه مقص ༺༻
                                    11༺༻  -invite  | give you bot link༺༻
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    Click On ▶ To Go Administor Side
                                       `
                                    ,`
                                    :closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
                                    1༺༻  -clear | Clear The Chat༺༻
                                    2༺༻  -bc1 / -bc2 | Double Broadcast :scream: ༺༻
                                    3༺༻  -kick | Kick With Reson༺༻
                                    4༺༻  -ban | Ban With Reason༺༻
                                    5༺༻  -mutechannel / -unmutechannel | Close room and open it༺༻
                                    6༺༻  -cr | Create Room༺༺༻
                                    7༺༻  -cv | Create Voice Room༺༻
                                    6༺༻  -mute / -unmute | give someone text mute༺༻
                                    7༺༻  -warn | give somone warn༺༻
                                    7༺༻  -vc | kick someone from voice༺༻
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    Click On ▶ To Go To Bot Info
                                       `,`
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                    1༺༻  There is Commands Just For Simple | Bot By: Simple༺༻
                                    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                       `]
                                     let page = 1;
                                    
                                        let embed = new Discord.RichEmbed()
                                        .setColor('RANDOM')
                                        .setFooter(`Page -{page} of -{pages.length}`)
                                        .setDescription(pages[page-1])
                                    
                                        message.channel.sendEmbed(embed).then(msg => {
                                    
                                            msg.react('◀').then( r => {
                                                msg.react('▶')
                                    
                                               setTimeout(() => {
                                            msg.delete
                                        }, 60 * 1000)
                                    
                                            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
                                            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
                                    
                                    
                                            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
                                            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
                                    
                                    
                                    
                                            backwards.on('collect', r => {
                                                if (page === 1) return;
                                                page--;
                                                embed.setDescription(pages[page-1]);
                                                embed.setFooter(`Page -{page} of -{pages.length}`);
                                                msg.edit(embed)
                                            })
                                            forwards.on('collect', r => {
                                                if (page === pages.length) return;
                                                page++;
                                                embed.setDescription(pages[page-1]);
                                                embed.setFooter(`Page -{page} of -{pages.length}`);
                                                msg.edit(embed)
                                            })
                                            })
                                        })
                                        }
                                    }); 


client.login(process.env.BOT_TOEKN)
