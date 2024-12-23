const { I } = inject();
// Add in your custom step files
const {getListOfUsers} = require('../tests/getUsers')
let response;

Given ('I hit the url', async() => {
  response = await getListOfUsers()
});
Then ('List of users returned', ()=> {
    console.log(response)
})