# Trivia!
A trivia game made to test a user's knowledge of the first initials used by famous literary figures in history.  


# Installation Instructions
To set up the app locally on your own system: 

1. 


# Built With
* Vanilla JavaScript 


# Approach taken 
* HTML/CSS: 
    - I broke the page into three sections and then used Flexbox to arrange them on the page. Then I used flex-wrap because it provided a better-looking arragement of the header + questions.
    - I put the multiple choice questions into a 'class' so that their formatting and DOM manipulation would be synchronized across questions. 

* JavaScript: 
    - Created an array of 'correctChoice' buttons, Set starting score to 0  
    - Created a 'for-loop' that loops through the HTML and adds an event listener for each button in 'correctChoices array. 
    - Created a function that adds 10 points when 'correctChoice' buttons are clicked. There is no event if the user clicks a wrong choice. 


# Unsolved problems 
- Would have liked to add a feature where something happens to notify users of a wrong choice clicked (subtract points, unable to alter click choice, etc.)

- A 'submit' button for user to click when the test is completed. 

- A special screen that appears when users have completed the quiz ("Looks like you got ('#') out of ('#') correct.)

- Time-based scoring

- Track scores across games (even if the page is reloaded)

- Allow users to compete against each other on a high-score board

# Special Thanks..
* Julian - CSS inspiration
* Gwen - JavaScript help 
* Justin - JavaScript help 