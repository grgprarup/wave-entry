package main

import (
	"bytes"
	"encoding/json"
	"fmt"

	"github.com/cucumber/godog"
	"github.com/rdumont/assistdog"
)

const createStudentURL = "http://localhost:3001/student/"

func (r *Response) theUserCreateFollowingStudents(dataTable *godog.Table) error {

	// assitdog instance , helps to parse datatable
	assist := assistdog.NewDefault()

	data, err := assist.ParseMap(dataTable)
	if err != nil {
		fmt.Println(err)
		return err
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println(err)
		return err
	}

	// create a byte buffer
	payload := bytes.NewBuffer(jsonData)
	resp := postReq(createStudentURL, r.token, payload)

	r.body = resp.body
	r.headers = resp.headers
	r.statusCode = resp.statusCode
	r.err = resp.err

	if resp.err != nil {
		fmt.Println(resp.err.Error())
		return resp.err
	}

	return nil
}
