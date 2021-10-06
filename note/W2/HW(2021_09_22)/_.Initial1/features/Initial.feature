Feature: Pop the last number

Scenario: Pop the last number in list
  Given we have a list of values
  When we pop the last value
  Then we will get the new list 