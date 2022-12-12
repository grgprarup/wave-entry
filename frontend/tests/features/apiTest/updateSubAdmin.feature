Feature:
  As an admin
  I want to update an existing sub admin
  So that sub-admin must be updated

  Scenario: Admin updates a single sub-admin
    Given admin has created sub-admin with following credentials
      | username | hari    |
      | password | hari123 |
    When admin updates sub-admin with following credentials
      | username | hari    |
      | password | 12345   |
    Then status code should be 200
