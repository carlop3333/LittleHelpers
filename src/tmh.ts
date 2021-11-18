/*
 *
 */

import {Commnands, World} from "mojang-minecraft";

export class ScoreboardData {


	getScoreboardNumber(ObjectiveName: string, PlayerName: string) {
		let scoreboard = Commnands.run(`scoreboard players list "${PlayerName}"`,World.getDimension("overworld"))
    }
}
