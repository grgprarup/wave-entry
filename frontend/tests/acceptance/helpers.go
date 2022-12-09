package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"

	"github.com/cucumber/godog"
)

// Response is a struct to hold all reponse details
// Also allows to wrap all sorts of error
type Response struct {
	token      string
	headers    http.Header
	statusCode int
	body       []byte
	err        error
}

// getReq sends a get request and returns a Response struct
func getReq(url, token string, payload io.Reader) (resp Response) {

	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
		resp.err = err
		return
	}

	req.Header.Add("Content-Type", "application/json")
	// Auth header
	req.Header.Add("Authorization", "Bearer "+token)

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

// postReq sends a post request and returns a Response struct
func postReq(url, token string, payload io.Reader) (resp Response) {

	method := "POST"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
		resp.err = err
		return
	}

	req.Header.Add("Content-Type", "application/json")
	// Auth header
	req.Header.Add("Authorization", "Bearer "+token)

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

func extractAccessToken(body []byte) (string, error) {
	var x = struct {
		Success     string `json:"success"`
		AccessToken string `json:"accessToken"`
	}{}
	if err := json.Unmarshal(body, &x); err != nil {
		return "", err
	}

	return x.AccessToken, nil
}

// parseDataTable parses datatable having header
// The first item is used as title
func parseDataTableWithHeader(dataTable *godog.Table) (parsedData map[string][]interface{}) {

	// empty map
	data := make(map[int][]interface{})

	// loop through rows
	for _, row := range dataTable.Rows {

		// loop through columns
		for id, cell := range row.Cells {

			// The first item in the slice is the heading
			data[id] = append(data[id], cell.Value)

		}
	}
	// todo: needs more work

	return nil
}

func (r *Response) String() string {
	return fmt.Sprintf("StatusCode = %d, headers = %v", r.statusCode, r.headers)
}
