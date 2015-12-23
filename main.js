$.ajax({
  	url: 'http://www.astrology-api.com/api/signs',
    method: 'get', // GET by default
    dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
  }).done(function(data){
  	console.log(data[3].name);
     document.getElementById('aries-td').innerHTML = '<h1 class="sign-name">' + data[0].name + '</h1>' + '<h5 class="sign-date">' + data[0].date + '</h5>';
     document.getElementById('libra-td').innerHTML = '<h1 class="sign-name">' + data[6].name + '</h1>' + '<h5 class="sign-date">' + data[6].date + '</h5>';
     document.getElementById('taurus-td').innerHTML = '<h1 class="sign-name">' + data[2].name + '</h1>' + '<h5 class="sign-date">' + data[2].date + '</h5>';
     document.getElementById('scorpio-td').innerHTML = '<h1 class="sign-name">' + data[7].name + '</h1>' + '<h5 class="sign-date">' + data[7].date + '</h5>';
     document.getElementById('gemini-td').innerHTML = '<h1 class="sign-name">' + data[3].name + '</h1>' + '<h5 class="sign-date">' + data[3].date + '</h5>';
     document.getElementById('sagittarius-td').innerHTML = '<h1 class="sign-name">' + data[8].name + '</h1>' + '<h5 class="sign-date">' + data[8].date + '</h5>';
     document.getElementById('cancer-td').innerHTML = '<h1 class="sign-name">' + data[1].name + '</h1>' + '<h5 class="sign-date">' + data[1].date + '</h5>';
     document.getElementById('capricorn-td').innerHTML = '<h1 class="sign-name">' + data[9].name + '</h1>' + '<h5 class="sign-date">' + data[9].date + '</h5>';
     document.getElementById('leo-td').innerHTML = '<h1 class="sign-name">' + data[4].name + '</h1>' + '<h5 class="sign-date">' + data[4].date + '</h5>';
     document.getElementById('aquarius-td').innerHTML = '<h1 class="sign-name">' + data[10].name + '</h1>' + '<h5 class="sign-date">' + data[10].date + '</h5>';
     document.getElementById('virgo-td').innerHTML = '<h1 class="sign-name">' + data[5].name + '</h1>' + '<h5 class="sign-date">' + data[5].date + '</h5>';
     document.getElementById('pisces-td').innerHTML = '<h1 class="sign-name">' + data[11].name + '</h1>' + '<h5 class="sign-date">' + data[11].date + '</h5>';

  });

