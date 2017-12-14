# Trivia!
A trivia game to test someone's knowledge of the first initials used by famous literary figures in history.  

(https://greatcambino.github.io/Trivia/)

# Built With
* Vanilla JavaScript 


# Approach taken 
* HTML/CSS: 
    - Broke the page into three sections and then used Flexbox to arrange them on the page. Then applied flex-wrap because it provided a better-looking arragement of the header + questions.
    - Placed the multiple choice questions into a 'class' so that their formatting and DOM manipulation would be synchronized across questions. 

* JavaScript: 
    - Created an array of 'correctChoice' buttons, Set starting score to 0  
    - Created a 'for-loop' that loops through the HTML and adds an event listener for each button in 'correctChoices array. 
    - Created a function that adds 10 points when 'correctChoice' buttons are clicked. There is no event if the user clicks a wrong choice. 
        - Within that function I also added a feature that disables 'correctChoice' buttons once they are clicked. 


# Unsolved problems 
- A 'submit' button for user to click when the test is completed. 

- Time-based scoring

- Track scores across games (even if the page is reloaded)

- Allow users to compete against each other on a high-score board
