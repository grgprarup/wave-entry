Feature: Login
    As a User
    I want to log in and log out of my account
    So that I can manage student records 

    # Background:
    #     Given the user has browsed the login page       

    Scenario: Successful login
        Given the user has browsed the login page
        When the user logs in with username "admin" and password "admin"
        Then the user should redirect to the home

    Scenario Outline: Unsuccessful login
        Given the user has browsed the login page
        When the user logs in with username "<username>" and password "<password>"
        Then the user should see the invalid login message
        Examples:
            | username | password |
            | admin    | 1111     |
            | user     | admin    |
            | user     | 1111     |

    Scenario: Successful logout
        Given the admin has browsed the home page
        When the admin logs out of the homepage
        Then the admin should redirect to the login page