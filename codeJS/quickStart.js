var app = {};

app.show=  function(){
    console.log("Inside show function");
    return "Code JS String";
}

app.bind = function(){
    var button = document.getElementById('but1');
    button.addEventListener('click', app.display);
}

app.display = function(){
    var elem = document.getElementById('info');
    elem.innerHTML='Click on the button';
    console.log(elem);
    //alert(elem);
}