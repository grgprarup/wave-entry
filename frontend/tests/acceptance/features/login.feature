Feature: Login users with rest api
    As a user
    I want to login using rest api
    So that I can utilize rest api

    Scenario: Login with valid credentials
        When the user sends login request with username "admin" and password "admin"
        # | username | password |
        # | admin    | admin    |
        Then the user should see response 200

    Scenario Outline: Login with invalid credentials
        When the user sends login request with username "<username>" and password "<password>"
        Then the user should see response 401
        Examples:
            | username | password     |
            | admin    | not_a_secret |
            | user     | not_a_secret |

    # Scenario: Login with xyz
        # When the user sends login request with
        # | username | password |
        # | admin    | admin    |
        # Then the user should see response 200

