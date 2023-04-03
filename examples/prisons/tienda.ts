// PerfectBAH 0.0.1-playground -- carlop3k
import { world, MinecraftItemTypes, Player, ItemStack, Enchantment, ItemEnchantsComponent } from "@minecraft/server";
import * as ui from "@minecraft/server-ui";
export const bloqvender = [
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
export const mon = [100, 80, 20, 38, 25, 15, 10, 5, 1, 2, 1, 1];
export const bloques = [
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

export const warps = new ui.ActionFormData()
  .title("Warps")
  .body("Selecciona a que warp ir")
  .button("Mina de tierra")
  .button("Mina de piedra (Nivel 1)");
export const gui = new ui.ActionFormData()
  .title("Opciones")
  .body("Selecciona:")
  .button("Warps", "textures/blocks/portal_placeholder")
  .button("Tienda", "textures/items/emerald")
  .button("Creditos", "textures/items/record_5");
export const tui = new ui.ModalFormData()
  .title("Vender")
  .dropdown("Selecciona los items a vender", bloqvender, 7)
  .slider("Selecciona cuanto quieres vender:", 4, 64, 4, 32)
  .toggle("Vender todo el mineral?", false);
export const cov = new ui.MessageFormData()
  .title("Compra/Venta")
  .body("Selecciona la accion a hacer")
  .button1("Vender")
  .button2("Comprar");
export const sui = new ui.ActionFormData()
  .title("Comprar")
  .body("Selecciona en que categoria vas a comprar:")
  .button("§b§lEquipamiento y kits", "textures/items/diamond_sword")
  .button("§g§lRandom y otros", "textures/items/quiver")
  .button("§c§lPociones y encantamientos", "textures/items/potion_bottle_lingering_heal")
  .button("§6§lAcceso Express", "textures/items/light_block_15");

// SECCION DE EQUIPAMIENTOS
export const sui1 = new ui.MessageFormData()
  .title("§b§lEquipamiento y kits")
  .body("Selecciona que quieres comprar:")
  .button1("Kits")
  .button2("Equipamientos");
export const suikits = new ui.ActionFormData()
  .title("Kits")
  .body("Selecciona los kits a comprar:")
  .button("§iKit Basico", "textures/items/iron_sword")
  .button("§6Kit Promedio", "textures/items/gold_sword")
  .button("§cKit PRO", "textures/items/diamond_sword")
  .button("§6§lKit Express", "textures/items/diamond_helmet");
export const suiequips = new ui.ActionFormData()
  .title("Equipamientos/Herramientas")
  .body("Selecciona uno de los equipamientos a comprar:")
  .button("§r§b§lEspada OP", "textures/items/netherite_sword")
  .button("§r§d§lPico SuperEficiente", "textures/items/iron_pickaxe")
  .button("§r§c§lEspada Afiladisima", "textures/items/iron_sword")
  .button("§r§9§lPico Arrasador", "textures/items/gold_pickaxe")
  .button("§r§6§lCasco Inmortal", "textures/items/diamond_helmet");

// SECCION DE COSAS RANDOM
export const rando = new ui.ActionFormData()
  .title("§g§lRandom y otros")
  .body("Selecciona el item a comprar")
  .button("Madera", "textures/blocks/log_oak")
  .button("Perlas de ender", "textures/items/ender_pearl")
  .button("Telescopio", "textures/items/spyglass")
  .button("Carne cocinada", "textures/items/beef_cooked")
  .button("Mechero", "textures/items/flint_and_steel")
  .button("Botella de XP", "textures/items/experience_bottle")
  .button("Caparazón de shulker", "textures/items/shulker_shell");
// SECCION DE POCIONES Y ENCANTAMIENTOS
export const pots = new ui.ActionFormData()
  .title("§c§lPociones y encantamientos")
  .body("Selecciona el item a comprar:")
  .button("Poción de Resistencia al Fuego", "textures/items/potion_bottle_fireResistance")
  .button("Poción de la Tortuga Maestra", "textures/items/potion_bottle_turtleMaster")
  .button("Poción arrojadiza de Lentitud Extrema", "textures/items/potion_bottle_splash_moveSlowdown")
  .button("Poción arrojadiza de Regeneración II", "textures/items/potion_bottle_splash_regeneration")
  .button("Fortuna 3", "textures/items/book_enchanted")
  .button("Eficiencia 5", "textures/items/book_enchanted")
  .button("Irrompibilidad 4", "textures/items/book_enchanted")
  .button("Reparación", "textures/items/book_enchanted");
