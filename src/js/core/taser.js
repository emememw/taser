import Game from "core/game";
import Input from "input/input";
import Globals from "core/globals";
import Display from "display/display";
import Entity from "entity/entity";
import GameMap from "gamemap/gamemap";
import Camera from "camera/camera";
import Astar from "ai/astar";

const Taser = {
	Astar,
	Camera,
	Display,
	Entity,
	Game,
	GameMap,
	Input,
	game: () => Globals.game,
};

export default Taser;
