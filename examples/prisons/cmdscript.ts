// PerfectBAH 0.0.1-playground -- carlop3k
import {
  Enchantment,
  ItemEnchantsComponent,
  ItemStack,
  MinecraftEnchantmentTypes,
  MinecraftItemTypes,
  world,
} from "@minecraft/server";

const bloques = [
  "minecraft:emerald",
  "minecraft:diamond",
  "minecraft:iron_ingot",
  "minecraft:gold_ingot",
  "minecraft:lapis_lazuli",
  "minecraft:coal",
  "minecraft:cobbled_deepslate",
  "minecraft:cobblestone",
  "minecraft:dirt_with_roots",
  "minecraft:moss_block",
  "minecraft:dirt",
  "minecraft:packed_mud",
];

var over = world.getDimension("overworld");
const ayuda = [
  "\n-- Ayuda --",
  "\n !dinero : Muestra la cantidad de dinero que tienes en tu cuenta bancaria.",
  "\n !comida : Te da 5 de comida gratis (Temporal).",
  "\n !madera : Te da 5 de madera gratis (Temporal).",
  "\n !mina : Te envia a la mina basica de tierra (Cualquier nivel).",
  "\n !minavip : Te envia a la mina conocida por todos -> la de minerales (Nivel 1).",
  "\n !baltop : Muestra las 10 personas mas ricas del servidor.",
  "\n !vendertodo : Vende todos los minerales/tierras que tienes en tu inventario (A un precio reducido).",
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
  "\n !vendertodo : Sells all the minerals/dirts you have in your inventory (To a reduced price).",
  "\n !ayuda / !help: Shows this text.",
  "\n-- --\n",
];

export function chat() {
  // TODO: Rewrite this for a flexible system
  world.events.beforeChat.subscribe(async (chat) => {
    const Player = chat.sender;
    const name = chat.sender.name;
    if (chat.message.startsWith("!")) {
      chat.cancel = true;
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
          Player.sendMessage(textend);
          break;
        case "dinero":
          var dinero = world.scoreboard.getObjective("money").getScore(Player.scoreboard);
          Player.sendMessage(`§2Tienes ${dinero}$ en tu cuenta bancaria.`);
          break;
        case "mina":
          Player.sendMessage(`§8Enviando a mina!`);
          over.runCommandAsync(`tp ${Player.name} -21 -60 -2`);
          break;
        case "minapiedra":
          var niveles = world.scoreboard.getObjective("levels").getScore(Player.scoreboard);
          if (niveles >= 1) {
            Player.sendMessage(`§eEnviando a mina de piedra!`);
            over.runCommandAsync(`tp ${Player.name} -60.51 -38.00 -169.37`);
          } else {
            Player.sendMessage(
              `§4Lo siento, no cumples los requisitos para entrar a la mina de piedra (Necesitas ser nivel 1)`
            );
          }
          break;
        case "vendertodo":
          Player.sendMessage(`Espera un momento...`);
          var selledBlocks = 0;
          for (var j = 0; j <= bloques.length - 1; j++) {
            for (var i = 0; i <= 64; i++) {
              try {
                await over.runCommandAsync(`clear ${name} ${bloques[j]} 0 1`);
                selledBlocks++;
              } catch (e) {
                break;
              }
            }
          }
          var monTo = selledBlocks * 3;
          over.runCommandAsync(`scoreboard players add ${name} money ${monTo}`);
          Player.sendMessage(`§2Transacción exitosa§f, se le ha añadido §2${monTo}$ §fa su cuenta bancaria.`);
          break;
        case "ayuda":
          Player.sendMessage(ayuda);
          break;
        case "help":
          Player.sendMessage(help);
          break;
        case "test":
          world.sendMessage("Hola!");
          break;
        default:
          Player.sendMessage(
            `Comando incorrecto, seguro que has puesto un comando correcto? || wrong comand, u sure u put a correct command? (usa !ayuda / use !help)`
          );
          break;
      }
      chat.cancel = true;
    } else {
      var hasTag = false;
      var tags = Player.getTags();
      for (var tag of tags) {
        if (tag.startsWith("rank:")) {
          world.sendMessage(`§f[${tag.substring(5)}§f] ${Player.name}: ${chat.message}`);
          chat.cancel = true;
          var hasTag = true;
          break;
        }
      }
      if (!hasTag) {
        world.sendMessage(`§f[§bMiembro§f] ${Player.name}: ${chat.message}`);
        chat.cancel = true;
      }
    }
  });
}
