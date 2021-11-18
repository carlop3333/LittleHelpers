import {Commands, World} from "mojang-minecraft";

/**
 * @description Scoreboard and tags getters
 */
export class gameData {

	/**
	 * 
	 * @param ObjectiveName objective name
	 * @param PlayerName player name
	 * @returns true (or false if objective doesnt exists)
	 */
	static getScoreboardNumber(ObjectiveName: string, PlayerName: string) {
		let scoreboard = Commands.run(`scoreboard players list "${PlayerName}"`,World.getDimension("overworld"));
    }

	/**
	 * 
	 * @param PlayerName player name
	 * @param Tags  tags that the player has
	 * @returns true (or false if tag doesnt exists ) 
	 */
	static hasTags(PlayerName: string, Tags:string) {
		let tagslist = Commands.run(`tags "${PlayerName}" list`,World.getDimension("overworld"));
		if (tagslist.search(Tags)) { return true; } else { throw false; }
	}

}	