Feature: Admin login
  As an admin
  I want to login
  So that I can view home page

  Background:
    Given admin has navigated to login page

  Scenario: Login with valid credentials
    When admin login with following credentials
      | username | password |
      | admin    | admin    |
    Then admin should be navigated to home page

  Scenario Outline: Login with invalid credentials
    When admin login with following credentials
      | username   | password   |
      | <username> | <password> |
    Then error message should be shown
      | username | password |
      | user     | user     |
      |          | admin    |
      | admin    |          |
      |          |          |
