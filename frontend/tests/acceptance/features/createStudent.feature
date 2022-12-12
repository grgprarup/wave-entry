Feature: Create students
    As an admin
    I want to create ..
    So that I ...

    Scenario: Create new students
        Given the user sends login request with username "admin" and password "admin"
        When the user creates following student
            | name          | Pushpa           |
            | email         | phuspa@gmail.com |
            | phone         | 1111111          |
            | destination   | USA              |
            | qualification | +2               |
            | address       | Somewhere        |
            | percentage    | 3.5              |
            | ielts         | yes              |
            | reading       | 7.0              |
            | writing       | 7.0              |
            | listening     | 7.0              |
            | speaking      | 7.0              |
            | overallband   | 7.0              |
        Then the user should see response 201
