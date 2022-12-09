package main

import "github.com/cucumber/godog"

func main() {

}

func InitializeScenario(ctx *godog.ScenarioContext) {
	// initialize an empty response
	resp := &Response{}
	//	ctx.Step(`^the user has a valid token after login with username "([^"]*)" and password "([^"]*)"$`, resp.theUserHasAValidTokenAfterLoginWithUsernameAndPassword)
	ctx.Step(`^the user sends login request with username "([^"]*)" and password "([^"]*)"$`, resp.theUserSendsLoginRequestWithUsernameAndPassword)
	ctx.Step(`^the user should see response (\d+)$`, resp.theUserShouldSeeResponse)
	ctx.Step(`^a user sends request to list all students endpoint$`, resp.aUserSendsRequestToListAllStudentsEndpoint)

	//ctx.Step(`^the user sends login request with$`, resp.theUserSendsLoginRequestWith)
	ctx.Step(`^the user creates following student$`, resp.theUserCreateFollowingStudents)

	ctx.Step(`^the user creates a sub-admin with username "([^"]*)" and password "([^"]*)"$`, resp.theUserCreatesASubadminWithUsernameAndPassword)

}
