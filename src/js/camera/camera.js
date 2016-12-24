import Globals from "core/globals";

const Camera = {};

Camera.follow = function follow(entity) {
	Globals.game.phaser.camera.reset();
	Globals.game.phaser.camera.follow(entity.sprite, global.window.Phaser.Camera.STYLE_TOPDOWN, 0.1, 0.1);
};

Camera.get = function get() {
	return Globals.game.phaser.camera;
};

Camera.fade = function fade(callback, duration, color = 0x000000) {
	Globals.game.phaser.camera.onFadeComplete.removeAll();
	if (callback) {
		Globals.game.phaser.camera.onFadeComplete.add(() => callback());
	}
	Globals.game.phaser.camera.fade(color, duration, true);
};

Camera.flash = function flash(callback, duration, color = 0x000000) {
	Globals.game.phaser.camera.onFlashComplete.removeAll();
	if (callback) {
		Globals.game.phaser.camera.onFlashComplete.add(() => callback());
	}
	Globals.game.phaser.camera.flash(color, duration, true);
};

Camera.shake = function shake(callback, duration, intensity = 0.05) {
	Globals.game.phaser.camera.onShakeComplete.removeAll();
	if (callback) {
		Globals.game.phaser.camera.onShakeComplete.add(() => callback());
	}
	Globals.game.phaser.camera.shake(intensity, duration, true);
};

Camera.resetEffects = function resetEffects() {
	Globals.game.phaser.camera.resetFX();
};

export default Camera;
