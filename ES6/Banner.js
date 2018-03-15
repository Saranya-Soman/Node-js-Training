class Banner{
    constructor(majorHead, minorHead){
        this._majorHead = majorHead;
        this._minorHead = minorHead;
    }
    get majorHead(){
        return this._majorHead;
    }
    get minorHead(){
        return this._minorHead;
    }
    set majorHead(majorHead){
        this._majorHead = majorHead;
    }
    set minorHead(minorHead){
        this._minorHead = minorHead;
    }
}

var app = {}

app.displayBanner = function(banner){
    var heading = document.querySelector('#majhead');
    var heading2 = document.querySelector('#minhead');
    heading.innerHTML = banner.majorHead;
    heading2.innerHTML = banner.minorHead;
}

let mainPage = new Banner('ES6 eg', 'Verizon,chn');
app.displayBanner(mainPage);