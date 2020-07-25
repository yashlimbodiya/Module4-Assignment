(function () {
    var helloSpeaker = {};
    var greeting = "Hello ";
    helloSpeaker.speak = function (name) {
      console.log(greeting + name);
    }
  
    window.helloSpeaker = helloSpeaker;
  
  })();