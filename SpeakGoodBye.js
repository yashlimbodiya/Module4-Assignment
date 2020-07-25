(function () {
    var byeSpeaker = {};
    var greeting = "Good Bye ";
    byeSpeaker.speak = function (name) {
      console.log(greeting + name);
    }
  
    window.byeSpeaker = byeSpeaker;
  
  })();