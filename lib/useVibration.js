"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function useVibration(gamepadIndex) {
	var vibrationEffect = "dual-rumble";

	var vibrate = function vibrate(intensity) {
		var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

		var gamepad = navigator.getGamepads()[gamepadIndex];
		if (gamepad) {
			try {
				if (intensity === 0 || duration === 0) {
					gamepad.vibrationActuator.reset();
				} else {
					var effectParams = { duration: duration };
					effectParams.weakMagnitude = intensity;
					effectParams.strongMagnitude = intensity;
					gamepad.vibrationActuator.playEffect(vibrationEffect, effectParams);
				}
			} catch (error) {
				console.error("Vibration failed:", error);
			}
		} else {
			console.warn("No gamepad or vibration actuator found");
		}
	};

	return { vibrate: vibrate };
}

exports.default = useVibration;