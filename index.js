var monarch = require('./views/monarch.hbs')
var question = require('./views/question.hbs')
var xhr = require('xhr')
var $ = require('jQuery');
var moment = require('moment')

document.body.innerHTML = question({});

$('#question').submit(function( event ) {
  event.preventDefault();
  var year = $('#year').val()

  xhr.withCredentials = true;
  xhr.get('https://stormy-plains-89487.herokuapp.com/v1/monarchs/' + year, {headers: {"Access-Control-Allow-Origin":  '*' }}, function(err, data) {
    if (err) console.log(err) // TODO: show an error page from here...

    var monarchData =  JSON.parse(data.body)[0]
  console.log(moment(monarchData.ruled_from))
    document.body.innerHTML = monarch({ name: monarchData.name,
                                        epitaph: monarchData.epitaph,
                                        house: monarchData.house,
                                        image_url: monarchData.image_url,
                                        born: monarchData.born,
                                        rex_url: monarchData.rex_factor_url,
                                        died: monarchData.died,
                                        ruled_from: createDate(monarchData.ruled_from),
                                        ruled_to: createDate(monarchData.ruled_to)
                                        });
  }) //this is always going to be static - so not much use for interaction I guess...


});

function createDate(string) {
  return new Date(string).toDateString()
}
