Feature: Admin login

  Scenario: Logging in as super-admin
    When admin logs in with following credentials
      | username | admin    |
      | password | admin   |
    Then status code should be 200

  Scenario: Logging in as sub-admin
    When sub-admin logs in with following credentials
      |username| password|
      |ram     |ram123   |
      |hari    |hari123  |
    Then status code should be 200
