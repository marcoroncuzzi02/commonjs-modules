// import names from "./names.js"

// import hobby from "./hobbies.js"

const getHobby = require("./hobbies")

const getFullName = require("./names")

const getInfo = () =>(
    {
        fullName: getFullName('Marco', 'Roncuzzi'),
        hobby: getHobby('sciare', 'surfare', 'pitturare')
    }
)

console.log (getInfo())





// function users(){
//     return {
//         fullName : myImportName.names('Marco', 'Roncuzzi'),
//         hobbies : myImportHobby.hobby('sciare', 'surfare', 'pitturare')
//     }
// }

// console.log (users.fullName)