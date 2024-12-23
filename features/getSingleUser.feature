@APITest
Feature: As a user i want to get the details of a single user after creation
    
  Scenario: Get Single User Details
    Given I hit the url with get single user API
    Then I verify the response of the get single user API
