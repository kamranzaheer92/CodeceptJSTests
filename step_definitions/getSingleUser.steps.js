const { I } = inject();
// Add in your custom step files
const {getSingleUser} = require('../tests/getSingleUser')

Given ('I hit the url with get single user API', async() => {
  this.response = await getSingleUser()
});
Then ('I verify the response of the get single user API', ()=> {
    console.log(this.response)
})