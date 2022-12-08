Feature: Logout
    As an admin
    I want to log out of the system

    Scenario: Successful logout
        Given the user has browsed to the home page
        When the user logs out of the homepage
        Then the user should redirect to the login page