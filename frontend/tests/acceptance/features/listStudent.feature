Feature: List one or more students
    As an admin
    I want to ..
    So that ..

    Scenario: List all students
        Given the user sends login request with username "admin" and password "admin"
        When a user sends request to list all students endpoint
        Then the user should see response 200

# Scenario: List a student
# Given the user sends login request with username "admin" and password "admin"
# And the user creates following student
# | name   | email            | phone   | destination | qualification | address   | percentage | ielts | reading | writing | listening | speaking | overallband |
# | Pushpa | phuspa@gmail.com | 1111111 | USA         | +2            | Somewhere | 3.5        | yes   | 7.0     | 7.0     | 7.0       | 7.0      | 7.0         |
# When a user sends request to list above student
# Then the user should see response 200

