window.Foo = (function() {

  function Foo () {
    this.plusOne = function (x) {

       return x + 1;
    };

    this.sortArray = function (u) {

      return u.concat().sort();
    };

    this.hasValue = function (obj, elem){
        if (obj.indexOf(elem) >=0){
          return true;
        }else{
          return false;
        }
     };

     Foo.greet = function(string) {
    return "Hello, " + string + "!";
     };
  }





  Foo.prototype.sort = {};

  return Foo;

})();