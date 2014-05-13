(function($) {

$.fn.stock = function(symbol, name) {
	this.empty();
	this.addClass("stock");
	this.data({
		symbol: symbol,
		name: name
	});

	var mw = $('<span class="ajax-loading"></span>');

	/*$.get("http://insights.themarketiq.com/chart/", {"symbol": symbol}, "html")
	.done(function(data) {
		mw.removeClass("ajax-loading").addClass("ajax-success");
		var doc = $(data);
		var senti = doc.find('#sentiment');
		mw.text(senti.text()).addClass(senti.attr('class'));
	})
	.fail(function() {
		mw.removeClass("ajax-loading").addClass("ajax-fail");
	})
	;*/
	mw.removeClass('ajax-loading');

	var text;
	if (name) {
		text = name+" ("+symbol+")";
	} else {
		text = symbol;
	}

	this.append(
		text,
		" ",
		mw
	);

	return this;
};

$.stock = function(symbol, name) {
	return $('<span></span>').stock(symbol, name);
}

})(jQuery);