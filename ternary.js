  // Refactor the following statements to use ternary expressions:

        // const age = 10;
        // if (age > 21) console.log("adult"); else {
        //     console.log("minor");
        // }

        // if (age > 13 && age < 19) console.log('teen'); else {
        //     console.log("not a teenager");
        // };

        // if (age > 65) console.log("retired"); else {
        //     console.log("still working...");
        // }


const age = 26;
var a;
a = age > 21 ? "adult" : "minor" 
a = (age > 13 && age < 19) ? "teen" : "not a teenager" 
a = age > 65 ? "retired" : "still working...";

console.log(`Your are ${a}`);
