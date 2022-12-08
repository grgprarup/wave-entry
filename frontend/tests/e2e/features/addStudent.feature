Feature: Register a new student
    As a user
    I want to register new students

    Background:
        Given the user has browsed the home page

    Scenario: Successful student registration with no ielts score
        When the administrator registers the student with following details without IELTS score
            | name          | demo          |
            | email         | demo@demo.com |
            | address       | pkr           |
            | phone         | 1111          |
            | qualification | +2            |
            | gpa           | 4.0           |
            | destination   | usa           |
            | ielts         | no            |
        Then the user should see message "Student Registration Successfull!!"

    Scenario: Successful student registration with ielts score
        When the administrator registers the student with following details with ielts score
            | name          | test          |
            | email         | test@test.com |
            | address       | pkr           |
            | phone         | 1111          |
            | qualification | +2            |
            | gpa           | 4.0           |
            | destination   | usa           |
            | ielts         | yes           |
            | listening     | 1             |
            | reading       | 2             |
            | writing       | 3             |
            | speaking      | 4             |
            | overall       | 5             |
        Then the user should see message "Student Registration Successfull!!"
