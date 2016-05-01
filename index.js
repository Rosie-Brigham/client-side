var xhr = require('xhr')
var monarch = require('./views/monarch.hbs')
var question = require('./views/question.hbs')
var $ = require('jQuery');

document.body.innerHTML = question({});

$('#question').submit(function( event ) {
  event.preventDefault();
  var year = $('#year').val()

  xhr.withCredentials = true;
  xhr.get('http://localhost:3000/v1/monarchs/' + year, {headers: {"Access-Control-Allow-Origin":  '*' }}, function(err, data) {
    if (err) console.log(err) // do something

    var monarchData =  JSON.parse(data.body)[0]
    document.body.innerHTML = monarch({ name: monarchData.name,
                                        epitaph: monarchData.epitaph,
                                        house: monarchData.house,
                                        image_url: monarchData.image_url,
                                        born: monarchData.born,
                                        rex_url: monarchData.rex_factor_url,
                                        died: monarchData.died,
                                        ruled_from: monarchData.ruled_from,
                                        ruled_to: monarchData.ruled_to
                                        });
  }) //this is always going to be static - so not much use for interaction I guess...


});
