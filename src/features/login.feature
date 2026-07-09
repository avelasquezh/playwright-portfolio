Feature: User Authentication
  As a registered user
  I want to login to the Saucedemo application
  So that I can access my account

  Background:
    Given   I am on the login page

  Scenario: Successful login with valid credentials
    When    I login with valid credentials
    Then    I can see the products page

  Scenario: Login fails with locked credentials
    When    I login with locked user
    Then    I can see the error message

  Scenario Outline: Login fails with invalid credentials
    When    I login with "<username>" and "<password>"
    Then    I should see login "<message>"

    Examples:
      | username         | password             | message                                                                    |
      | locked_out_user  | secret_sauce         | Epic sadface: Sorry, this user has been locked out.                        |
      | standard_user    | wrong_password       | Epic sadface: Username and password do not match any user in this service  |