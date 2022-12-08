Feature: Login
    As a User
    I want to log in and log out of my account
    So that I can manage student records 

    Background:
        Given the user has browsed to the login page

    Scenario: User login with valid credentials
        When the user tries to log in with username "admin" and password "admin"
        Then the user should redirect to the home page

    Scenario Outline: User login with invalid credentials
        When the user tries to log in with username "<username>" and password "<password>"
        Then the user should see message "Invalid login"
        Examples:
            | username | password |
            | admin    | 1111     |
            | user     | admin    |
            | user     | 1111     |
