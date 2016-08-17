const klapi = require('./klapi'),
      fs = require('fs');

var api =  new klapi.KlAPI('MsEmma', 'A48iCfXkIEkbVs8QJC1Kp2ayGraieSbjqyLf0hHqZjEDIx4KAU7RLM', 'https://klws.keylemon.com');

var image_url = 'http://www.keylemon.com/images/saas/group.jpg'
 
var img_data = fs.readFileSync('penelope.jpg')
 
api.detectFaces(
    new Array(image_url),
    new Array(img_data),
    true, // Request age+gender
    function(errors, faces){

        // get the errors
        if(errors)
            console.log(errors)

        console.log(faces);
        var faces = faces.faces;
        var message = "";
        for(var i = 0; i < faces.length; i++){
            console.log(i);
            message += "face " + i + " : position = (" + faces[i].x + ',' + faces[i].y + '); size = ' + faces[i].w + ' x ' + faces[i].h+ '\n';
            console.log(message)
            console.log("Gender : " + faces[i].gender)
            console.log("Age : " + faces[i].age)
        }
 
    }
);
