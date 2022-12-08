const axios = require("axios");
let response = "";
const baseUrl = "http://localhost:3001"

async function deleteSubAdmin(subAdminName){
 const token = `admin:admin`;
 const encodedToken = Buffer.from(token).toString('base64');

 const headers = {
  "Authorization": 'Basic ' + encodedToken,
  'Content-Type': 'application/json',
 }
 const data = {
  username: subAdminName
 }

 response = await axios.delete(`${baseUrl}/admin/`, {headers, data
 });

 return response
}

async function createSubAdmin(dataTable){
 const userDetails = dataTable.rowsHash();
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
 return response
}
 module.exports = { createSubAdmin, deleteSubAdmin ,response}