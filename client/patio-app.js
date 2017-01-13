
$(document).ready(function() {
  $.simpleWeather({
    location: 't2m1c4',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.currently+' and '+weather.temp+'&deg;'+weather.units.temp+'</p>';
      if(weather.temp > 5 && weather.currently == 'Sunny'){
        html += "<p>Patio weather!</p>";
      } else {
        html += "<p>Order pizza!</p>";
      }
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

