Feature: logout
    As loged user
    I want logout to the Saucedemo application
    So i can finish the session

    Background:
        Given   I am on the login page
        And     I login with valid credentials
        And     I am loged in the Saucedemo application

    Scenario:
        When    I select logout option
        Then    I can finish the session

