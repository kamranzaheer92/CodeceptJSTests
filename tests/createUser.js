const axios = require('axios');
const baseURL= 'https://reqres.in'
//const data= require('../data/createUser.json')

const data = {
     "name": "morpheus",
      "job": "leader"
}
const headers = {
    'Content-Type': 'application/json'
}
createUser = async () => {
    try {
        const res = await axios.post(`${baseURL}/api/users`, data, {
           Headers:headers
        })
        if (res.status === 201) {
            return res.data;  // Return the response data
        } else {
            console.log('Failed to create user');
            return null;  // In case of a non-201 response, return null
        }
    } catch (error) {
        console.error("Error creating user:", error.message);  // Log any errors
        return null;  // Return null if there's an error
    }
};

module.exports = { 
    createUser,
    baseURL
};
