import Globals from "core/globals";

class GameMap {
	constructor(id, tiles, tilesize, tilesetImageId, blockingTileIds) {
		this.id = id;
		this.tilesize = tilesize;
		this.tilesetImageId = tilesetImageId;
		this.tiles = tiles;
		this.blockingTileIds = blockingTileIds;
		Globals.game.phaser.cache.addTilemap(id, null, GameMap._convertTilesToCSV(tiles), global.window.Phaser.Tilemap.CSV);
	}

	load() {
		this.mapData = Globals.game.phaser.add.tilemap(this.id, this.tilesize, this.tilesize);
		this.mapData.addTilesetImage(this.tilesetImageId, this.tilesetImageId, this.tilesize, this.tilesize);
		this.layer = this.mapData.createLayer(0);
		this.layer.setScale(Globals.game.scale, Globals.game.scale)
		if (this.blockingTileIds) {
			this.mapData.setCollision(this.blockingTileIds, true, 0);
		}
		this.layer.resizeWorld();
	}

	translateToGridPosition(position) {
		return parseInt((position / Globals.game.scale) / this.tilesize, 10);
	}

	tileAt(gridX, gridY) {
		return this.mapData.getTile(gridX, gridY, 0);
	}

	getTileByIndex(tileIndex) {
		return this.mapData.searchTileIndex(tileIndex);
	}

	createCollisionMap() {
		const collisionMap = [];
		for(let y = 0; y < this.tiles.length; y++) {
			for(let x = 0; x < this.tiles[y].length; x++) {
				if (!collisionMap[y]) {
					collisionMap[y] = [];
				}
				collisionMap[y][x] = this.blockingTileIds.includes(this.tiles[y][x]) ? 1 : 0;
			}
		}
		return collisionMap;
	}

	static _convertTilesToCSV(tiles) {
		let tilesAsCSV = "";
		for (let y = 0; y < tiles.length; y++) {
			for (let x = 0; x < tiles[y].length; x++) {
				if (x > 0) {
					tilesAsCSV += ",";
				}
				tilesAsCSV += tiles[y][x];
			}
			tilesAsCSV += "\n";
		}
		return tilesAsCSV;
	}
}

export default GameMap;
