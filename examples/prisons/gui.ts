// PerfectBAH 0.0.1-playground -- carlop3k
import { world, MinecraftItemTypes, Player, ItemStack, Enchantment, ItemEnchantsComponent } from "@minecraft/server";
import * as ui from "@minecraft/server-ui";
import * as cosastienda from "./cosastienda";
import * as guis from "./tienda";

const over = world.getDimension("overworld");
const compass = MinecraftItemTypes.compass;

class ShopUI {
  gui(player: Player) {
    //@ts-expect-error
    guis.gui.show(player).then(async (tt) => {
      switch (tt.selection) {
        case 0:
          //@ts-expect-error
          guis.warps.show(player).then((tt) => {
            switch (tt.selection) {
              case 0:
                player.sendMessage(`§8Enviando a mina!`);
                over.runCommandAsync(`tp ${player.name} -21 -60 -2`);
                break;
              case 1:
                var niveles = world.scoreboard.getObjective("levels").getScore(player.scoreboard);
                if (niveles >= 1) {
                  player.sendMessage(`§eEnviando a mina de piedra!`);
                  over.runCommandAsync(`tp ${player.name} -60.51 -38.00 -169.37`);
                } else {
                  player.sendMessage(
                    `§4Lo siento, no cumples los requisitos para entrar a la mina de piedra (Necesitas ser nivel 1)`
                  );
                }
                break;
            }
          });
          break;
        case 1:
          this.#abrirOpciones(player);
          break;
        case 2:
          await player.sendMessage(
            "--Creditos--\n- carlop3k: Basicamente todo: construcciones, sistemas, tienda, etc.\n  ----"
          );
          break;
      }
    });
  }

