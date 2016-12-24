import Globals from "core/globals";

class Entity {
	constructor({ x, y, spritesheet, animations }) {
		this.x = x;
		this.y = y;
		this.sprite = Globals.game.phaser.add.sprite(x, y, spritesheet);
		//this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.scale.setTo(Globals.game.scale, Globals.game.scale);
		Globals.game.phaser.physics.arcade.enable(this.sprite);
		this.sprite.body.immovable = true;
		if (animations) {
			animations.forEach((animation) => this.sprite.animations.add(animation.name, animation.frames, animation.frameRate, animation.loop));
			this.sprite.animations.play("default");
		}
		this.sprite.body.x = this.x;
		this.sprite.body.y = this.y;
	}

	move(direction, validateCallback, velocity = 1) {
		let newX = this.x;	
		let newY = this.y;
		if (direction === "right") {
			newX += velocity;
		} else if (direction === "left") {
			newX -= velocity;
		} else if (direction === "down") {
			newY += velocity;
		} else if (direction === "up") {
			newY -= velocity;
		}
		if (!validateCallback || validateCallback(newX, newY, this)) {
			this.x = newX;	
			this.y = newY;
			this.sprite.body.x = this.x;
			this.sprite.body.y = this.y;
		}
	}

	moveTo(x, y, validateCallback) {
		if (!validateCallback || validateCallback(x, y, this)) {
			this.x = x;
			this.y = y;
			this.sprite.body.x = this.x;
			this.sprite.body.y = this.y;
		}
	}

	destroy() {
		this.sprite.destroy();
	}
}

export default Entity;
