(function () {
	var department = $('.department');
	var drop_down = $('.big_dropdown');

	var menu_model = {
		init: function () {
			this.bind();
		},
		bind: function () {
			department.click(function (event) {
				event.stopPropagation();
				drop_down.slideToggle("fast");
			});

			$(document).click(function (event) {
				if (!$(event.target).closest('.left_box').length) {

					drop_down.hide();
				} else {
					event.stopPropagation();
				}
			});

		},
		slide: function () {

		}
	}
	menu_model.init();
})()