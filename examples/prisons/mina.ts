// PerfectBAH 0.0.1-playground -- carlop3k
import { world, Vector, Player, Block, system } from "@minecraft/server";

var over = world.getDimension("overworld");

export class BlockGenerators {
  // mine 2.0

  protected get randomNum() {
    var randomnum = Math.random() * 100;
    var totalrand = parseFloat(randomnum.toFixed(1));
    return totalrand;
  }

  async fillRandomBlocks(from: Vector, to: Vector, blockArray: Array<string>, blockProbability: Array<number>) {
    for (var y = from.y; y <= to.y; y++) {
      for (var z = from.z; z <= to.z; z++) {
        for (var x = from.x; x <= to.x; x++) {
          var something = new Vector(x, y, z);
          var blockToFill = over.getBlock(something);
          if (blockToFill.isAir()) {
            for (var i = 0; i < blockProbability.length; i++) {
              var randomnum = this.randomNum;
              if (blockProbability[i] <= randomnum) {
                await over.runCommandAsync(`setblock ${x} ${y} ${z} ${blockArray[i]} [] keep`);
                break;
              }
            }
          }
        }
      }
    }
  }

  generateBlockFromBroken(block: Block, blockArray: Array<string>, blockProbability: Array<number>) {
    for (var i = 0; i < blockProbability.length; i++) {
      var randomnum = this.randomNum;
      if (blockProbability[i] <= randomnum) {
        over.runCommandAsync(
          `setblock ${block.location.x} ${block.location.y} ${block.location.z} ${blockArray[i]} [] keep`
        );
        break;
      }
    }
  }
}

export const mina = new BlockGenerators();
