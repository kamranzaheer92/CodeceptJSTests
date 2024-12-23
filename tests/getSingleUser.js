const axios = require('axios');
const baseURL= 'https://reqres.in'
const {globalVariables} = require('../EnvironmentVariables/globalVariables')

getSingleUser = async() => {
    let res = await axios.get(`${baseURL}/api/users/2`,{
    })
    if(res.status===200) {
     return res.data
    } else {
      return null
    }
  }
module.exports = {
    getSingleUser
}