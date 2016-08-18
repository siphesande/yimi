var recognise = require('./recognise');

recognise("https://www.alterconf.com/sites/default/files/styles/245x150/public/speakers/Zimkhitha1.jpg?itok=q9FO7lne",
"1d10b4f2-220c-41ff-833d-0e7aa99fac26", function(err, response){
  console.log(err);
  console.log(response);
});
