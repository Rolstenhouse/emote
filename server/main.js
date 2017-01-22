import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

var fs = Npm.require('fs');

Meteor.methods({
  'processImage': function(imageID){
    var image = Images.findOne(imageID);
    //console.log(image);

    fs.createReadStream(image.url);
    //
    // var location = Meteor.absoluteUrl()+"cfs/files/images/"+imageID;
    // console.log(location);
    // fs.createReadStream(location);
    //
    // console.log(image.url);
    // unirest.post("https://eyeris-emovu1.p.mashape.com/api/image/")
    // .header("X-Mashape-Key", "gGz3u3FfmymsheuHfAzQt3yTKsbsp1C9hbBjsn5S0uNfAsIdKt")
    // .header("LicenseKey", "LICENSE_KEY")
    // .attach("imageFile", buffer)
    // .end(function (result) {
    //   console.log(result.status, result.headers, result.body);
    // });
      //
      // HTTP.call("POST", "https://eyeris-emovu1.p.mashape.com/api/image/",
      //     {headers:{"X-Mashape-Key": "gGz3u3FfmymsheuHfAzQt3yTKsbsp1C9hbBjsn5S0uNfAsIdKt",
      //       "LicenseKey": "LICENSE_KEY"},
      //        params: {"imageFile": 'http://localhost:3000/cfs/files/images/v3tmPmN5aS58T7Qo9'}},
      //     function (error, result) {
      //       if (error) {
      //         console.log(error);
      //       }
      //       console.log(result);
      //     });
    // HTTP.call("POST", "https://eyeris-emovu1.p.mashape.com/api/image/",
    //       {headers:{"X-Mashape-Key": "gGz3u3FfmymsheuHfAzQt3yTKsbsp1C9hbBjsn5S0uNfAsIdKt",
    //         "LicenseKey": "LICENSE_KEY"},
    //          params: {"imageFile": dataURI}},
    //       function (error, result) {
    //         if (error) {
    //           console.log(error);
    //         }
    //         console.log(result);
    //       });

  }
});


Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});
