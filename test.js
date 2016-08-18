var recognise = require('./recognise');

recognise("http://yimi.projectcodex.co/faces/1471524662934.png",
"1d10b4f2-220c-41ff-833d-0e7aa99fac26", function(err, response){
  console.log(err);
  console.log(response);
});
