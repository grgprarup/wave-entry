package main

import "fmt"

const listAllStudentsURL = "http://localhost:3001/student"

func (r *Response) aUserSendsRequestToListAllStudentsEndpoint() error {

	resp := getReq(listAllStudentsURL, r.token, nil)

	// copy the struct memebers
	// find a better way to copy them,
	// Pointer or a helper functions??
	r.body = resp.body
	r.headers = resp.headers
	r.statusCode = resp.statusCode
	r.err = resp.err

	if resp.err != nil {
		fmt.Println(resp.err.Error())
		return nil
	}

	return nil
}
