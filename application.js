(function($){


	$('#input').on('click', function(event){

		var phrase = $('#input').val();
			key = '3ed40dc640c04223adba52fddb235425',
			capitolWordsAPI = 'http://capitolwords.org/api/1/dates.json',
			startDate = '1995',
			granularity = 'years';

		phrase = phrase.replace(/\s/, '+');

		var requestURI = capitolWordsAPI + '?phrase=' + phrase 
							+ '&' + 'start_date=' + startDate
							+ '&' + 'granularity=' + granularity
							+ '&' + 'apikey=' + key;


		$.get(requestURI, function( data ) {
			console.log(data.results);
		});

	});

})(jQuery, undefined);



























//mike's work
$(function(){
  var $button = $('#button');
  var $input = $('#input');
  $button.on('click', function() {
    var value = $input.val();
    $input.val('');
    console.log(value);
  });
});
