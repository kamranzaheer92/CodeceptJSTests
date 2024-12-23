//Define Global variables
const globalVariables = {
    id:null
}

// Reset function to clear all global variables after execution
const resetGlobalVariables =() => {
    globalVariables.id=null
} 
module.exports = {
    globalVariables,
    resetGlobalVariables
}
