

class solution  {
    constructor(){
        var dict = require("./words_dictionary.json");
        var words = Object.keys(dict)
        this.dict = words;
    }
    
    existingLetters(){
        for(var i=0; i <arguments.length; i++){
            this.dict = this.dict.filter(a => a.indexOf(arguments[i]) > -1);
        }
    
        return this;
    }
    length(length){
        this.dict = this.dict.filter(a => a.length == length);
        return this;
    }
    nonExistingLetter(){
        for(var i=0; i <arguments.length; i++){
            this.dict = this.dict.filter(a => a.indexOf(arguments[i]) == -1);
        }
    
        return this;
    }
    specific(){
        console.log(arguments);
        for(var i=0; i <arguments.length; i++){
            console.log(this.dict.length);
            this.dict = this.dict.filter(a => 
                a.indexOf(arguments[i].letter) == arguments[i].location);
        }
    
        return this;
    }
}


var u = new solution()
        .length(5)
        .existingLetters( 'r',)
        .nonExistingLetter('w','t','y','i','o','a','s','d',
        'h','j','l','c','b','n','m')
        .specific({
           letter : 'u', location: 1 
        },{
            letter : 'e', location: 4 
         });
    



console.log(u.dict);