  #abrirOpciones(player: Player) {
    //@ts-expect-error
    guis.cov.show(player).then((tt) => {
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
  #abrirComprar(player: Player) {
    //@ts-expect-error
    guis.sui.show(player).then((tt) => {
      switch (tt.selection) {
        case 0:
          this.#abrirComprarEqui(player);
          break;
        case 1:
          this.#abrirComprarRandom(player);
          break;
        case 2:
          this.#abrirComprarPots(player);
          break;
        case 3:
          this.#abrirComprarFin(player, 24);
          break;
      }
    });
  }
  #abrirComprarEqui(player: Player) {
    //@ts-expect-error
    guis.sui1.show(player).then((ttt) => {
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
  #abrirComprarEquipamiento(player: Player) {
    //@ts-expect-error
    guis.suiequips.show(player).then((tt) => {
      if (tt.canceled) {
        this.#abrirComprar(player);
      } else {
        switch (tt.selection) {
          case 0:
            this.#abrirComprarFin(player, 5);
            break;
          case 1:
            this.#abrirComprarFin(player, 6);
            break;
          case 2:
            this.#abrirComprarFin(player, 7);
            break;
          case 3:
            this.#abrirComprarFin(player, 8);
            break;
          case 4:
            this.#abrirComprarFin(player, 9);
            break;
        }
      }
    });
  }
  #abrirComprarKits(player: Player) {
    //@ts-expect-error
    guis.suikits.show(player).then((tt) => {
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
          case 2:
            this.#abrirComprarFin(player, 3);
            break;
          case 3:
            this.#abrirComprarFin(player, 4);
            break;
        }
      }
    });
  }
  #abrirComprarRandom(player: Player) {
    //@ts-expect-error
    guis.rando.show(player).then((tt) => {
      if (tt.canceled) {
        this.#abrirComprar(player);
      } else {
        switch (tt.selection) {
          case 0:
            this.#abrirComprarFin(player, 25);
            break;
          case 1:
            this.#abrirComprarFin(player, 10);
            break;
          case 2:
            this.#abrirComprarFin(player, 11);
            break;
          case 3:
            this.#abrirComprarFin(player, 12);
            break;
          case 4:
            this.#abrirComprarFin(player, 13);
            break;
          case 5:
            this.#abrirComprarFin(player, 14);
            break;
          case 6:
            this.#abrirComprarFin(player, 15);
            break;
        }
      }
    });
  }

  #abrirComprarPots(player: Player) {
    //@ts-expect-error
    guis.pots.show(player).then((tt) => {
      if (tt.canceled) {
        this.#abrirComprar(player);
      } else {
        switch (tt.selection) {
          case 0:
            this.#abrirComprarFin(player, 16);
            break;
          case 1:
            this.#abrirComprarFin(player, 17);
            break;
          case 2:
            this.#abrirComprarFin(player, 18);
            break;
          case 3:
            this.#abrirComprarFin(player, 19);
            break;
          case 4:
            this.#abrirComprarFin(player, 20);
            break;
          case 5:
            this.#abrirComprarFin(player, 21);
            break;
          case 6:
            this.#abrirComprarFin(player, 22);
            break;
          case 7:
            this.#abrirComprarFin(player, 23);
            break;
        }
      }
    });
  }

  #abrirVender(player: Player) {
    var getBlocks = 0;
    var itemToSell = 0;
    var selledBlocks = 0;
    var isSellingAll = false;
    var canceled = true;

    guis.tui
      //@ts-expect-error
      .show(player)
      .then((tt) => {
        //@ts-expect-error
        getBlocks = parseInt(tt.formValues[1]);
        //@ts-expect-error
        itemToSell = parseInt(tt.formValues[0]);
        //@ts-expect-error
        isSellingAll = tt.formValues[2];
        canceled = tt.canceled; // fix jst ic
      })
      .finally(async () => {
        if (isSellingAll && !canceled) {
          for (var i = 0; i <= 256; i++) {
            try {
              await player.runCommandAsync(`clear ${player.nameTag} ${guis.bloques[itemToSell]} 0 1`);
              selledBlocks++;
            } catch (e) {
              break;
            }
          }
          var monTo = guis.mon[itemToSell] * selledBlocks;
          await over.runCommandAsync(`scoreboard players add ${player.nameTag} money ${monTo}`);
          player.sendMessage(`§2Transacción exitosa§f, se le ha añadido §2${monTo}$ §fa su cuenta bancaria.`);
        } else if (!canceled) {
          for (var i = 0; i <= getBlocks - 1; i++) {
            try {
              await player.runCommandAsync(`clear ${player.nameTag} ${guis.bloques[itemToSell]} 0 1`);
              selledBlocks++;
            } catch (e) {}
          }
          if (selledBlocks == getBlocks) {
            var monTo = guis.mon[itemToSell] * selledBlocks;
            await over.runCommandAsync(`scoreboard players add ${player.nameTag} money ${monTo}`);
            player.sendMessage(`§2Transacción exitosa§f, se le ha añadido §2${monTo}$ §fa su cuenta bancaria.`);
          } else if (selledBlocks != getBlocks) {
            player.sendMessage("§cNo tienes los suficientes bloques/items como para hacer la transacción.");
            over.runCommandAsync(`give ${player.nameTag} ${guis.bloques[itemToSell]} ${selledBlocks}`);
          }
        }
      });
  }
  #abrirComprarFin(player: Player, idToGet: number) {
    var price: number, name: string, desc: string, clicked: boolean, items: cosastienda.sellConstructor, memb: boolean;
    Object.entries(cosastienda.ide).flatMap((map) => {
      if (parseInt(map[0]) == idToGet) {
        price = map[1].price;
        name = map[1].name;
        desc = map[1].description;
        items = map[1].sell;
        memb = map[1].checkforMemb;
      } else if (map[1] == undefined) {
        throw new SyntaxError("Id does not exist.");
      }
    });
    var enchDesc = [];
    const CustomUI = new ui.MessageFormData()
      .title("Confirmación")
      .body(
        //@ts-expect-error
        `Seguro que quieres comprar ${name}§r? §rEste item cuesta ${price}$ y tiene la siguiente descripción:\n\n${desc}`
      )
      .button1("Si")
      .button2("No")
      //@ts-expect-error
      .show(player)
      .then((tt) => {
        if (tt.canceled || tt.selection == 0) {
          this.#abrirComprar(player);
        } else {
          if (tt.selection == 1) {
            clicked = true;
          }
        }
      })
      .finally(async () => {
        if (clicked) {
          var scores = world.scoreboard.getObjective("money").getScore(player.scoreboard);
          if (memb && scores >= price) {
            if (!player.hasTag("member")) {
              player.sendMessage(`§4Lo siento, no tienes la membresía para comprar ${name}.`);
            } else {
              await over.runCommandAsync(`scoreboard players remove ${player.name} money ${price}`);
              var fixeditems: Array<ItemStack> = [];
              var comps: ItemEnchantsComponent, enchcomps;
              for (var item of items.items) {
                if (item.name != "noname") {
                  item.item.nameTag = item.name;
                }
                if (item.item.hasComponent("minecraft:enchantments")) {
                  comps = item.item.getComponent("minecraft:enchantments") as ItemEnchantsComponent;
                  enchcomps = comps.enchantments;
                  for (var enchant of item.enchants) {
                    enchcomps.addEnchantment(enchant);
                    comps.enchantments = enchcomps;
                  }
                }
                if (item.commands[0] != "nocom") {
                  for (var command of item.commands) {
                    player.runCommandAsync(`${command}`);
                  }
                }
                fixeditems.push(item.item);
              }
              for (var fixeditem of fixeditems) {
                over.spawnItem(fixeditem, player.location);
              }
              player.sendMessage(`§2Transacción finalizada. Has comprado ${name}§r.`);
            }
          } else if (!memb && scores >= price) {
            await over.runCommandAsync(`scoreboard players remove ${player.name} money ${price}`);
            var fixeditems: Array<ItemStack> = [];
            var comps: ItemEnchantsComponent, enchcomps;
            for (var item of items.items) {
              if (item.name != "noname") {
                item.item.nameTag = item.name;
              }
              if (item.item.hasComponent("minecraft:enchantments")) {
                comps = item.item.getComponent("minecraft:enchantments") as ItemEnchantsComponent;
                enchcomps = comps.enchantments;
                for (var enchant of item.enchants) {
                  enchcomps.addEnchantment(enchant);
                  comps.enchantments = enchcomps;
                }
              }
              if (item.commands[0] != "nocom") {
                for (var command of item.commands) {
                  player.runCommandAsync(`${command}`);
                }
              }
              fixeditems.push(item.item);
            }
            for (var fixeditem of fixeditems) {
              over.spawnItem(fixeditem, player.location);
            }
            player.sendMessage(`§2Transacción finalizada. Has comprado ${name}§r§2 por ${price}$.`);
          } else if (scores <= price) {
            if (!player.hasTag("member") && memb) {
              player.sendMessage(`§4Lo siento, no tienes la membresia para comprar ${name}.`);
            } else {
              player.sendMessage(`§4Lo siento, no tienes el suficiente dinero para comprar ${name}.`);
            }
          }
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
      over.runCommandAsync(`replaceitem entity ${trigg.player.name} slot.hotbar 7 wooden_shovel 1 0`);
      trigg.player.sendMessage(
        `Bienvenido a Mina y Compra ULTRAVITAMINADO!\nLos objetivos son los siguientes:\n- Empieza minando en la mina de tierra.\n- Cuando tengas los suficientes minerales vendelos en la brujula (Interfaz)\n- Cuando llegues a Nivel 1, puedes ir a la mina de piedra y conseguir mas experiencia\n- Compra cosas para chetarte y pelear en la Mina de Piedra!\n`
      );
    }
  });
  world.events.beforeItemUse.subscribe((trigg) => {
    if (trigg.item.type == compass) {
      const Player = trigg.source;
      trigg.item.nameTag = "§r§9§lInterfaz";
      trigg.item.setLore([
        "§r§8--",
        "§r§fUsa click derecho para abrir la interfaz en PC",
        "§r§fO deja presionado si estas en movil",
        "§r§fLT (R2) en consolas",
        "§r§f(Interfaz creada por carlop3k)",
        "§r§8--",
      ]);
      //@ts-expect-error
      TiendaUI.gui(Player);
    }
  });
}
