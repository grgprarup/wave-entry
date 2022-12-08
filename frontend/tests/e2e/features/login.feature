Feature: Login users
    As a user
    I want to login to web application
    So that I can view my details

Background:
    Given the user has navigated to the login page

Scenario: Login with valid credentials
    When the user logins with username "admin" and password "admin"
    Then the user should be redirected to the home page

Scenario: Login with invalid credentials
    When the user logins with username "<username>" and password "<password>"
    Then the user should see message "\"Invalid login\""
    Examples:
    | username   | password   |
    | not_a_user | hellothere |
    | admin      | hellothere |
    | not_a_user | admin      |