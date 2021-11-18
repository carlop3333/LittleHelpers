/*
 *
 */

import {Commands, World} from "mojang-minecraft";

export class gameData {


	getScoreboardNumber(ObjectiveName: string, PlayerName: string) {
		let scoreboard = Commands.run(`scoreboard players list "${PlayerName}"`,World.getDimension("overworld"));
    }

	hasTags(PlayerName: string, Tags:string) {
		let tagslist = Commands.run(`tags "${PlayerName}" list`,World.getDimension("overworld"));
		if (tagslist.search(Tags)) {

		}
	}

}	