/*
 *
 */

import {Commands, World} from "mojang-minecraft";

export class gameData {


	getScoreboardNumber(ObjectiveName: string, PlayerName: string) {
		let scoreboard = Commands.run(`scoreboard players list "${PlayerName}"`,World.getDimension("overworld"));
    }

	/**
	 * 
	 * @param PlayerName player name
	 * @param Tags  tags that the player has
	 * @returns true (or false if tag doesnt exists ) 
	 */
	hasTags(PlayerName: string, Tags:string) {
		let tagslist = Commands.run(`tags "${PlayerName}" list`,World.getDimension("overworld"));
		if (tagslist.search(Tags)) { return true; } else {throw false;}
	}

}	