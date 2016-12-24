import Globals from "core/globals";
import Alertify from "alertify.js";

const Display = {};

Display.toggleFullScreen = function toggleFullScreen() {
	if (Globals.game.phaser.scale.isFullScreen) {
		Globals.game.phaser.scale.stopFullScreen();
	} else {
		Alertify.confirm("Confirm to enter Full-Screen Mode", () =>
			Globals.game.phaser.scale.startFullScreen(false)
		);
	}
};

export default Display;
