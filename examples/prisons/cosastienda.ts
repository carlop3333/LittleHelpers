// PerfectBAH 0.0.1-playground -- carlop3k
import { ItemStack, MinecraftItemTypes, Enchantment, MinecraftEnchantmentTypes } from "@minecraft/server";

interface kits {
  item: ItemStack;
  enchants: Array<Enchantment>;
}
interface kitConstructor {
  [id: number]: kits;
}

interface item {
  item: ItemStack;
  howMuch: number;
}

interface itemConstructor {
  [id: number]: item;
}

interface idConstructor {
  price: number;
  value: kitConstructor;
  name: string;
  description: string;
}

const k1enchants1: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.fireAspect, 1),
  new Enchantment(MinecraftEnchantmentTypes.knockback, 1),
];
const k1enchants2: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.protection, 2),
  new Enchantment(MinecraftEnchantmentTypes.unbreaking, 1),
];
const k1enchants3: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.protection, 2),
  new Enchantment(MinecraftEnchantmentTypes.featherFalling, 1),
];

const kit1: kitConstructor = {};
/*{ item: new ItemStack(MinecraftItemTypes.ironSword, 1), enchants: k1enchants1 },
    { item: new ItemStack(MinecraftItemTypes.ironHelmet, 1), enchants: k1enchants2 },
    { item: new ItemStack(MinecraftItemTypes.ironChestplate, 1), enchants: k1enchants2 },
    { item: new ItemStack(MinecraftItemTypes.ironLeggings, 1), enchants: k1enchants2 },
    { item: new ItemStack(MinecraftItemTypes.ironBoots, 1), enchants: k1enchants3 },*/

const kit2: Array<any> = [];

export const ide: { [id: number]: idConstructor } = {
  [1]: {
    price: 3600,
    value: kit1,
    name: "Kit Basico",
    description: "Un kit que tiene solo tiene espada de hierro y armadura de hierro.",
  },
  [2]: {
    price: 4500,
    value: kit2,
    name: "Kit Promedio",
    description:
      'Este kit "promedio" no es para gente promedio: todas las herramientas son de oro, asi que ten cuidado!.',
  },
};
