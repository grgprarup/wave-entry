Feature: View Student Details
    As an admin
    I want to view student details

    Scenario: View student details
        Given the administrator has browsed to the homepage with username "admin" and password "admin"
        When the administrator tries to view the student details with email "temp@temp.com"
        Then the individual details should be displayed