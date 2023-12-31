//In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

//Create an Singleton pattern, so there is one object in system.

var Singleton = function(){
  if(Singleton.__instance) {
    return Singleton.__instance;
  }
  
  Singleton.__instance = this;
};
