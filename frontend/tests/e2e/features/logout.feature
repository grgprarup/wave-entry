Feature: Logout users
    As a user
    I want to logout of the web application
    So that I can end my session


Scenario: Successful logout
    Given the user has logged in with username "admin" and password "admin"
    When the user logs out
    Then the user should be to the login page
