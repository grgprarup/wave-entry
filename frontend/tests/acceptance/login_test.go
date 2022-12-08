package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"

	"github.com/cucumber/godog"
)

// Response is a struct to hold all reponse details
// Also allows to wrap all sorts of error
type Response struct {
	headers    http.Header
	statusCode int
	body       []byte
	err        error
}

func main() {}

const loginEndpoint = "http://localhost:3001/admin/login"

// func (resp *Response) theUserSendsLoginRequestWithUsernameAndPassword(username, password string) error {

// 	// create a io.reader object, needed to send request
// 	payload := strings.NewReader(fmt.Sprintf(`
// 	{
// 		"username": "%s",
// 		"password": "%s"
// 	}`, username, password))

// 	resp := postReq(loginEndpoint, payload)

// 	if resp.err != nil {
// 		return resp.err
// 	} else if resp.statusCode != 200 {
// 		return fmt.Errorf("Status code expected = 200, recieved  = %d", resp.statusCode)
// 	}
// 	return nil
// }

func theUserSendsLoginRequestWith(arg1 *godog.Table) error {
	for _, val := range arg1.Rows {
		for _, d := range val { //cannot range over slice of pointers
			fmt.Println()
		}
	}
	return godog.ErrPending
}

func theUserShouldSeeResponse(arg1 int) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(`^the user sends login request with$`, theUserSendsLoginRequestWith)
	ctx.Step(`^the user should see response (\d+)$`, theUserShouldSeeResponse)
}

func postReq(url string, payload io.Reader) (resp Response) {

	method := "POST"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
		resp.err = err
		return
	}

	req.Header.Add("Content-Type", "application/json")

	// Send the request
	res, err := client.Do(req)

	if err != nil {
		fmt.Println(err)
		resp.err = err
		return
	}

	// set headers and status code
	resp.headers = res.Header
	resp.statusCode = res.StatusCode

	// defer body closing
	defer res.Body.Close()

	// Read body
	body, err := ioutil.ReadAll(res.Body)

	if err != nil {
		fmt.Println(err)
		resp.err = err
		return

	}
	// set the body
	resp.body = body

	return
}
