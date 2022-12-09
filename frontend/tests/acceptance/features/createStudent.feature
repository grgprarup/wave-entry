Feature: Create students
    As an admin
    I want to create ..
    So that I ...

    Scenario: Create new students
        Given the user sends login request with username "admin" and password "admin"
        When the user creates following student
            | name   | email            | phone   | destination | qualification | address   | percentage | ielts | reading | writing | listening | speaking | overallband |
            | Pushpa | phuspa@gmail.com | 1111111 | USA         | +2            | Somewhere | 3.5        | yes   | 7.0     | 7.0     | 7.0       | 7.0      | 7.0         |
        Then the user should see response 201