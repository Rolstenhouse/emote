import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.video.onRendered(function videoCreated(){
  var video = document.getElementById('video');
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.src = window.URL.createObjectURL(stream);
          video.play();
      });
  }
});

Template.imageView.helpers({
  images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  }
});

Template.video.events({
  'click #snap'(event, instance){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

  	context.drawImage(video, 0, 0, 640, 480);
    var dataURI = canvas.toDataURL('image/png');

    var uploaded;

    canvas.toBlob(function(blob){
     uploaded = Images.insert(blob, function(err, fileObj){
        fileObj.name('pic.png');
        Meteor.call('processImage', uploaded._id);
      });
    });



    // Meteor.call('processImage', dataURI, function(err, result){
    //   if(err){
    //     //console.log(err);
    //   }
    // });
  }
});
