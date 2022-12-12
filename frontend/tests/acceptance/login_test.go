package main

import (
	"fmt"
	"strings"
)

const loginEndpoint = "http://localhost:3001/admin/login"

func (r *Response) theUserSendsLoginRequestWithUsernameAndPassword(username, password string) error {

	//create a io.reader object, needed to send request
	payload := strings.NewReader(fmt.Sprintf(`
	{
		"username": "%s",
		"password": "%s"
	}`, username, password))

	resp := postReq(loginEndpoint, "", payload)

	r.statusCode = resp.statusCode
	r.body = resp.body
	r.err = resp.err
	r.headers = resp.headers

	// check for errors
	if resp.err != nil {
		return resp.err
	}

	// extract token
	r.token, r.err = extractAccessToken(resp.body)
	if r.err != nil {
		return r.err
	}

	return nil
}

func (r *Response) theUserShouldSeeResponse(code int) error {
	if r.statusCode != code {
		return fmt.Errorf("Expected status code = %d, recieved = %d", code, r.statusCode)
	}
	return nil
}

/*
func (r *Response) theUserSendsLoginRequestWith(dataTable *godog.Table) error {

	cellsCount := len(dataTable.Rows)
	fmt.Println("cells in a row = ", cellsCount)

	for index, row := range dataTable.Rows {
		if index == 0 {
			continue
		}
		fmt.Println("Outer = ", row)
		for id, cell := range row.Cells {
			fmt.Println("Inner, id = ", id, " , data = ", cell.Value)

		}
	}
	return nil
}
*/
