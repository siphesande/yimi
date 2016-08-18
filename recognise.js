//TODO: model_id must contains the id of the model to test
//TODO: face_id must contains the id of a face created previously



const klapi = require('./klapi'),
    fs = require('fs');

var api =  new klapi.KlAPI('MsEmma', 'A48iCfXkIEkbVs8QJC1Kp2ayGraieSbjqyLf0hHqZjEDIx4KAU7RLM', 'https://klws.keylemon.com');

var img_data = fs.readFileSync('./public/faces/andre4.jpg'); 
api.recognize({
        new Array(
            'http://www.keylemon.com/images/saas/penelope/penelope_3.jpg' // Images urls
        ),
        new Array('alba.jpg'), // Images datas
        new Array(face_id), // Existing face id
        new Array(model_id), // The model(s) to test
        null,
    },                                // maximum resluts number (null = all)
        
    function(errors, result) {         
        if (errors)             return console.log(errors)          // print all the result list
                     console.log(result)          //display result for each face the authentication result against the model
                     for (var i = 0; i < result.faces.length; i++) {            
                console.log('Authentication result for face : result.faces[i].face_id : ' + result.faces[i].face_id)             for (var i = 0; j < result.faces.length; j++) {                 //console.log( result.faces[i].result[j].model_id + ' : authenticated : ' + result.faces[i].result[j].authenticated + ', score = ' +  result.faces[i].result[j].score')
                                }        
            }     
    }
)
