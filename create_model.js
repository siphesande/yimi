const klapi = require('./klapi'),
      fs = require('fs');

var api =  new klapi.KlAPI('MsEmma', 'A48iCfXkIEkbVs8QJC1Kp2ayGraieSbjqyLf0hHqZjEDIx4KAU7RLM', 'https://klws.keylemon.com');

// var image_url = 'http://www.keylemon.com/images/saas/group.jpg'
//  
var img_data1 = fs.readFileSync('./public/faces/zim1.jpg')
var img_data2 = fs.readFileSync('./public/faces/zim2.jpg')
var img_data3 = fs.readFileSync('./public/faces/zim3.jpg')

api.createModel(
    new Array('http://yimi.projectcodex.co/faces/zim1.jpg',
            'http://yimi.projectcodex.co/faces/zim2.jpg',
            'http://yimi.projectcodex.co/faces/zim3.jpg'
  ),
    new Array(
        img_data1,      // Images data
        img_data2,
        img_data3),
    new Array(
                // Existing face id
    ),
    "zimsModel",    // The name of the model

    function(errors, model){

        // check if an errors has occured
        if(errors)
            console.log(errors)

        // print the model id
        console.log(model);
        console.log(model.model_id)
    }
);
