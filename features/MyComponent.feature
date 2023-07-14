Feature: MyComponent

  Scenario: Display input value in the second readonly input
    Given I am on the MyComponent page
    When I enter "Hello, World!" in the input field
    And I click the "Display Value" button
    Then I should see "Hello, World!" in the second readonly input
