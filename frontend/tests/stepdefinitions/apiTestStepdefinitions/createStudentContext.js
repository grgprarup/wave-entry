const {When, Then} = require('@cucumber/cucumber');
const {Helper} = require('../../helperTests/apiHelper');

const helper = new Helper();
When('admin creates student with following details', async function (dataTable) {
     Helper.response = await helper.createStudent(dataTable);
});
Then('student with following details should be created',async function (dataTable) {
    const studentDetails = dataTable.hashes();
    const studentList  = await helper.listStudent()
    console.log(studentList)
    console.log(studentList.data[0].name)
    console.log(studentList.data[0]._id)
    const dbDetail = await helper.listOneStudent(studentDetails.data[1]._id)
    console.log(dbDetail);
    // expect(dbdetail.email).toBe();
});
