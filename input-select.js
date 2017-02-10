(function ( $ ) {

	$.fn.inputSelect = function (options) {


		// settings
		var settings = $.extend({
			container: 'body'
		}, options);


		// init
		var init = function(elm) {

			$(elm).addClass('input-select');

			var popover = $('<div />');
			popover.addClass('input-select-popover');

			popover.appendTo(settings.container);

			console.log(elm);
		}



		// let's go
		return this.each(function() {

			init(this)

		});


	}

}( jQuery ))
