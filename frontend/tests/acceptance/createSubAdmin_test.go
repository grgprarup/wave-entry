package main

import (
	"fmt"
	"strings"
)

const createSubAdminURL = "http://localhost:3001/admin/"

func (r *Response) theUserCreatesASubadminWithUsernameAndPassword(username, password string) error {
	//create a io.reader object, needed to send request
	payload := strings.NewReader(fmt.Sprintf(`
	{
		"username": "%s",
		"password": "%s"
	}`, username, password))

	resp := postReq(createSubAdminURL, r.token, payload)

	r.statusCode = resp.statusCode
	r.body = resp.body
	r.err = resp.err
	r.headers = resp.headers

	// check for errors
	if resp.err != nil {

		return resp.err
	}

	return nil
}
