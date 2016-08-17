//TODO: model_id must contains the id of the model to test
//TODO: face_id must contains the id of a face created previously



const klapi = require('./klapi'),
      fs = require('fs');

var api =  new klapi.KlAPI('MsEmma', 'A48iCfXkIEkbVs8QJC1Kp2ayGraieSbjqyLf0hHqZjEDIx4KAU7RLM', 'https://klws.keylemon.com');

// var image_url = 'http://www.keylemon.com/images/saas/group.jpg'
//  
var img_data = fs.readFileSync('./public/faces/andre1.jpg')
var img_data1 = fs.readFileSync('./public/faces/andre2.jpg')


/*
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
        console.log(model.model_id)
    }
);
*/


//var img_data = fs.readFileSync('my_image.jpg')
 
api.recognize({
      modelsId : 'c15e6718-f88d-4268-9afd-694f3cddd726',
      //imagesUrl : new Array('http://yimi.projectcodex.co/faces/andre2.jpg')

    },
                               // maximum resluts number (null = all)
    function(errors, result) {
 
        if(errors)
            return console.log(errors)
 
        // print all the result list
        console.log(result)
 
        //display result for each face the authentication result against the model
        for(var i = 0; i < result.faces.length ; i++){
            console.log('Authentication result for face : result.faces[i].face_id : ' + result.faces[i].face_id)
            for(var i = 0; j < result.faces.length ; j++){
                //console.log( result.faces[i].result[j].model_id + ' : authenticated : ' + result.faces[i].result[j].authenticated + ', score = ' +  result.faces[i].result[j].score')
            }
        }
 
    }
)
