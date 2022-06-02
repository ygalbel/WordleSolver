class solution {
    constructor() {
        var dict = require("./words_dictionary.json");
        var words = Object.keys(dict)
        this.dict = words;
    }

    existingLetters(letters) {
        for (var i = 0; i < letters.length; i++) {
            console.log(letters[i])
            this.dict = this.dict.filter(a => a.indexOf(letters[i]) > -1);
        }

        return this;
    }
    length(length) {
        this.dict = this.dict.filter(a => a.length == length);
        return this;
    }
    nonExistingLetter(letters) {
        
        for (var i = 0; i < letters.length; i++) {
            console.log(letters[i]);
            this.dict = this.dict.filter(a => a.indexOf(letters[i]) == -1);
        }
        return this;
    };

    static getIndices = (s, t) => { // source: https://stackoverflow.com/a/66719322/1543596
        return [...s].flatMap((char, i) => (char === t ? i : []));
    };

    specific() {
        console.log(arguments, this.dict);
        for (var i = 0; i < arguments.length; i++) {
            this.dict = this.dict.filter(a =>
                solution.getIndices(a, arguments[i].letter).some(d => d == arguments[i].location));
        }

        return this;
    }

    specificNot() {
        console.log(arguments);
        for (var i = 0; i < arguments.length; i++) {
            console.log(this.dict.length);
            this.dict = this.dict.filter(a =>
                a.indexOf(arguments[i].letter) != arguments[i].location);
        }

        return this;
    }
    proposedWord() {
        return this.dict.map(a => {
                var obj = {
                    "word": a,
                    "differentLetters": new Set(a.split('')).size
                };
                return obj;
            })
            .reduce((a, b) => a.differentLetters > b.differentLetters ? a : b).word
    }
}


var u = new solution()
    .length(5)
    .nonExistingLetter('bredfotimpuzyg')
    
    .specific(
        {
            letter: 'a',
            location : 3
        }    ,
        {
            letter: 'l',
            location : 4
        } 
    );
    //.existingLetters("ase");
    

console.log(u.dict);
//console.log(u.proposedWord());