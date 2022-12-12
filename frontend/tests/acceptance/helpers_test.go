package main

import (
	"io"
	"reflect"
	"testing"
)

func Test_getReq(t *testing.T) {
	type args struct {
		url     string
		token   string
		payload io.Reader
	}
	tests := []struct {
		name     string
		args     args
		wantResp Response
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if gotResp := getReq(tt.args.url, tt.args.token, tt.args.payload); !reflect.DeepEqual(gotResp, tt.wantResp) {
				t.Errorf("getReq() = %v, want %v", gotResp, tt.wantResp)
			}
		})
	}
}
