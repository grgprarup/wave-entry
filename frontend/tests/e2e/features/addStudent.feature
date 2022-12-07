Feature: Add new students
    As a user
    I want to add new students
    So that I can view or manipulate their details later

Background:
    Given the user has logged in with username "admin" and password "admin"

Scenario Outline: Add a new valid student with no ielts
    When the user tries to add a student with details
    | name          | Shyam Sharma  |
    | email         | shyam@lol.com |
    | address       | Nowhere       |
    | phone         | 222222222     |
    | qualification | masters       |
    | cgpa          | 3.8           |
    | destination   | usa           |
    | ielts         | no            |
    Then the user should see message "Student Registration Successfull!!"

Scenario Outline: Add a new valid student with ielts
    When the user tries to add a student with details
    | name          | Ram Sharma  |
    | email         | ram@lol.com |
    | address       | Somewhere   |
    | phone         | 22222111    |
    | qualification | bachelors   |
    | cgpa          | 3.6         |
    | destination   | australia   |
    | listening     | 6.0         |
    | reading       | 6.0         |
    | writing       | 6.0         |
    | speaking      | 6.0         |
    | overall       | 6.0         |
    Then the user should see message "Student Registration Successfull!!"
