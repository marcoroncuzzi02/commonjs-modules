import names from "./names.js"

import hobby from "./hobbies.js"

console.log(names, hobby)

function users(){
    return {
        fullName : names('Marco', 'Roncuzzi'),
        hobbies : hobby('sciare', 'surfare', 'pitturare')
    }
}

console.log (users.fullName)

// const myImportHobby = require("./hobbies")

// const myImportName = require("./names")



// function users(){
//     return {
//         fullName : myImportName.names('Marco', 'Roncuzzi'),
//         hobbies : myImportHobby.hobby('sciare', 'surfare', 'pitturare')
//     }
// }

// console.log (users.fullName)