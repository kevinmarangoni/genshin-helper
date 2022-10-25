import {Client,Events,GatewayIntentBits,SlashCommandBuilder} from "discord.js";
import * as dotenv from "dotenv";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commands = new SlashCommandBuilder()
dotenv.config();

function CalcCV(critDmg, critRate) {
  return critDmg + critRate * 2;
}

//commands.setName("ping").setDescription("Replies with Pong!");
commands.setName("materials").setDescription("Sends you material list");


client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.deferReply();
    await interaction.editReply("Pong!");
  }
  if (interaction.commandName === "materials") {
    await interaction.deferReply();
    await interaction.editReply("https://staticg.sportskeeda.com/editor/2022/10/44825-16649199583609-1920.jpg");
  }

});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.login(process.env.TOKEN);

//calccv 11.11, 22.22
//materials
