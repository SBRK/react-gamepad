function useVibration(_gamepadIndex) {
	const vibrationEffect = "dual-rumble";
    const gamepadIndex = (!_gamepadIndex || _gamepadIndex < 0) ? 0 : _gamepadIndex ;

	const vibrate = (intensity, duration = 300) => {
		const gamepad = navigator.getGamepads()[gamepadIndex];
		if (gamepad) {
			try {
				if (intensity === 0 || duration === 0) {
					gamepad.vibrationActuator.reset();
				} else {
					let effectParams = { duration };
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

	return { vibrate };
}

export default useVibration;
