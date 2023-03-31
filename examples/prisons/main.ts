// PerfectBAH 0.0.1-playground -- carlop3k
import {
  world,
  system,
  Vector,
  MinecraftBlockTypes,
  Enchantment,
  MinecraftEnchantmentTypes,
  ItemStack,
  MinecraftItemTypes,
  ItemEnchantsComponent,
} from "@minecraft/server";
import { chat } from "./cmdscript";
import { mina } from "./mina";
import { tienda } from "./tienda";
import { xpBreak } from "./xpbreaker";

var over = world.getDimension("overworld");

const bloques2 = [
  "minecraft:muddy_mangrove_roots",
  "minecraft:mud",
  "minecraft:packed_mud",
  "minecraft:dirt_with_roots",
  "minecraft:dirt",
  "minecraft:moss_block",
];

const por2 = [91, 87, 55, 47, 15, 8];
const th1 = new Vector(-28, -61, -28);
const th2 = new Vector(-14, -57, -14);
function mines() {
  world.sendMessage("Regenerando minas!");
  mina.fillRandomBlocks(th1, th2, bloques2, por2);
}

system.events.beforeWatchdogTerminate.subscribe((tt) => {
  tt.cancel = true;
});

const bloques = [
  "minecraft:deepslate_emerald_ore",
  "minecraft:deepslate_diamond_ore",
  "minecraft:deepslate_iron_ore",
  "minecraft:deepslate_gold_ore",
  "minecraft:lapis_ore",
  "minecraft:coal_ore",
  "minecraft:deepslate",
  "minecraft:stone",
];

const porcentaje = [
  // recuerda 0 = 100% || 100 = 0%
  99.9, 99.6, 98.9, 98.5, 96.4, 91.0, 25.0, 3.0,
];

system.run(() => {
  system.events.scriptEventReceive.subscribe((event) => {
    const vip1 = new Vector(-70, -60, -193);
    const vip2 = new Vector(-51, -41, -174);
    const bar1 = new Vector(-50, -38, -194);
    const bar2 = new Vector(-71, -38, -173);
    if (event.id == "mina:test") {
      world.sendMessage(
        "Regenerando mina vip! Mientras tanto quema tus minerales, vendelos o compra en la tienda, antes de que empieze el caos!"
      );
      // over.fillBlocks(vip1, vip2, MinecraftBlockTypes.air);
      over.fillBlocks(bar1, bar2, MinecraftBlockTypes.barrier);
      over.runCommandAsync(`tp @a[x=-60,y=-50,z=-183,r=30] -60.59 -38.00 -169.25`);
      mina.fillRandomBlocks(vip1, vip2, bloques, porcentaje).finally(() => {
        over.fillBlocks(bar1, bar2, MinecraftBlockTypes.air);
      });
    }
  });
});

system.run(tienda);
system.run(xpBreak);
system.run(chat);
system.runInterval(mines, 3600);
