(function(){
    function objLiteral(){
        var prod = {}; //Empty obj literal
        prod.code = 101;
        prod.name = 'computer';
        

        prod.toString = function(){
            return this.code+':'+ this.name
        }
        console.log(prod.toString());
    }
    objLiteral();

    var book = function(booknumber, name, price){
        this.booknumber = booknumber;
        this.name = name;
        this.price = price;
        this.discount = function(){
            return this.price * 0.1;
        }
    }

    function printBook(){
        var bk = new book(1, 'Node JS', 2000);
        var bk1 = new book(2, 'Node JS', 300);
        //var bk2 = new book(3, 'JS');
        var bk2 = new book(4, 'JS', 400);
        var booklist = [bk, bk1, bk2];
        booklist.forEach(function(eachBook,i){
            console.log(eachBook.booknumber + eachBook.name +eachBook.discount())
        })
    }
    printBook();
    //console.log(printBook());
})();