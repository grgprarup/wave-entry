const axios = require("axios");

class Helper {
  constructor(){
   this._response = "";
   this.baseUrl = "http://localhost:3001"
  }
  get response(){
  // console.log("inside get")
  // console.log(this._response)
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
  const token = `admin:admin`;
  const encodedToken = Buffer.from(token).toString('base64');
  this._response = null
  return await axios.post(`${this.baseUrl}/admin/`, {
   "username":userDetails.username,
   "password":userDetails.password
  }, {
   headers: {
    "Authorization": 'Basic ' + encodedToken,
    'Content-Type': 'application/json',
   }
  })
  // return this._response;
 }
 async deleteSubAdmin(subAdminName){
  const token = `admin:admin`;
  const encodedToken = Buffer.from(token).toString('base64');
  const headers = {
   "Authorization": 'Basic ' + encodedToken,
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

 }

}

 module.exports = { Helper }