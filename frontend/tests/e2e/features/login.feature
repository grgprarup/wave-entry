Feature: Login users
    As a user
    I want to login to web application
    So that I can view my details


Scenario: Login with valid credentials
    Given the user has navigated to the landing page
    When the user tries to login with username "admin" and password "admin"
    Then the user should be redirected to the home page

Scenario: Login with invalid credentials
    Given the user has navigated to the landing page
    When the user tries to login with username "<username>" and password "<password>"
    Then the user should be warned about invalid credentials
    Examples:
    | username | password |
    | not_a_user1 | hellothere |
    | admin | hellothere |

Scenario: Logout a logged in user
    Given the user has already logged in and navigated to the home page with username "admin" and password "admin"
    When the user clicks on logout
    Then the user should be logged out and redirected to landing page
