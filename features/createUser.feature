@APITest
Feature: As a user i want to test reqres API using axios

  Scenario: Create a User
    Given I hit the url via create user API
    Then I verify the response of the create user API
    And I get the id of the user created
