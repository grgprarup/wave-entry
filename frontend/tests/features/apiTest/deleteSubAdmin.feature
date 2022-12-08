Feature:
  As an admin
  I want to delete sub-admin
  so that sub-admin must be deleted

  Scenario: Admin deletes a single sub-admin
    Given admin creates sub-admin with following credentials
      | username | hari    |
      | password | hari123 |
    When admin deletes sub-admin with username "hari"
    Then status code should be 200
