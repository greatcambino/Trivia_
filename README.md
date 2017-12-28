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
    - Created an array of 'correctChoice' and 'wrongChoice' buttons, Set starting score to 0  
    - Created two 'for-loops' that cycle through the HTML and add an event listener for each button in 'correctChoices array. 
    - Created a function that adds 10 points when 'correctChoice' buttons are clicked. Wrong choices turn red when clicked. 
        - Within that function I also added a feature that disables 'correctChoice' buttons once they are clicked. 


# Future features 
- Time-based scoring

- Track scores across games (even if the page is reloaded)

