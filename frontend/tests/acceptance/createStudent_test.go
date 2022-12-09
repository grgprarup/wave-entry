package main

import (
	"fmt"
	"strings"

	"github.com/cucumber/godog"
)

const createStudentURL = "http://localhost:3001/student/"

func (r *Response) theUserCreateFollowingStudents(dataTable *godog.Table) error {

	// Create a map to store the data
	data := make(map[int][]interface{})

	// Horizontal data table parsing
	// loop through rows
	for _, row := range dataTable.Rows {

		// loop through columns
		for id, cell := range row.Cells {

			// The first item in the slice is the heading
			data[id] = append(data[id], cell.Value)
		}
	}

	payloadString := new(strings.Builder)
	// Write the first { for json
	payloadString.WriteString(`{`)

	jsonFields := []string{}
	for _, val := range data {

		jsonField := ""
		for id, item := range val {
			if id == 0 {
				jsonField += fmt.Sprintf("\"%s\":", item)
				continue
			}
			jsonField += fmt.Sprintf("\"%v\"", item)

		}
		jsonFields = append(jsonFields, jsonField)
	}

	// write to payload
	payloadString.WriteString(strings.Join(jsonFields, ","))
	// the ending } for json
	payloadString.WriteString(`}`)

	// create Reader required to perform request
	payload := strings.NewReader(payloadString.String())

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
