const {When, Then} = require('@cucumber/cucumber');
const {Helper} = require('../../helperTests/apiHelper');

const helper = new Helper();
When('admin creates student with following details', async function (dataTable) {
     Helper.response = await helper.createStudent(dataTable);
});
Then('student with following details should be created',async function (dataTable) {
    const studentDetails = dataTable.hashes();
    const studentList  = await helper.listStudent()
    // const oneStudent = await helper.listOneStudent(studentList.data[0].id)
    console.log(studentList)
    // console.log(oneStudent)
});
