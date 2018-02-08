# Trivia!
A trivia game to test a user's knowledge of famous writers who go by their initials. 

(https://greatcambino.github.io/Trivia/)

# Built With
* (Vanilla) JavaScript 


# Approach taken 
* HTML/CSS: 
    - Broke the page into three sections and then used Flexbox to arrange them on the page. Then I applied flex-wrap because it provided a more pleasing arrangement of the header + questions.
    - Placed the multiple choice questions into a 'class' of their own so that their formatting and DOM manipulation would be synchronized across questions. 

* JavaScript: 
    - Created an array of 'correctChoice' and 'wrongChoice' buttons; set starting score to 0  
    - Created two 'for-loops' that cycle through the HTML and add an event listener for each button in the 'correctChoices array. 
    - Created a function that adds 10 points whenever 'correctChoice' buttons are clicked. Wrong choices turn red when clicked. 
        - Within that function I also added a feature that disables 'correctChoice' buttons and turns them green if they are clicked. 
    - Created a separate function that turns 'wrongChoice' buttons red if they are clicked. 


# Future features 
- Time-based scoring

- Track scores across games (even if the page is reloaded)

