const axios = require("axios");

module.exports = async function deleteSubAdmin(subAdminName){
 let response = "";
 const token = `admin:admin`;
 const encodedToken = Buffer.from(token).toString('base64');
 response = await axios.post(`${baseUrl}/admin/`, {
  "username":userDetails.username,
  "password":userDetails.password
 }, {
  headers: {
   "Authorization": 'Basic ' + encodedToken,
   'Content-Type': 'application/json',
  }
 })
}
