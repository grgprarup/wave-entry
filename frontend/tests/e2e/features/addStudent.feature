Feature: Add new students
    As a user
    I want to add new students
    So that I can view or manipulate their details later

Background:
    Given the user has already logged in and navigated to the home page with username "admin" and password "admin"

Scenario Outline: Add a new valid student with no ielts
    When the user tries to add a student with name "<name>", email "<email>", address "<address>", phone "<phone>", qualification "<qualification>", cgpa "<cgpa>", destination "<destination>" and ielts "<ielts>"
    Then the user should be provided with add successful message
    Examples:
    | name | email | address | phone | qualification | cgpa | destination | ielts |
    | Shyam Sharma | shyam@lol.com | Nowhere | 222222222 | masters | 3.8 | usa | no |
    | Ram Sharma | ramu@lol.com | Somewhere | 111111111 | bachelors | 3.5 | australia | no |

Scenario Outline: Add a new valid student with ielts
    When the user tries to add a student with name "<name>", email "<email>", address "<address>", phone "<phone>", qualification "<qualification>", cgpa "<cgpa>", destination "<destination>" and scores of listening "<listening>", reading "<reading>", writing "<writing>", speaking "<speaking>" and overall "<overall>" 
    Then the user should be provided with add successful message
    Examples:
    | name | email | address | phone | qualification | cgpa | destination | listening | reading | writing | speaking | overall |
    | John doe | john@lol.com | Nowhere-xyz | 222222299 | masters | 3.5 | usa | 6.0 | 6.0 | 6.5 | 6.5 | 6.0 |
    | Dell Boy | dell@lol.com | Somewhere-xyz | 111111199 | bachelors | 3.6 | australia | 5.0 | 5.0 | 6.5 | 6.5 | 5.5 |
