
class DeleteStudentPage {

    constructor (){
        this.msgSelector = "//div[contains(@class,'modaldiv text-center')]/p";
        this.userEmail = ""; // the user email for which delete action is to be performed        
        this.emailXpath = "";
        this.deleteXpath ="";

    }

    // set the email
    setUserEmail(email){
        this.userEmail = email;
        this.emailXpath = `//td[contains(text(),"${this.userEmail}")]`;
        this.deleteXpath = `//td[contains(text(),"${this.userEmail}")]/following-sibling::td/a[contains(text(),"Delete")]`;

    }

    // click corresponding delete button
    // setUserEmail() must be performed before this action
    async clickDeleteBtn(){

        await page.click(this.deleteXpath);
    }
 
}

// export the page as module
module.exports = {DeleteStudentPage};