const {Client, MessageEmbed} = require('discord.js'); //llamamos a la libreria que vamos a usar en este caso discord.js, agregamos messageEmbed para cuando creamos un embed no tengamos que poner discord.
const client = new Client(); //declaramos client
function presence(){ //esto es opcional pero es el presente del bot
  client.user.setPresence({
    activity: {
        name: `aca poner lo que sea que quieras que aparezca en el estado del bot`,
        type: "PLAYING" // que quieres que este haciendo el  bot jugando, stremeando, mirando, etc. opciones: STREAMING, WATCHING, LISTENING.
    },
    status: "online" //el modo que esta conectado, no molesta, ausente. opciones: idle, dnd, o invisible.
});

  
} 
client.on('ready', () => {
  console.log(`estoy activo papu!!! ${client.user.tag}!`); //esto saltara en consola cuando el bot se prenda. 
  presence(); //llamamos a la funcion de presente
});



client.on('message', async (message) => { //aca comienza en comando

    if (message.author.bot) return; //esto es por si el que ejecuta el comando es un bot entonces no retornara nada. 
    if (message.content.indexOf(prefix) !== 0) return; //el mensaje tiene que contener el prefix. 
const args =message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
  if(cmd == "TuComando")  {//nombre del comando 
      message.channel.send("hola") //ejemplo 
      //tu codigo 
  }})
  client.login("TuToken"); //el token que genera tu bot 