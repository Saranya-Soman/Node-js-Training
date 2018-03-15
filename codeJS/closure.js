var app = (function(){

function greaterThan (m){
    return function(n){
        return m > n;
    }
}

var greaterThanVar = greaterThan(10)

console.log('Greater Result:'+greaterThanVar(2));

    function calc(){
        return 'calc function';
    }
    function example(){
        var name = "First function";
        return function (){
            console.log(name);
            return name.toUpperCase();
        }
       // showName();
    }
    //example();
    //console.log(name);
    var ref = example();
    console.log(ref());
    return {
        'mymethod': calc
    }
})();

//example();
var myApp = app;
console.log(myApp.mymethod());