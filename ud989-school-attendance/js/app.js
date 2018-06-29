(function() {

	var DAYS = 12;

	function getRandom() {
		return (Math.random() >= 0.5);
	}

	var model = {
		init: function() {
			var attendanceNames = [
				'Slappy the Frog',
				'Lilly the Lizard',
				'Paulrus the Walrus',
				'Gregory the Goat',
				'Adam the Anaconda',
			];
			var attendances = attendanceNames.map(name => ({
				name,
				days: Array
					.from(Array(DAYS).keys())
					.map(getRandom),
			}));
			localStorage.attendances = JSON.stringify(attendances);
			return attendances;
		},
		getAllAttendances: function() {
			if (!localStorage.attendances) {
				return this.init();
			}
			return JSON.parse(localStorage.attendances);
		},
	};

})();