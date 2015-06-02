(function($){

	var key = '3ed40dc640c04223adba52fddb235425',
		capitolWordsAPI = 'http://capitolwords.org/api/1/dates.json',
		phrase = "United States";

	phrase = phrase.replace(/\s/, '+');

	var requestURI = capitolWordsAPI + '?phrase=' + phrase + '&' + 'apikey=' + key;

	$.get(requestURI, function( data ) {

		console.log(data);

	});

})(jQuery, undefined);