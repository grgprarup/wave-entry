const axios = require("axios");

class Helper {
  constructor(){
   this._response = "";
   this.token = `admin:admin`;
   this.encodedToken = Buffer.from(this.token).toString('base64');

   this.baseUrl = "http://localhost:3001"
  }
  get response(){
   return this._response;
 }
 set response(response){
  // if(this._response !== ""){
  //  this._response = ""
  // }
    this._response = response;
 }
 async createSubAdmin(dataTable){
  const userDetails = dataTable.rowsHash();
  this._response = null
  return await axios.post(`${this.baseUrl}/admin/`, {
   "username":userDetails.username,
   "password":userDetails.password
  }, {
   headers: {
    "Authorization": 'Basic ' + this.encodedToken,
    'Content-Type': 'application/json',
   }
  })
  // return this._response;
 }
 async deleteSubAdmin(subAdminName){
  const headers = {
   "Authorization": 'Basic ' + this.encodedToken,
   'Content-Type': 'application/json',
  }
  const data = {
   username: subAdminName
  }
  this._response = null
  return await axios.delete("http://localhost:3001/admin/", {headers, data
  });
 }

 async updateSubAdmin(){
  return await axios.put(`${this.baseUrl}/admin/`,
      {
       "username":"shyam",
       "password":"shyam1"
      })
 }

}

 module.exports = { Helper }