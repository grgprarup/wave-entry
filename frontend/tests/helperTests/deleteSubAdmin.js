const axios = require("axios");

async function deleteSubAdmin(subAdminName){
 console.log("Funtion is working !!")
 let response = "";
 const baseUrl = "http://localhost:3001/admin/"
 const token = `admin:admin`;
 const encodedToken = Buffer.from(token).toString('base64');

 const headers = {
  "Authorization": 'Basic ' + encodedToken,
  'Content-Type': 'application/json',
 }
 const data = {
  username: subAdminName

 }

 response = await axios.delete(baseUrl, {headers, data
 });

 console.log(response)
}
 module.exports = {deleteSubAdmin}