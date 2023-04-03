import { world, Player, ItemStack, Enchantment, MinecraftItemTypes, MinecraftEnchantmentTypes, ItemType } from "@minecraft/server";

const over = world.getDimension("overworld")


type GuiTypeOptions = {}

export type GuiConstructor = {
    gui: {
        [id: string]: {
            type: JSONGuiTypes,
            
            }
    },
    sellids: {
        [id: number]: guiSell
    }
} 

interface guiSell {
    name: string;
    description: string;
    needsMembership: boolean;
    itemsToSell: { 
        item: ItemStack; 
        enchants: Array<Enchantment>; 
        name: string; 
        commands: Array<string> 
    }[];
  }

/**
 * @protected
 */
class JSONGuiTypes {
    protected constructor() {

    }
    /**
     * @description The most flexible gui.
     * @static
     * @memberof JSONGuiTypes
     */
    static readonly modalform: JSONGuiTypes;
    /**
     * @description Just an Yes or No gui.
     * @static
     * @memberof JSONGuiTypes
     */
    static readonly messageform: JSONGuiTypes;
    /**
     * @description A gui with just buttons.
     * @static
     * @memberof JSONGuiTypes
     */
    static readonly actionform: JSONGuiTypes;
}


    /**
     * @class JsonGui (aka EasyGui)
     */
class JsonGui {

    /**
     * @param {GuiConstructor} JSONGui The gui to show the player.
     * @param {Player} playerToShow Player to show the gui.
     * @param {ItemType} triggerWith The item that will show the gui.
     */
    constructor(JSONGui: GuiConstructor, playerToShow: Player, triggerWith: ItemType) {
        const jsgui = JSONGui;
        const player = playerToShow;
    }
    #createUI() {

    }
    #showUI() {

    }
    #endUI(player: Player, id: number) {

    }
}


const guiexample: GuiConstructor = {
    gui: {
       ["guiname1"]: {
            type: JSONGuiTypes.modalform
        }
    },
    sellids: {
        [1]: {
            name: "Example Item",
            description: "An Example Item",
            needsMembership: false,
            itemsToSell: [{ // As much items as you want
                item: new ItemStack(MinecraftItemTypes.goldenPickaxe, 1), 
            enchants: [
                new Enchantment(MinecraftEnchantmentTypes.efficiency, 5),
                new Enchantment(MinecraftEnchantmentTypes.unbreaking, 3),
            ],
            name: "§r§9§lPico Arrasador",
            commands: ["nocom"],
            }]
        }
    }
}