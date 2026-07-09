Feature: checkout products
    As a logged user
    I want to go to checkout page
    To complete checkout form

    Background:
        Given   I am on the login page
        And     I login with valid credentials
        And     I add product to cart
        And     I go to cart page
        And     I confirm the product added to cart

    Scenario: Successful checkout with valid user data
        When    I go to checkout page
        Then    I can fill the checkout form with valid data
        
    Scenario Outline: Unsuccessful checkout with invalid user data
        When    I go to checkout page
        And     I can fill the checkout form with "<Name>", "<LastName>" and "<PostalCode>"
        Then    I should see checkout "<message>"

    Examples:
        | Name | LastName | PostalCode | message                         |
        |      | Green    | 150015     |  Error: First Name is required  |
        | Ana  |          | 150015     |  Error: Last Name is required   |
        | Ana  | Green    |            |  Error: Postal Code is required |