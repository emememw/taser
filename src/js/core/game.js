import Globals from "core/globals";

class Game {
	constructor({ viewWidth, viewHeight, scale }) {
		Globals.game = this;
		this.viewWidth = viewWidth || 800;
		this.viewHeight = viewHeight || 600;
		this.scale = scale || 1;
		this._init();
	}

	_init() {
		this.phaser = new global.window.Phaser.Game(
			this.viewWidth,
			this.viewHeight,
			global.window.Phaser.WEBGL,
			global.window.document.querySelector("#content"), {
				preload: () => this.preload(),
				create: () => this._create(),
				update: () => this.update(),
				render: () => this.render(),
			},
			false,
			false
		);
	}

	_create() {
		this.phaser.scale.fullScreenScaleMode = global.window.Phaser.ScaleManager.SHOW_ALL;
		global.window.Phaser.Canvas.setImageRenderingCrisp(this.phaser.canvas);
		this.phaser.renderer.renderSession.roundPixels = true;
		this.phaser.physics.startSystem(global.window.Phaser.ARCADE);
		/*Input.addKeyDelegate("f", 1000, () => {
			Config.toggleFullScreen();
		});*/
		this.start();
	}

	preload() {}

	update() {}

	render() {}

	start() {}

}

export default Game;
