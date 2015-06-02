
var getRequest = function(val) {


	var phrase = val,
		key = '3ed40dc640c04223adba52fddb235425',
		capitolWordsAPI = 'http://capitolwords.org/api/1/dates.json',
		startDate = '1995',
		granularity = 'year';

	phrase = phrase.replace(/\s/, '+');

	var requestURI = capitolWordsAPI + '?phrase=' + phrase 
						+ '&' + 'start_date=' + startDate
						+ '&' + 'granularity=' + granularity
						+ '&' + 'apikey=' + key;


	$.get(requestURI, function( data ) {
		console.log(data.results);







        /*
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMaterial);

function drawMaterial() {
      var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
      ]);

      var options = {
        chart: {
          title: 'Population of Largest U.S. Cities'
        },
        hAxis: {
          title: 'Total Population',
          minValue: 0,
        },
        vAxis: {
          title: 'City'
        },
        bars: 'horizontal'
      };
      var material = new google.charts.Bar(document.getElementById('chart_div'));
      material.draw(data, options);
    }
*/
    
	});

};



























//mike's work
$(function(){
  var $button = $('#button');
  var $input = $('#input');
  $button.on('click', function() {
    var value = $input.val();
    $input.val('');
    getRequest(value);
  });
});



