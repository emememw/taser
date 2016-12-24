const Input = {};

Input.keys = [];

Input.init = function init() {
	global.window.onkeyup = (event) => this.onKeyUp(event);
	global.window.onkeydown = (event) => this.onKeyDown(event);
};

Input.onKeyDown = function onKeyDown(event) {
	if (this.keys[event.keyCode] === undefined) {
		this.keys[event.keyCode] = true;
	}
	if (event.keyCode !== this.keyCode("f5")) {
		event.preventDefault();
	}
};

Input.onKeyUp = function onKeyUp(event) {
	this.keys[event.keyCode] = undefined;
	if (event.keyCode !== this.keyCode("f5")) {
		event.preventDefault();
	}
};

Input.keyPressed = function keyPressed(key) {
	return !!this.keys[this.keyCode(key)];
};

Input.keyCode = function keyCode(key) {
	return global.window.Phaser.KeyCode[key.toUpperCase()];
};

Input.resetKey = function resetKey(key) {
	if (this.keys[this.keyCode(key)] !== undefined) {
		this.keys[this.keyCode(key)] = false;
	}
};

Input.resetAll = function resetAll() {
	for (const keyCode in this.keys) {
		if (this.keys.hasOwnProperty(keyCode)) {
			this.keys[keyCode] = false;
		}
	}
};

export default Input;
