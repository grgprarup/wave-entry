const axios = require("axios");

class Helper {
 static response = ""
  constructor(){
   this.token = `admin:admin`;
   this.encodedToken = Buffer.from(this.token).toString('base64');

   this.baseUrl = "http://localhost:3001"
  }
async adminLogin(adminName, adminPassword){
 return await axios.post(`${this.baseUrl}/admin/login`,{
  "username":adminName,
  "password":adminPassword
 })
}
 async createSubAdmin(dataTable){
  const userDetails = dataTable.rowsHash();
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
  // response = null
  return await axios.delete("http://localhost:3001/admin/", {headers, data
  });
 }

 async updateSubAdmin(subAdminName, subAdminPassword){
  const headers = {
   "Authorization": 'Basic ' + this.encodedToken,
   'Content-Type': 'application/json',
  }
  return await axios.put(`${this.baseUrl}/admin/`,
      {
       "username":subAdminName,
       "password":subAdminPassword
      }, {headers})
 }

 async createStudent(dataTable){
  const headers = {
   "Authorization": 'Basic ' + this.encodedToken,
   'Content-Type': 'application/json',
  }
  const studentDetails = dataTable.hashes();
  studentCreated.push(studentDetails[0].name)
  // console.log(studentCreated)
  return await axios.post(`${this.baseUrl}/student/`,{
   "name":studentDetails[0].name,
   "email":studentDetails[0].email,
   "phone":studentDetails[0].phone,
   "destination":studentDetails[0].destination,
   "qualification":studentDetails[0].qualification,
   "address":studentDetails[0].address,
   "percentage":studentDetails[0].percentage,
   "ielts":studentDetails[0].ielts,
   "reading":studentDetails[0].reading,
   "writing":studentDetails[0].writing,
   "listening":studentDetails[0].listening,
   "speaking":studentDetails[0].speaking,
   "overallband":studentDetails[0].overallband
  }, {headers})
 }

 async deleteStudent(){

 }

 async listStudent(){
  const headers = {
   "Authorization": 'Basic ' + this.encodedToken,
   'Content-Type': 'application/json',
  }
   return await axios.get(`${this.baseUrl}/student/`,{headers})
 }

 async listOneStudent(id){
  const headers = {
   "Authorization": 'Basic ' + this.encodedToken,
   'Content-Type': 'application/json',
  }
  return await axios.get(`${this.baseUrl}/student/${id}`,{headers})
 }

}

 module.exports = { Helper }