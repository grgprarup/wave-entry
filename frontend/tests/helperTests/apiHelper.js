const axios = require("axios");

class Helper {
  constructor(){
   this.response = "";
   this.baseUrl = "http://localhost:3001"
  }

 async createSubAdmin(dataTable){
  const userDetails = dataTable.rowsHash();
  const token = `admin:admin`;
  const encodedToken = Buffer.from(token).toString('base64');
  this.response = await axios.post(`${this.baseUrl}/admin/`, {
   "username":userDetails.username,
   "password":userDetails.password
  }, {
   headers: {
    "Authorization": 'Basic ' + encodedToken,
    'Content-Type': 'application/json',
   }
  })
 }
 async deleteSubAdmin(subAdminName){
  const token = `admin:admin`;
  const encodedToken = Buffer.from(token).toString('base64');
  console.log(this.baseUrl)
  const headers = {
   "Authorization": 'Basic ' + encodedToken,
   'Content-Type': 'application/json',
  }
  const data = {
   username: subAdminName
  }

  this.response = await axios.delete("http://localhost:3001/admin/", {headers, data
  });
  console.log(this.response)
 }

}

 module.exports = { Helper }