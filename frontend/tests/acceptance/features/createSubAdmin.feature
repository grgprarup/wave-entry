Feature: Create sub-admin
    As an admin
    I want to create sub-admin
    So that I can distribute work-load amongst sub-admins

    Scenario: Create a new sub-admin
        Given the user sends login request with username "admin" and password "admin"
        When the user creates a sub-admin with username "sub-admin1" and password "sub-admin1"
        Then the user should see response 201