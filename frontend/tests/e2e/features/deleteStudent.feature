Feature: Delete users
    As a user
    I want to delete student records
    So that I can remove unnecessary records
 

Scenario: Delete a student
    Given the user has already logged in and navigated to the home page with username "admin" and password "admin"
    And the user with email "shyam@lol.com" has been created
    When the user clicks on corresponding delete button
    Then the user should be provided with delete successful message