

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

    specificNot(){
        console.log(arguments);
        for(var i=0; i <arguments.length; i++){
            console.log(this.dict.length);
            this.dict = this.dict.filter(a => 
                a.indexOf(arguments[i].letter) != arguments[i].location);
        }
    
        return this;
    }
}


var u = new solution()
        .length(5)
        .nonExistingLetter('r','u','a','d','b' ,'m', 'c')
         .specific(
             { letter : 's', location: 3},
             { letter : 't', location: 4}
             )
             .specificNot(
                 { letter : 'e' , location: 2},
                 { letter : 't' , location: 0},
                 { letter : 'h' , location: 1}
                 )
        .existingLetters( 'e','t', 'h')
        
    



console.log(u.dict);