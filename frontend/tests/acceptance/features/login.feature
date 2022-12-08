Feature: Login users with rest api
    As a user
    I want to login using rest api
    So that I can utilize rest api

    Scenario: Login with valid credentials
#        When the user sends login request with username "admin" and password "admin"
        When the user sends login request with
            | username | password |
            | admin    | admin    |

        Then the user should see response 200