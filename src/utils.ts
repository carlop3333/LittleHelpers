// PerfectBAH 0.0.1 -- carlop3k
import { Vector, Vector3 } from "@minecraft/server";
/**
 * @description An 3d area capable of detecting entities & other weird shit
 */
export class Area {
  protected vector1: Vector;
  protected vector2: Vector;
  protected areaxM: boolean = false;
  protected areayM: boolean = false;
  protected areazM: boolean = false;
  constructor(area1: Vector, area2: Vector) {
    this.vector1 = area1;
    this.vector2 = area2;
    if (area1.x > area2.x) this.areaxM = true;
    if (area1.y > area2.y) this.areayM = true;
    if (area1.z > area2.z) this.areazM = true;
  }
  /**
   * @param areaCompare The vector to compare.
   * @returns True if the vector to compare is overlapping.
   */
  isOnLocation(vectorToCompare: Vector3) {
    const vec = new Vector(
      parseInt(vectorToCompare.x.toFixed(0)),
      parseInt(vectorToCompare.y.toFixed(0)),
      parseInt(vectorToCompare.z.toFixed(0))
    );
    var x: boolean = false,
      y: boolean = false,
      z: boolean = false;
    //areaX
    if (this.areaxM) {
      for (var i = this.vector2.x; i < this.vector1.x; i++) {
        if (vec.x == i) {
          x = true;
          break;
        }
      }
    } else {
      for (var i = this.vector2.x; i > this.vector1.x; i--) {
        if (vec.x == i) {
          x = true;
          break;
        }
      }
    }
    //areaY
    if (this.areayM) {
      for (var i = this.vector2.y; i < this.vector1.y; i++) {
        if (vec.y == i) {
          y = true;
          break;
        }
      }
    } else {
      for (var i = this.vector2.y; i > this.vector1.y; i--) {
        if (vec.y == i) {
          y = true;
          break;
        }
      }
    }
    //areaZ
    if (this.areazM) {
      for (var i = this.vector2.z; i < this.vector1.z; i++) {
        if (vec.z == i) {
          z = true;
          break;
        }
      }
    } else {
      for (var i = this.vector2.z; i > this.vector1.z; i--) {
        if (vec.z == i) {
          z = true;
          break;
        }
      }
    }
    //final
    if (x && y && z) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * @description Gets the area of the blocks described by the vector.
   * @returns The area of the blocks in the given vector (example: [x, y, z]).
   */
  getAreaRadius() {
    var xArea: number =
      this.areaxM && this.vector2.x > 0
        ? (xArea = Math.abs(Math.abs(this.vector1.x) - Math.abs(this.vector2.x) + 1))
        : (xArea = Math.abs(Math.abs(this.vector2.x) - Math.abs(this.vector1.x) + 1));
    var yArea: number =
      this.areayM && this.vector2.y > 0
        ? (yArea = Math.abs(Math.abs(this.vector1.y) - Math.abs(this.vector2.y) + 1))
        : (yArea = Math.abs(Math.abs(this.vector2.y) - Math.abs(this.vector1.y) + 1));
    var zArea: number =
      !this.areazM && this.vector2.z < 0
        ? (zArea = Math.abs(Math.abs(this.vector1.z) - Math.abs(this.vector2.z) + 1))
        : (zArea = Math.abs(Math.abs(this.vector2.z) - Math.abs(this.vector1.z) + 1));
    return [xArea, yArea, zArea];
  }
}

/**
 * @summary Camera class for preview minecraft
 * @description Lets you interact to the camera in various ways
 */
export class Camera {
  /**
   * @description Static camera, can be used for cinematics.
   * @param pos The position the camera is going to be in.
   * @param rotation The rotation the camera is going to be set in.
   * @param Player The player to set the camera (expected for singleplayer, you can use a workaround for multiplayer)
   */
  setCamera(pos: Vector3, rotation: Vector2, Player: Player) {
    over.runCommandAsync(
      `camera "${Player.name}" set minecraft:free pos ${pos.x} ${pos.y} ${pos.z} rot ${rotation.x} ${rotation.y}`
    );
  }
  /**
   * 
   * @param pos Relative player-camera position.
   * @param rotation Relative player-camera rotation.
   * @param easeTime The time the camera follows the player.
   * @param easeType The type of ease the camera will use (more detailed at bedrock.dev)
   * @param TicksPerSecond Used for some optimizations, camera update/tick (be careful with this, can make the camera sluggish) 
   * @param player The player to set the camera
   * @param setEveryone True sets the camera to everyone 
   */
  interactiveCamera(
    pos: Vector3,
    rotation: Vector2,
    easeTime: number,
    easeType: string,
    TicksPerSecond: number,
    Player: Player,
    setEveryone: boolean
  ) {
    name = Player.name;
    etime = easeTime;
    ease = easeType;
    rotCam = rotation;
    te = TicksPerSecond;
    posCam = pos;
    system.clearRun(camera);
    camera = system.runInterval(async () => {
      try {
        for (var player of world.getAllPlayers()) {
          if (setEveryone) {
            await over.runCommandAsync(
              `execute at "${player.name}" anchored eyes run camera "${player.name}" set minecraft:free ease ${etime} ${ease} pos ^${posCam.x} ^${posCam.y} ^${posCam.z} rot ~${rotCam.x} ~${rotCam.y}`
            );
          } else {
            if (player.name === name) {
              await over.runCommandAsync(
                `execute at ${name} anchored eyes run camera "${name}" set minecraft:free ease ${etime} ${ease} pos ^${posCam.x} ^${posCam.y} ^${posCam.z} rot ~${rotCam.x} ~${rotCam.y}`
              );
            }
          } 
        }
      } catch (e) {
        world.sendMessage(`Error: ${e}`);
      }
    }, te);
  }
  /**
   * @description cleans camera run.
   */
  stopCamera() {
    system.clearRun(camera);
    camera = 0;
    system.clearRun(camera);
    system.runTimeout(() => {
      over.runCommandAsync("camera @a clear");
    }, 20);
  }
}
