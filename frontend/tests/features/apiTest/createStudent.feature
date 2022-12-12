Feature: Creating student

  Scenario Outline: Admin creates multiple student
    Given admin logs in with following credentials
      | username | admin   |
      | password | admin   |
    When admin creates student with following details
      |name  |email  |phone  |destination  |qualification  |address  |percentage  |ielts  |reading  |writing  |listening  |speaking  |overallband  |
      |<name>|<email>|<phone>|<destination>|<qualification>|<address>|<percentage>|<ielts>|<reading>|<writing>|<listening>|<speaking>|<overallband>|
    Then status code should be 201
    And student with following details should be created
      |name  |email  |phone  |destination  |qualification  |address  |percentage  |ielts  |reading  |writing  |listening  |speaking  |overallband  |
      |<name>|<email>|<phone>|<destination>|<qualification>|<address>|<percentage>|<ielts>|<reading>|<writing>|<listening>|<speaking>|<overallband>|
    Examples:
      |name  |email           |phone     |destination  |qualification  |address  |percentage  |ielts  |reading  |writing  |listening  |speaking  |overallband  |
      |David |david@gmail.com |9878787878|australia    |bachelors      |Butwal   |3.6         |yes    |7        |7        |7          |7         |7            |
#      |John  |john@gmail.com  |9876543210|usa          |+2             |Pokhara  |3.4         |no     |         |         |           |          |             |

