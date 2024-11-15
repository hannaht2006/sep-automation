@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling 
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

Background: 
    Given the user is on the enrollment page
    
    
    #TODO: Create scenarios that cover all the acceptance criteria

Scenario: Verify thst the program start date and refund policy are displayed

Given user is on the enrollment page
Then the program start date is displayed
Then the program refund date is displayed


Scenario: Verify that the program start date and refund date are correct
Given user is on the enrollment page
Then the displayed start date is correct
Then the displayed refund date is correct

