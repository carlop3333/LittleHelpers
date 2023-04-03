// PerfectBAH 0.0.1-playground -- carlop3k
import { ItemStack, MinecraftItemTypes, Enchantment, MinecraftEnchantmentTypes } from "@minecraft/server";

export interface sellConstructor {
  items: { item: ItemStack; enchants: Array<Enchantment>; name: string; commands: Array<string> }[];
}

interface idConstructor {
  price: number;
  sell: sellConstructor;
  name: string;
  description: string;
  checkforMemb: boolean;
}
//ONLY FOR A SINGLE ITEM
const noench: Array<Enchantment> = [];
//KITS
const k1enchants2: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.protection, 1),
  new Enchantment(MinecraftEnchantmentTypes.unbreaking, 1),
];
const kit1: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.ironSword, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.fireAspect),
        new Enchantment(MinecraftEnchantmentTypes.knockback, 1),
      ],
      name: "§r§iEspada Basica",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironHelmet, 1),
      enchants: k1enchants2,
      name: "§r§iCasco Basico",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironChestplate, 1),
      enchants: k1enchants2,
      name: "§r§iPechera basica",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironLeggings, 1),
      enchants: k1enchants2,
      name: "§r§iPantalones basicos",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironBoots, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.protection, 2),
        new Enchantment(MinecraftEnchantmentTypes.featherFalling, 1),
      ],
      name: "§r§iBotas basicas",
      commands: ["nocom"],
    },
  ],
};

const k2enchant: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.unbreaking, 3),
  new Enchantment(MinecraftEnchantmentTypes.fireProtection),
];
const kit2: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.goldenSword, 1),
      enchants: [new Enchantment(MinecraftEnchantmentTypes.sharpness, 2)],
      name: "§r§6Espada no tan basica",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.goldenHelmet, 1),
      enchants: k2enchant,
      name: "§r§6Casco no tan basico",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.goldenChestplate, 1),
      enchants: k2enchant,
      name: "§r§6Pechera no tan basica",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.goldenLeggings, 1),
      enchants: k2enchant,
      name: "§r§6Pantalones no tan basicos",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.goldenBoots, 1),
      enchants: [new Enchantment(MinecraftEnchantmentTypes.blastProtection)],
      name: "§r§6Botas no tan basicas",
      commands: ["nocom"],
    },
  ],
};

const k3enchant: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.blastProtection, 3),
  new Enchantment(MinecraftEnchantmentTypes.unbreaking, 2),
];

const kit3: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.diamondSword, 1),
      enchants: [new Enchantment(MinecraftEnchantmentTypes.knockback, 2)],
      name: "§r§cEspada PRO",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironHelmet, 1),
      enchants: k3enchant,
      name: "§r§cCasco PRO",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.diamondChestplate, 1),
      enchants: k3enchant,
      name: "§r§cPechera PRO",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironLeggings, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.swiftSneak, 2),
        new Enchantment(MinecraftEnchantmentTypes.unbreaking),
      ],
      name: "§r§cPantalones PRO",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.diamondBoots, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.mending),
        new Enchantment(MinecraftEnchantmentTypes.protection, 4),
      ],
      name: "§r§cBotas PRO",
      commands: ["nocom"],
    },
  ],
};

const k4enchant2: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.protection, 2),
  new Enchantment(MinecraftEnchantmentTypes.unbreaking, 2),
];
const k4enchant3: Array<Enchantment> = [
  new Enchantment(MinecraftEnchantmentTypes.mending),
  new Enchantment(MinecraftEnchantmentTypes.fireProtection, 3),
];
const kit4: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.diamondSword, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.sharpness, 3),
        new Enchantment(MinecraftEnchantmentTypes.unbreaking, 3),
      ],
      name: "§r§g§lEspada Express",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironHelmet, 1),
      enchants: k4enchant2,
      name: "§r§g§lCasco Express",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.diamondChestplate, 1),
      enchants: k4enchant2,
      name: "§r§g§lPechera Express",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.ironLeggings, 1),
      enchants: k4enchant3,
      name: "§r§g§lPantalones Express",
      commands: ["nocom"],
    },
    {
      item: new ItemStack(MinecraftItemTypes.diamondBoots, 1),
      enchants: k4enchant3,
      name: "§r§g§lBotas Express",
      commands: ["nocom"],
    },
  ],
};

