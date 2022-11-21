import Discord from "discord.js";
import {config} from "./config";

export const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
    ],
});

const login = async () => {
    await client.login(config.token);

    await client.application?.commands.set([
        {
            type: 1,
            name: "ping",
            description: "Pong !",
            dmPermission: false,
        }
    ])
};

client.on("disconnect", () => {
    try {
        login();
    }
    catch (e) {
        console.error(e)
    }
});

try {
    login();
}
catch (e) {
    console.error(e)
}

