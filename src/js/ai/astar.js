import EasyStar from "easystarjs";

class Astar {
	constructor(collisionMap) {
		this.instance = new EasyStar.js();	
		this.instance.setGrid(collisionMap);
		this.instance.setAcceptableTiles([0]);
		this.instance.enableSync();
	}

	calculate(sourceX, sourceY, destX, destY) {
		let result = [];
		this.instance.findPath(sourceX, sourceY, destX, destY, (path) => {
			result = path;
		});
		this.instance.calculate();
		if (!result) {
			result = [];
		}
		if (result.length > 0) {
			result.shift();
		}
		return result;
	}
}

export default Astar;
