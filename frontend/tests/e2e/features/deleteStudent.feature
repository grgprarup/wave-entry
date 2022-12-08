Feature: Delete student
    As an admin
    I want to delete student records

    Scenario: Delete student successful
        Given the administrator has browsed to the home page with username "admin" and password "admin"
        When the administrator deletes the student record with email "demo@demo.com"
        Then the administrator should see the message "User Delete Successfull!!"