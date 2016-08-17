const klapi = require('./klapi'),
      fs = require('fs');

var api =  new klapi.KlAPI('MsEmma', 'A48iCfXkIEkbVs8QJC1Kp2ayGraieSbjqyLf0hHqZjEDIx4KAU7RLM', 'https://klws.keylemon.com');

// var image_url = 'http://www.keylemon.com/images/saas/group.jpg'
//  
var img_data = fs.readFileSync('./public/faces/andre1.jpg')
var img_data1 = fs.readFileSync('./public/faces/andre2.jpg')
 
api.createModel(
    new Array('http://yimi.projectcodex.co/faces/andre1.jpg',
            'http://yimi.projectcodex.co/faces/andre2.jpg',
            'http://yimi.projectcodex.co/faces/andre3.jpg'
  ),
    new Array(
        img_data,      // Images data
        img_data1),
    new Array(
                // Existing face id
    ),
    "andresModel",    // The name of the model

    function(errors, model){

        // check if an errors has occured
        if(errors)
            console.log(errors)

        // print the model id
        console.log(model);
        console.log(model.model_id)
    }
);
