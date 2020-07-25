(function () {
    var byeSpeaker = {};
    var greeting = "Goodbye ";
    byeSpeaker.speak = function (name) {
      console.log(greeting + name);
    }
  
    window.byeSpeaker = byeSpeaker;
  
  })();