//EQUIPS
const equip1: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.netheriteSword, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.sharpness, 2),
        new Enchantment(MinecraftEnchantmentTypes.fireAspect, 2),
        new Enchantment(MinecraftEnchantmentTypes.unbreaking, 4),
      ],
      name: "§r§b§lEspada OP",
      commands: ["nocom"],
    },
  ],
};

const equip2: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.ironPickaxe, 1),
      enchants: [new Enchantment(MinecraftEnchantmentTypes.efficiency, 5)],
      name: "§r§d§lPico SuperEficiente",
      commands: ["nocom"],
    },
  ],
};

const equip3: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.ironSword, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.sharpness, 5),
        new Enchantment(MinecraftEnchantmentTypes.mending),
      ],
      name: "§r§c§lEspada Afiladisima",
      commands: ["nocom"],
    },
  ],
};

const equip4: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.goldenPickaxe, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.efficiency, 5),
        new Enchantment(MinecraftEnchantmentTypes.unbreaking, 3),
      ],
      name: "§r§9§lPico Arrasador",
      commands: ["nocom"],
    },
  ],
};

const equip5: sellConstructor = {
  items: [
    {
      item: new ItemStack(MinecraftItemTypes.diamondHelmet, 1),
      enchants: [
        new Enchantment(MinecraftEnchantmentTypes.protection, 4),
        new Enchantment(MinecraftEnchantmentTypes.unbreaking, 3),
        new Enchantment(MinecraftEnchantmentTypes.mending),
      ],
      name: "§r§6§lCasco Inmortal",
      commands: ["nocom"],
    },
  ],
};

