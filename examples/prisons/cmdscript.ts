// PerfectBAH 0.0.1-playground -- carlop3k
import {
  Enchantment,
  ItemEnchantsComponent,
  ItemStack,
  MinecraftEnchantmentTypes,
  MinecraftItemTypes,
  world,
} from "@minecraft/server";

var over = world.getDimension("overworld");
const ayuda = [
  "\n-- Ayuda --",
  "\n !dinero : Muestra la cantidad de dinero que tienes en tu cuenta bancaria.",
  "\n !comida : Te da 5 de comida gratis (Temporal).",
  "\n !madera : Te da 5 de madera gratis (Temporal).",
  "\n !mina : Te envia a la mina basica de tierra (Cualquier nivel).",
  "\n !minavip : Te envia a la mina conocida por todos -> la de minerales (Nivel 1).",
  "\n !baltop : Muestra las 10 personas mas ricas del servidor.",
  "\n !ayuda / !help: Muestra este texto.",
  "\n--  --\n",
];
const help = [
  "\n-- Help --",
  "\n !dinero : Shows you how much money do you have.",
  "\n !comida : Gives you 5 apples for free (Temporal).",
  "\n !madera : Gives you 5 logs for free (Temporal).",
  "\n !mina : Sends you to the basic dirt mine (Any level).",
  "\n !minavip : Sends you to the more known mine: the ores one (Level 1).",
  "\n !baltop : Shows the top 10 richest people in the world.",
  "\n !ayuda / !help: Shows this text.",
  "\n-- --\n",
];

export function chat() {
  // TODO: Rewrite this for a flexible system
  world.events.beforeChat.subscribe((chat) => {
    if (chat.message.startsWith("!")) {
      var arrayMessage = chat.message.split(" ");
      var cmdName = arrayMessage[0].slice(1, arrayMessage[0].length);
      switch (cmdName) {
        case "baltop":
          var jugadores = [];
          var money = world.scoreboard.getObjective("money");
          var playersData = money.getParticipants();
          for (var player of playersData) {
            var dinero = money.getScore(player);
            jugadores.push({ name: `${player.displayName}`, money: dinero });
          }
          jugadores.sort(function (a, b) {
            return b.money - a.money;
          });
          var texto = ["\n-- Estas son las personas que han quedado en el top 10: --"];
          var nombres = jugadores.map((names) => {
            return names.name;
          });
          var dineros = jugadores.map((dineros) => {
            return dineros.money;
          });
          for (var i = 0; i <= jugadores.length; i++) {
            if (nombres[i] == "commands.scoreboard.players.offlinePlayerName") {
              texto.push(`\n§r-- ${i}: Offline -- §2${dineros[i]}$`);
            } else {
              texto.push(`\n§r-- ${i}: ${nombres[i]} -- §2${dineros[i]}$`);
            }
          }
          var textend = texto.slice(0, texto.length - 1); // fix for undefined final
          textend.push("\n");
          chat.sender.sendMessage(textend);
          break;
        case "dinero":
          var dinero = world.scoreboard.getObjective("money").getScore(chat.sender.scoreboard);
          chat.sender.sendMessage(`§2Tienes ${dinero}$ en tu cuenta bancaria.`);
          break;
        case "comida":
          over.runCommandAsync(`give ${chat.sender.name} apple 5`);
          chat.sender.sendMessage(`§aSe te han dado 5 de comida!`);
          break;
        case "madera":
          over.runCommandAsync(`give ${chat.sender.name} log 5`);
          chat.sender.sendMessage(`§aSe te han dado 5 de madera!`);
          break;
        case "mina":
          chat.sender.sendMessage(`Enviando a mina!`);
          over.runCommandAsync(`tp ${chat.sender.name} -21 -60 -2`);
          break;
        case "minavip":
          var niveles = world.scoreboard.getObjective("levels").getScore(chat.sender.scoreboard);
          if (niveles >= 1) {
            chat.sender.sendMessage(`Enviando a mina VIP!`);
            over.runCommandAsync(`tp ${chat.sender.name} -60.51 -38.00 -169.37`);
          } else {
            chat.sender.sendMessage(
              `Lo siento, no cumples los requisitos para entrar a la mina VIP (Necesitas ser nivel 1)`
            );
          }
          break;
        case "ayuda":
          chat.sender.sendMessage(ayuda);
          break;
        case "help":
          chat.sender.sendMessage(help);
          break;
        case "test":
          const ench = new Enchantment(MinecraftEnchantmentTypes.fireAspect, 2);
          const test = new ItemStack(MinecraftItemTypes.diamondSword, 1);
          const comp = test.getComponent("minecraft:enchantments") as ItemEnchantsComponent;
          const enchComp = comp.enchantments;
          enchComp.addEnchantment(ench);
          comp.enchantments = enchComp;
          over.spawnItem(test, chat.sender.location);
          break;
        default:
          chat.sender.sendMessage(
            `Comando incorrecto, seguro que has puesto un comando correcto? || wrong comand, u sure u put a correct command? (usa !ayuda / use !help)`
          );
          break;
      }
      chat.cancel = true;
    } else {
      var hasTag = false;
      var tags = chat.sender.getTags();
      for (var tag of tags) {
        if (tag.startsWith("rank:")) {
          world.sendMessage(`§f[${tag.substring(5)}§f] ${chat.sender.name}: ${chat.message}`);
          chat.cancel = true;
          var hasTag = true;
          break;
        }
      }
      if (!hasTag) {
        world.sendMessage(`§f[§bMiembro§f] ${chat.sender.name}: ${chat.message}`);
        chat.cancel = true;
      }
    }
  });
}
