// PerfectBAH 0.0.1-playground -- carlop3k
import { world, MinecraftItemTypes, Player } from "@minecraft/server";
import * as ui from "@minecraft/server-ui";
import * as cosastienda from "./cosastienda";
const over = world.getDimension("overworld");
const bloqvender = [
  "Esmeralda (100 monedas)",
  "Diamante (80 monedas)",
  "Hierro (20 monedas)",
  "Oro (38 monedas)",
  "Lapislazuli (25 monedas)",
  "Carbón (15 monedas)",
  "Piedra profunda (10 monedas)",
  "Piedra (5 monedas)",
  "Tierra con raices (1 moneda)",
  "Musgo (2 monedas)",
  "Tierra (1 moneda)",
  "Barro compacto (1 moneda)",
];
const mon = [100, 80, 20, 38, 25, 15, 10, 5, 1, 2, 1, 1];
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
const tui = new ui.ModalFormData()
  .title("Vender")
  .dropdown("Selecciona los items a vender", bloqvender, 7)
  .slider("Selecciona cuanto quieres vender:", 4, 64, 4, 32)
  .toggle("Vender todo el mineral?", false);
const cov = new ui.MessageFormData()
  .title("Compra/Venta")
  .body("Selecciona la accion a hacer")
  .button1("Vender")
  .button2("Comprar");
const sui = new ui.ActionFormData()
  .title("Comprar")
  .body("Selecciona en que categoria vas a comprar:")
  .button("§b§lEquipamiento y kits", "textures/items/diamond_sword")
  .button("§g§lRandom y otros", "textures/items/quiver")
  .button("§c§lPociones y encantamientos", "textures/items/potion_bottle_lingering_heal")
  .button("§6§lAcceso Express", "textures/items/light_block_15");

// SECCION DE EQUIPAMIENTOS
const sui1 = new ui.MessageFormData()
  .title("§b§lEquipamiento y kits")
  .body("Selecciona que quieres comprar:")
  .button1("Kits")
  .button2("Equipamientos");
const suikits = new ui.ActionFormData()
  .title("Kits")
  .body("Selecciona los kits a comprar:")
  .button("Kit Basico")
  .button("Kit Promedio")
  .button("Kit PRO")
  .button("Kit Express");
const suiequips = new ui.ActionFormData()
  .title("Equipamientos/Herramientas")
  .body("Selecciona uno de los equipamientos a comprar:")
  .button("Espada PRO")
  .button("Pico SuperEficiente")
  .button("Espada Afiladisima")
  .button("Pico Arrasador")
  .button("Casco Inmortal");

// SECCION DE COSAS RANDOM
const rando = new ui.ActionFormData()
  .title("§g§lRandom y otros")
  .body("Selecciona el item a comprar")
  .button("Perlas de ender")
  .button("Telescopio")
  .button("Carne cocinada")
  .button("Pedernal")
  .button("Botella de XP");
// SECCION DE POCIONES Y ENCANTAMIENTOS

const compass = MinecraftItemTypes.compass;

