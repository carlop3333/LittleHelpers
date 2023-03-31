// PerfectBAH 0.0.1-playground -- carlop3k
import { world, MinecraftBlockTypes } from "@minecraft/server";
const over = world.getDimension("overworld");
const brokenBlocks = [
  MinecraftBlockTypes.muddyMangroveRoots,
  MinecraftBlockTypes.mud,
  MinecraftBlockTypes.packedMud,
  MinecraftBlockTypes.mossBlock,
  MinecraftBlockTypes.dirt,
  MinecraftBlockTypes.dirtWithRoots,
  MinecraftBlockTypes.deepslate,
  MinecraftBlockTypes.stone,
  MinecraftBlockTypes.coalOre,
  MinecraftBlockTypes.lapisOre,
  MinecraftBlockTypes.deepslateIronOre,
  MinecraftBlockTypes.deepslateGoldOre,
  MinecraftBlockTypes.deepslateEmeraldOre,
  MinecraftBlockTypes.deepslateDiamondOre,
];

const xps = [5, 3, 1, 3, 2, 2, 1, 1, 2, 1, 2, 3, 4, 5];

export function xpBreak() {
  world.events.blockBreak.subscribe(async (trigg) => {
    await over.runCommandAsync(`scoreboard players add ${trigg.player.name} broke 1`);
    var xpsData = world.scoreboard.getObjective("xps").getScore(trigg.player.scoreboard);
    var levelsData = world.scoreboard.getObjective("levels").getScore(trigg.player.scoreboard);
    var brokenData = world.scoreboard.getObjective("broke").getScore(trigg.player.scoreboard);
    var moneyData = world.scoreboard.getObjective("money").getScore(trigg.player.scoreboard);
    var levelUP;
    if (levelsData == 0) {
      levelUP = 600;
    } else {
      levelUP = Math.round((levelsData + 1) * 300 * Math.sqrt(Math.E * (levelsData * 1.5)));
    } // the more you break and level up, the more is harder
    for (var i = 0; i <= brokenBlocks.length; i++) {
      if (trigg.brokenBlockPermutation.type == brokenBlocks[i]) {
        over.runCommandAsync(`scoreboard players add "${trigg.player.name}" xps ${xps[i]}`);
        trigg.player.onScreenDisplay.setActionBar(
          `§a${xpsData}XP §8(§rSiguiente nivel: §a${levelUP}XP§8)§r | Dinero: §2${moneyData}$`
        );
      }
    }
    if (xpsData >= levelUP) {
      await over.runCommandAsync(`scoreboard players set ${trigg.player.name} xps 0`);
      await over.runCommandAsync(`scoreboard players set ${trigg.player.name} levels ${levelsData + 1}`);
      trigg.player.playSound("random.levelup");
      trigg.player.sendMessage(
        `Felicitaciones, llegaste al nivel ${levelsData + 1}!\nPara llegar al siguiente nivel necesitas ${Math.round(
          (levelsData + 3) * 300 * Math.sqrt(Math.E * (levelsData * 1.5))
        )}XP`
      );
    }
  });
}
