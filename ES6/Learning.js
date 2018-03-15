function itrFor(){
    for(let i = 0; i<=10; i++){
        console.log(i);
    }
   // console.log(i);
}
//itrFor();
function constVar(){
    const a=15;
   
    console.log(a);
}
//constVar();
function templateLiteral(){
    console.log('How r u\nwelcome')
}
//templateLiteral();
function exprInterpolation(){
    var name = 'Sara';
    var lastname = 'soman';
    console.log(`Name:${name} LastName:${lastname}`);
}
//exprInterpolation();

function arrFunc(){
    var sum = (a, b)=> a+ b;
    console.log(sum(5,8));
}
//arrFunc();

function arrowString(){
    var arr = ['Tom', 'Jerry', 'Spider'];
    arr.forEach(eachArr => console.log(eachArr))
    var charCount = arr.map(eachArr => eachArr.length)
    console.log(charCount)
}
arrowString();

function restParam(...param){
    var result = 0;
    param.forEach(function(i){
        
        result += i;
        console.log('test:'+i)
        
    })
    console.log(result);
}

restParam(1,2,3,4);