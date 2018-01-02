(function () {
	var department = $('.department');
	var drop_down = $('.big_dropdown');

	var menu_model = {
		init: function () {
			this.bind();
		},
		bind: function () {
			department.click(function (event) {

				drop_down.slideToggle("fast");
			});
		},
		slide: function () {

		}
	}
	menu_model.init();
})()