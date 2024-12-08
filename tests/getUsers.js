const {default: axios} = require("axios")
const baseURL= 'https://reqres.in'
getListOfUsers = async() => {
  let res = await axios.get(`${baseURL}/api/users?page=2`,{
  })
  if(res.status===200) {
   return res.data
  } else {
    return null
  }
}

module.exports = {
   getListOfUsers
}
 