class ShopUI {
  abrirOpciones(player) {
    cov.show(player).then((tt) => {
      switch (tt.selection) {
        case 1:
          this.#abrirVender(player);
          break;
        case 0:
          this.#abrirComprar(player);
          break;
      }
    });
  }
  #abrirComprar(player) {
    sui.show(player).then((tt) => {
      switch (tt.selection) {
        case 0:
          this.#abrirComprarEqui(player);
          break;
        case 1:
          this.#abrirComprarRandom(player);
          break;
      }
    });
  }
  #abrirComprarEqui(player) {
    sui1.show(player).then((ttt) => {
      switch (ttt.selection) {
        case 0:
          this.#abrirComprarEquipamiento(player);
          break;
        case 1:
          this.#abrirComprarKits(player);
          break;
      }
    });
  }
  #abrirComprarEquipamiento(player) {
    suiequips.show(player).then((tt) => {
      if (tt.canceled) {
        this.#abrirComprar(player);
      }
    });
  }
  #abrirComprarKits(player) {
    suikits.show(player).then((tt) => {
      if (tt.canceled) {
        this.#abrirComprar(player);
      } else {
        switch (tt.selection) {
          case 0:
            this.#abrirComprarFin(player, 1);
            break;
          case 1:
            this.#abrirComprarFin(player, 2);
            break;
        }
      }
    });
  }
  #abrirComprarRandom(player) {
    rando.show(player).then((tt) => {
      if (tt.canceled) {
        this.#abrirComprar(player);
      }
    });
  }

  #abrirVender(player) {
    var getBlocks = 0;
    var itemToSell = 0;
    var selledBlocks = 0;
    var isSellingAll = false;
    var canceled = true;
    tui
      .show(player)
      .then((tt) => {
        getBlocks = parseInt(tt.formValues[1]);
        itemToSell = parseInt(tt.formValues[0]);
        isSellingAll = tt.formValues[2];
        canceled = tt.canceled; // fix jst ic
      })
      .finally(async () => {
        if (isSellingAll && !canceled) {
          for (var i = 0; i <= 256; i++) {
            try {
              await player.runCommandAsync(`clear ${player.nameTag} ${bloques[itemToSell]} 0 1`);
              selledBlocks++;
            } catch (e) {
              break;
            }
          }
          var monTo = mon[itemToSell] * selledBlocks;
          await over.runCommandAsync(`scoreboard players add ${player.nameTag} money ${monTo}`);
          player.sendMessage(`§2Transacción exitosa§f, se le ha añadido §2${monTo}$ §fa su cuenta bancaria.`);
        } else if (!canceled) {
          for (var i = 0; i <= getBlocks - 1; i++) {
            try {
              await player.runCommandAsync(`clear ${player.nameTag} ${bloques[itemToSell]} 0 1`);
              selledBlocks++;
            } catch (e) {}
          }
          if (selledBlocks == getBlocks) {
            var monTo = mon[itemToSell] * selledBlocks;
            await over.runCommandAsync(`scoreboard players add ${player.nameTag} money ${monTo}`);
            player.sendMessage(`§2Transacción exitosa§f, se le ha añadido §2${monTo}$ §fa su cuenta bancaria.`);
          } else if (selledBlocks != getBlocks) {
            player.sendMessage("§cNo tienes los suficientes bloques/items como para hacer la transacción.");
            over.runCommandAsync(`give ${player.nameTag} ${bloques[itemToSell]} ${selledBlocks}`);
          }
        }
      });
  }
  #abrirComprarFin(player, idToGet) {
    var value, price: number, name: string, desc, clicked: boolean;
    cosastienda.ide.ids.map((map) => {
      if (map.id == idToGet) {
        value = map.value;

        price = map.price;
        name = map.name;
        desc = map.description;
      }
    });
    const CustomUI = new ui.MessageFormData()
      .title("Confirmación")
      .body(
        `Seguro que quieres comprar ${name}? §rEste item cuesta ${price}$ y tiene la siguiente descripción:\n\n${desc}`
      )
      .button1("Si")
      .button2("No")
      .show(player)
      .then((tt) => {
        if (tt.canceled || tt.selection == 2) {
          this.#abrirComprar(player);
        } else {
          if (tt.selection == 1) {
            clicked = true;
          }
        }
      })
      .finally(() => {
        if (clicked) {
          player.sendMessage(`§2Transacción finalizada. Has comprado ${name} por ${price}$`);
        }
      });
  }
}

const TiendaUI = new ShopUI();

export function tienda() {
  world.events.playerSpawn.subscribe((trigg) => {
    if (trigg.initialSpawn) {
      over.runCommandAsync(
        `replaceitem entity ${trigg.player.name} slot.hotbar 8 compass 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`
      );
    }
  });
  world.events.beforeItemUse.subscribe((trigg) => {
    if (trigg.item.type == compass) {
      const Player = trigg.source;
      trigg.item.nameTag = "§r§9§lTienda";
      trigg.item.setLore([
        "§r§8--",
        "§r§fUsa click derecho para abrir la interfaz en PC",
        "§r§fO deja presionado si estas en movil",
        "§r§fLT (R2) en consolas",
        "§r§f(Tienda creada por carlop3k)",
        "§r§8--",
      ]);
      TiendaUI.abrirOpciones(Player);
    }
  });
}
