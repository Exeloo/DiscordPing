import Discord from "discord.js";

export const interactionCreateListener = (client: Discord.Client) => {
    client.on("interactionCreate", async (interaction) => {
        try {
            if (interaction.isCommand()) {
                switch (interaction.commandName) {
                    case "ping":
                        await interaction.reply("Pong !")
                        break;
                }
            }
        } catch (e) {
            console.error(e)
        }
    })
}
