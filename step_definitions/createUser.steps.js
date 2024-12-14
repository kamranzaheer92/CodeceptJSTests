const { I } = inject();
const {expect} = require('chai')
const {createUser} = require('../tests/createUser')
let Id

Given('I hit the url via create user API', async() => {
    this.response =await createUser()
    console.log(this.response)
 })
Then ('I verify the response of the create user API', async()=> {
    expect(this.response).to.be.a('object')
    expect(this.response).to.have.property('name')
}) 
Then ('I get the id of the user created', ()=> {
    Id= this.response.id
    console.log(Id)
}) 
module.exports = {
    Id
}