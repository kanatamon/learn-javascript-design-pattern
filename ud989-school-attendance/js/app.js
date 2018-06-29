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

	var octopus = {
		init: function() {
			attendanceView.init();
		},
		getAllAttendances: function() {
			return model.getAllAttendances();
		},
	};

	var attendanceView = {
		init: function() {
			this.tbody = document.getElementsByTagName('tbody')[0];
			this.render();
		},
		render: function() {
			this.tbody.innerHTML = '';
			octopus.getAllAttendances().map(attendance => {
				var tr = document.createElement('tr');
				tr.setAttribute('class', 'student');

				var tdName = document.createElement('td');
				tdName.setAttribute('class', 'name-col');
				tdName.textContent = attendance.name;
				tr.appendChild(tdName);

				var tdDays = attendance.days.map(isAttendanced => {
					var tdDay = document.createElement('td');
					tdDay.setAttribute('class', 'attend-col');

					var input = document.createElement('input');
					input.setAttribute('type', 'checkbox');
					input.checked = isAttendanced;

					tdDay.appendChild(input);
					tr.appendChild(tdDay);
				})

				var tdMissed = document.createElement('td');
				tdMissed.setAttribute('class', 'missed-col');
				tdMissed.textContent = attendance.days.reduce(
					(totalDays, isAttendanced) => totalDays + (isAttendanced ? 0 : 1),
					0
				);
				tr.appendChild(tdMissed);
				this.tbody.appendChild(tr);
			});
		},
	};

	octopus.init();
})();