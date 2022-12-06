Feature:
  As an admin
  I want to create a sub-admin
  So that sub-admin must be created

  Scenario: Admin creates a single sub admin
    When admin creates sub admin with following credentials
      | username | hari    |
      | password | hari123 |
    Then status code should be 201
    And the created sub-admin username should be "hari"