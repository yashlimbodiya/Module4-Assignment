(function () {
    var byeSpeaker = {};
    var greeting = "Hello ";
    byeSpeaker.speak = function (name) {
      console.log(greeting + name);
    }
  
    window.byeSpeaker = byeSpeaker;
  
  })();