export const ide: { [id: number]: idConstructor } = {
  // KITS
  [1]: {
    price: 3600,
    sell: kit1,
    name: "§iKit Basico",
    description:
      "Un kit que tiene solo tiene espada de hierro y armadura de hierro.\n\nIncluye:\n-Espada con Aspecto Igneo y Empuje I\n-Protección I con Caida de Pluma I ",
    checkforMemb: false,
  },
  [2]: {
    price: 4500,
    sell: kit2,
    name: "§6Kit Promedio",
    description:
      'Este kit "promedio" no es para gente promedio: todas las herramientas son de oro, asi que ten cuidado!.\n\nIncluye:\n-Espada con Filo II, Irrompibilidad III\n-Protección al Fuego y Protección a Explosiones I\n-5 manzanas doradas.',
    checkforMemb: false,
  },
  [3]: {
    price: 6500,
    sell: kit3,
    name: "§cKit PRO",
    description:
      "Este kit es solo para personas que sean de las mas profesionales.\n\nIncluye:\n-Espada conEmpuje 2\n-Protección a Explosiones III y Irrompibilidad\n-Agachado rapido 2 y Irrompibilidad\n-Reparación y Protección 4",
    checkforMemb: false,
  },
  [4]: {
    price: 10000,
    sell: kit4,
    name: "§r§g§lKit Express",
    description:
      "El kit de los kits. \nSolo disponible para la membresia §6§lExpress§r.\n\nIncluye:\n-Espada con Filo 3 y Irrompibilidad 3\n-Casco y pechera con Protección 2 y Protección 2\n-Pantalones y botas con Reparación y Protección al fuego 3",
    checkforMemb: true,
  },
  // EQUIPS
  [5]: {
    price: 5000,
    sell: equip1,
    name: "§r§b§lEspada OP",
    description: "La espada mas OP de todas (Si no cuentas la espada afilada, claro).",
    checkforMemb: false,
  },
  [6]: {
    price: 3500,
    sell: equip2,
    name: "§r§d§lPico SuperEficiente",
    description: "Un pico con la eficiencia mas fuerte de todas.",
    checkforMemb: false,
  },
  [7]: {
    price: 4500,
    sell: equip3,
    name: "§r§c§lEspada Afiladisima",
    description: "Una espada que corta hasta la Bedrock.",
    checkforMemb: false,
  },
  [8]: {
    price: 2500,
    sell: equip4,
    name: "§r§9§lPico Arrasador",
    description: "Buena suerte echandole el truco a este pico de oro.",
    checkforMemb: false,
  },
  [9]: {
    price: 7000,
    sell: equip5,
    name: "§r§6§lCasco Inmortal",
    description: "Tu crees que este casco te va a servir para algo? Sigue soñando. (Solo para Membresia §6§lExpress§r)",
    checkforMemb: true,
  },
  [10]: {
    price: 450,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.enderPearl, 3),
          enchants: noench,
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "3 Perlas de ender",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [11]: {
    price: 300,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.spyglass, 1),
          enchants: noench,
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "Telescopio",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [12]: {
    price: 150,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.cookedBeef, 10),
          enchants: noench,
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "10 de Carne Cocinada",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [13]: {
    price: 400,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.flintAndSteel, 1),
          enchants: noench,
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "Mechero",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [14]: {
    price: 800,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.experienceBottle, 15),
          enchants: noench,
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "15 botellas de experiencia",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [15]: {
    price: 1500,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.shulkerShell, 1),
          enchants: noench,
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "1 caparazón de shulker",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [16]: {
    price: 1200,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.wood, 1),
          enchants: noench,
          name: "noname",
          commands: ["clear @s wood 0 1", "give @s potion 1 13"], //Limitaciones de mierda
        },
      ],
    },
    name: "Poción de Resistencia al fuego",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [17]: {
    price: 1500,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.wood, 1),
          enchants: noench,
          name: "noname",
          commands: ["clear @s wood 0 1", "give @s potion 1 28"],
        },
      ],
    },
    name: "Poción de la Tortuga Maestra",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [18]: {
    price: 2600,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.wood, 1),
          enchants: noench,
          name: "noname",
          commands: ["clear @s wood 0 1", "give @s splash_potion 1 42"],
        },
      ],
    },
    name: "Poción arrojadiza de Lentitud Extrema",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [19]: {
    price: 2600,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.wood, 1),
          enchants: noench,
          name: "noname",
          commands: ["clear @s wood 0 1", "give @s splash_potion 1 30"],
        },
      ],
    },
    name: "Poción arrojadiza de Regeneración 2",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [20]: {
    price: 5000,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.enchantedBook, 1),
          enchants: [new Enchantment(MinecraftEnchantmentTypes.fortune, 3)],
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "Fortuna 3",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [21]: {
    price: 6500,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.enchantedBook, 1),
          enchants: [new Enchantment(MinecraftEnchantmentTypes.efficiency, 5)],
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "Eficiencia 5",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [22]: {
    price: 5500,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.enchantedBook, 1),
          enchants: [new Enchantment(MinecraftEnchantmentTypes.unbreaking, 4)],
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "Irrompibilidad 4",
    description: "Sin descripción.",
    checkforMemb: false,
  },
  [23]: {
    price: 5500,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.enchantedBook, 1),
          enchants: [new Enchantment(MinecraftEnchantmentTypes.mending)],
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "Reparación",
    description: "Sin descripción. (Solo disponible con §6§lAcceso Express§r)",
    checkforMemb: true,
  },
  [24]: {
    price: 18000,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.enchantedBook, 1),
          enchants: [
            new Enchantment(MinecraftEnchantmentTypes.mending),
            new Enchantment(MinecraftEnchantmentTypes.unbreaking, 3),
          ],
          name: "noname",
          commands: ["tag @s add member", 'tellraw @s {"rawtext":[{"text":"§2Bienvenido a la membresia!"}]}'],
        },
      ],
    },
    name: "§6§lAcceso Express",
    description:
      "El §6§lAcceso Express§r es la membresia que todo el mundo deberia tener, el mejor acceso a tu vida....\n\n*Incluye libro de Reparación con Irrompibilidad 3\n*No diferencia entre las personas que tienen o no rango, el sistema no se hace responsable de perdidas forzadas.",
    checkforMemb: false,
  },
  [25]: {
    price: 50,
    sell: {
      items: [
        {
          item: new ItemStack(MinecraftItemTypes.wood, 10),
          enchants: noench,
          name: "noname",
          commands: ["nocom"],
        },
      ],
    },
    name: "10 de madera",
    description: "Sin descripción.",
    checkforMemb: false,
  },
};
