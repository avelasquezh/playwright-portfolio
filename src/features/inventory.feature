Feature: inventory products
    As a logged user
    I want to add product to cart
    To be able to checkout the product

    Background:
        Given   I am on the login page
        And     I login with valid credentials
        And     I can see the products page

    Scenario: add product to cart and show badge count
        When    I add product to cart
        Then    I can see the cart badge count

    Scenario Outline: add multiple products to cart and show badge count
        When    I add "<productName1>" and "<productName2>" to cart
        Then    I can see the cart badge count is "<count>"

    Examples:
      | productName1          | productName2          | count  |
      | Sauce Labs Backpack   | Sauce Labs Bike Light | 2      |