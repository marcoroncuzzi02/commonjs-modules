import names from "./names.js"

import hobby from "./hobbies.js"

console.log(names, hobby)

function user(){
    return {
        fullName : names('Marco', 'Roncuzzi'),
        hobbies : hobby('sciare', 'surfare', 'pitturare')
    }
}

console.log (user.fullName)