# Milestone Project 2 - Interactive Frontend Development
## FinTech Card Game Project
![Mockup](/assets/testing/smartmockups_lrrt0ndi.jpg)
### Live Site [Fintech Card Game](https://jlewis-89.github.io/Milestone-Project-2/)
---
### Repository [GitHub](https://github.com/jlewis-89/Milestone-Project-2)
---
# Table of Contents
- [Milestone Project 2 - Interactive Frontend Development](#milestone-project-2---interactive-frontend-development)
  - [FinTech Card Game Project](#fintech-card-game-project)
    - [Live Site Fintech Card Game](#live-site-fintech-card-game)
    - [Repository GitHub](#repository-github)
- [Table of Contents](#table-of-contents)
  - [Purpose](#purpose)
  - [Project Goals](#project-goals)
  - [Developer Goals](#developer-goals)
  - [Technologies Used](#technologies-used)
  - [Tools](#tools)
  - [UX](#ux)
    - [User Stories](#user-stories)
  - [UI Design](#ui-design)
    - [User Stories](#user-stories-1)
    - [Wireframe](#wireframe)
    - [Colour Scheme](#colour-scheme)
    - [Font](#font)
    - [Card Pattern Design](#card-pattern-design)
  - [Website Features](#website-features)
    - [Features](#features)
    - [Features not yet Implemented](#features-not-yet-implemented)
  - [Testing](#testing)
    - [HTML Validator](#html-validator)
    - [CSS Validator](#css-validator)
    - [JS Validator (JSHint.com)](#js-validator-jshintcom)
    - [Email JS API Testing](#email-js-api-testing)
    - [Alpha Testing](#alpha-testing)
    - [User Stories Testing](#user-stories-testing)
    - [JEST Test Suite](#jest-test-suite)
    - [Browser Testing](#browser-testing)
    - [Performance Testing with Lighthouse](#performance-testing-with-lighthouse)
  - [API's](#apis)
    - [Email JS](#email-js)
    - [Fetch API](#fetch-api)
  - [Buges \& Fixes](#buges--fixes)
    - [Remaining Bugs](#remaining-bugs)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
    - [Making a Local Clone](#making-a-local-clone)
  - [Credit](#credit)
    - [Resources](#resources)
    - [Image Assets](#image-assets)
    - [Code Re-Use](#code-re-use)
  - [Acknowledgements](#acknowledgements)
  - [Licensing](#licensing)
  - [Project Status](#project-status)

---
## Purpose

The purpose of this `project` is as part of the Code Institute Milestone Project 2 Interactive Website Development module and is not intended for commercial use. It has been developed as an opportunity to build on the Javascript module and to enable myself to showcase what I have learned up to this point in the studies and for the purpose of assessment

The purpose of this `website` is to create a card game based on fast paced execution, to find matching pairs based on a randomly selected ticker, find and match a pair of company logo's based on the ticker shown and execute the trade within the timer window. The timer will randomly generate how long the player has to find the pair, to keep the game challenging. Each pair successfully found will contribute to the players score, each missed pair will reduce the players score, if the timer hits zero the players bank will be reduced. The game is designed to create pressure on the player to stay focused on the cards and not distracted by the timer.

The website was built with the intention of creating both an enjoyable and yet challenging experience for the user.

---
## Project Goals
>| Goals | Implementation|
>|:----- |:--------------|
>| Create a fun and interactive web app | Fintech Card game is a interactive card game |
>| Advance my knowledge of Javascript | Developed a game in Javascript |
---
## Developer Goals
>| Goals | Implementation |
>| :---- | :------------- |
>| Build an Interactive webpage using JS | The project relies heavily on the JS language for functionality|
>| Develop my skills and understanding of Javascript | Use of various functions methods and API calls|
>| Test an interactive webpage | Tested with both automatic and manual techniques |
>| Deploy the project for review | Deployed to GitHub Pages |
---
## Technologies Used
* HTML
* CSS
* JavaScript
* Email JS API
* Fetch API
---
## Tools 
* Moqups
* Visual Studio Code
* WebAIM.org
* W3 Online Validators HTML/CSS
* JSHint.com JavaScript Validator
---
## UX
### User Stories
* As a user I would like to experience a fun and interactive game that is also educational and enjoyable to play
* As a user I would like to be able to navigate around the website simply and easily, with a clean and comfortable User Interface
* As a user, I would like to understand how to play the game in a simple and uncomplicated manner
* As a user, I want to be able to start a new game, so that I can play again.
---
## UI Design
### User Stories
* As a user of this website I would like a clean simple and interactive webpage to use and navigate easily
* As a user of this website I would like a pleasant visual experience without colour or sound overload

### Wireframe
![Wireframe Using Mockup](/assets/testing/Wireframe-moqups.png)

### Colour Scheme
The Background Colour of #4B4453 has been used to create contrast between the navbar in dark theme and the text in #fffff, darker themes are not only more energy efficient when playing on screens, but also less harsh on the eyes over time and reduce screen and eye fatigue.

The contrast has been checked via webAIM.org and has a contrast ratio of 9.32:1
![webAIM Contrast Results](<assets/testing/Contrast Checker WebAIM.png>)

### Font
A Playful and creative font was used to highlight the nature of the website in headings and labels the font chosen was
 sourced from [Google Fonts] and called [Rubik Glitch]

 Other fonts used include DM Sans and Sans-Serif these are used in areas that need clear information displayed such as the Ticker and Scoreboard where a more playful font may have distracted the user from the experience

### Card Pattern Design
 Pattern monster was used to create the back of card pattern, the CSS was automatically generated by the website and copied into the background-image URL.
 * [Card Pattern](https://pattern.monster/squares-and-diamonds/)

The website presents with very little on the page to start with only the instructions to incentivise the user to read the instructions before playing, and will interactively display the cards at the point the user clicks start, this is a design choice to ensure the user is not distracted by the visuals of the card before having a chance to read and understand the game instruction.

The user then may opt to hide the instructions to ensure the visual space is unhindered and to facilitate clear focus and gameplay.

The timer is central to the page to ensure it is always visible, the time is presented in bold with an increased font weight to the text around it to ensure its visibility.

## Website Features
### Features
* The webpage features a Bootstrap 5 navbar and buttons
* Cards that have been generated via the fetch API from a JSON file storing the images
* A fun a gamified font used for headings
* Colour contrasts picked and verified with UI in mind
* A dark theme to reduce eye fatigue
* Colourful pattern on the back of the cards to enhance user experience
* Lots of interactivity and user feedback alerts

### Features not yet Implemented
Ideas that where initially considered and where either not implemented due to technical restrictions, time or where considered off the critical path for the project but may always be implemented later.
* Link card data to yahoo finance API to update cards and logos / tickers with the most valuable tech stocks at the point of play.
* High score board storage of data / information to retain high scores from players, this could be done in local / session or cookie storage but would not have fully utilised the feature as it would not enable different users on different machines to compete.
* Adding and removing CSS when the player runs out of time to highlight the bank being reduced and create a sense of panic.
* Implementing modals instead of alerts, the benefit of alert is that it pauses the running functions, however time did not allow me to add modals to replace the alerts used in game.
* With more time I would have liked to add more animations and effects to enhance the UX

## Testing
Testing code is an important part of the development process, during the development of this project manual testing was carried out to ensure functionality and correct operation while in development and post development. A combination of both automated and manual testing has been utilised in this project to ensure a comprehensive review of the work before deployment.

Manual testing is usually best fitted to smaller scale project but has the advantage of highlighting UI issues. Automated testing is usually carried out by software or in this case online services and is best suited to large scale applications and is less error prone.

Manual testing has been carried out by myself during development and by a number of friends and family members in the alpha testing phase where by functionality and UI have been assessed and issues highlighted have been acknowledged and rectified.

Automated testing via online validators has been performed to ensure the code complies with current industry standards and expectations, the results of which have been compiled below.

### HTML Validator
> [W3 HTML Validator](https://validator.w3.org/)
![indexHTML Validation](<assets/testing/indexhtml validator.png>)
 Minor changes where made to correct the errors highlighted above and the code was re-tested.

> ![indexHTML Pass Validation](<assets/testing/HTML Validator Pass Index.png>)

>The contact page was then ran through the same validation process and yielded the following results
![contactHTML Validation](<assets/testing/contacthtml validator test.png>)

>The errors highlighted where then corrected and the code was then tested again, and passed.
![contactHTML Pass Validation](<assets/testing/contact HTML Validator Pass.png>)

### CSS Validator
> [CSS Validator](https://jigsaw.w3.org/css-validator/)
 has been used to generate automatic test results for the styles.css code uploaded, the results have been shown below
![stylesCSS Fail](<assets/testing/CSS Validator Fail.png>)
Imported styles from google fonts have been flagged but this is an expected outcome and not a result of the code written, a number of warnings have been flagged due to a lack of quotation marks on the font name declaration used in the code, this was then rectified and the following shows the final result
![stylesCSS Pass](<assets/testing/CSS Validator Pass.png>)

### JS Validator (JSHint.com)
> [JS Validator](https://jshint.com/) has been used to perform automated testing on the script.js file, the results of which are shown below
![scriptJS Warnings](<assets/testing/JSHint Code Validator Warnings.png>)
The pre-dominant error was the misuse of semi-colons relating to the use of arrow functions and statements within functions that had been missed. The errors have been rectified and the code re-tested with the results show below
![scriptJS Pass](<assets/testing/JSHint Code Validator Pass.png>)

### Email JS API Testing
The email-JS API has been utilised to add functionality to the contact page, this is to enable users and reviewers to highlight any bugs or suggest any improvements to the game. The code was re-used form the code institute module on API's and adapted for the purposes of this project.

> After implementing the code functional testing has taken place to ensure someone filling out the form can indeed send an email that I will receive, I therefor sent a number of test email to myself to ensure the system was functioning as intended and have attached screenshots to show the API is working correctly.
Below is the initial form inputs
![Contact Form](<assets/testing/Email JS Test.png>)
Below is the response received via email
![Email Recieved](<assets/testing/Email JS Test Result.png>)

### Alpha Testing
* As part of user testing the start button was highlighted as "not too obvious" to start the game, I have added a description in the instructions to locate and use start.

* User testing noted that the bank was highlighted as a link this has been removed, as part of the class it is still highlighted as the cursor goes over it, but does not change the cursor to highlight a clickable link.

* No issues where raised about the game play
* No issues raised regarding site performance
* No issues raised with site navigation
  
### User Stories Testing
* > "As a user I would like to experience a fun and interactive game that is also educational and enjoyable to play."
  - User testing has responded well and stated the game is interactive and enjoyable, but perhaps not as educational as originally intended.

* > "As a user I would like to be able to navigate around the website simply and easily, with a clean and comfortable User Interface."
  - User testing highlighted a number of design choices that where amended based on the feedback given to ensure the UI remains clean and uncluttered but clear and comfortable to use, this involved changing button styles and positions, including a bullet point list of instructions rather than a paragraph, and enable the CSS:hover to flip the cards rather than click to flip, it is now click to lock.
* > "As a user, I would like to understand how to play the game in a simple and uncomplicated manner."
  - User feedback highlighted the instructions paragraph was long and didn't convey the information well, this was re-written in the form of a list with bullet points as suggested, and has been received well.
* > "As a user, I want to be able to start a new game, so that I can play again."
  - Functionality was integrated to ensure once the game had finished either in a win or a loss it was able to be restarted by the user by simply clicking the start button again.

### JEST Test Suite
* As part of the development process JEST was considered as part of the automated testing strategy but I have opted on this occasion to avoid the TDD route as I am keen to develop the code and my understanding of Javascript including manually testing code through console logs and dev tools to enable me to understand the changes at a more granular level, the code has then been tested via automated online validators. I would like to produce a suite of JEST tests later on but it does not form part of the project critical path, and has therefor been omitted for this project scope.

### Browser Testing
As part of testing the webpage after deploying it to GitHub Pages the site has been opened and tested for both functionality and responsivity on the following browsers son both mobile and desktop screen sizes.
* Google Chrome / Mozilla Firefox / Microsoft Edge

### Performance Testing with Lighthouse
Lighthouse Testing was carried out on index.html and the following results where returned
![Lighthouse Initial](<assets/testing/Lighthouse Testing Indexhtml.png>)
After making minor improvements to the hmtl page, and adding a meta description and content attribute the test was re-run and the produced the following results
![Lighthouse Final](<assets/testing/Lighthouse Testing Indexhtml Improved.png>)
The lighthouse test suite marked the accessibility criteria slightly lower than I would have liked stating the contrast was not entirely visible, however as displayed else where the contrast checker on webAIM has passed the colour scheme of the site with a high contrast score, I have therefore opted to leave the colour scheme as it stands for now.

## API's
### Email JS
Email JS has been used to add functionality to the contact form enabling site users to contact the developer with any bugs or suggested improvements.

Code Institute Module on Email JS facilitated the implementation along with the Email JS Documentation and example code

The API has been successfully linked and displays a console log message and response status code after clicking the submit button to feedback whether the communication has been successful. The console log in this event has deliberately been left in to allow persons reviewing to see the functionality and act as proof of its correct use, however if this was not a marked project the console logs would remain clear and a try / catch statement would be implemented to bring the users attention to either successful or failed communication.

### Fetch API
The fetch API has been utilised in place of the traditional XMLHttpRequest as it is considered a better alternative. Fetch is promise based meaning once you call the method `fetch()` with the resource URL it requires a `.then` statement to process the data from the response object. This has been implemented for this project as it was highlighted in the YouTube resources where a number of functions where used and repurposed, but after some further research has been shown to be a useful API to learn and use for accessing and manipulating externally located resources. In the project it links to the JSON file holding the images used for the cards. 

## Buges & Fixes
* Start Stop not updating or changing state.
-Fix Timeout added - If stop double clicked game will end and update game state

* Random time generator can generate 0 as time
-Fix if statement if 0 add 10

* Timer function froze
  - Moved function call out of gameFunc

* Timer would continue counting after game play ended
  - Set clearInterval to stop timer counting down

* Shuffle deck not updating cards
  - Added line to clear innerHTML of grid container then call generate cards function

* Pressing execute button before start button or selecting cards would lead to typeError
  - Set alert to inform user to select cards before clicking execute and reload the page to clear console error log

### Remaining Bugs
* It is possible to have 3 cards flipped at the same time if selecting 1 then 2 then unselecting 1 and then selecting another 2 cards, this will result in an error being caught and the game reloading
  - No fix implemented at this stage

* It is possible to cheat by setting the gameObject.bank = 2000; and completing the next round
  - No fix implemented

## Deployment
### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

    By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original     repository by using the following steps...

    1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
    2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
    3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credit
- Email JS provided by Code Institute
- Card Game [YouTube](https://www.youtube.com/watch?v=xWdkt6KSirw)
- GitHub Deployment description provided by Code Institute

### Resources
* Youtube
* W3Schools
* MDN Documentation
* Code Institute LMS

### Image Assets
* [loader.gif](https://gifer.com/en/gifs/loader)
* [Tesla logo](https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png)
* [Microsoft](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png)
* [Apple](https://1000logos.net/apple-logo/)
* joker card image sourced from Microsoft Powerpoint icons
  
The images used in the website can be found here:
* [Loader](assets/images/loader.gif)
* [Tesla](assets/images/Tesla_Motors.png)
* [Microsoft](assets/images/Microsoft_logo.png)
* [Apple](assets/images/Apple_logo_black.png)  

### Code Re-Use
* BS5 - bootstrap navbar
* BS5 - Form Layout and Button with additional CSS
* Code Institute - Email JS Module
* YouTube Card Game

## Acknowledgements
This work has been possible with the assistance of:
* Code Institute and City of Bristol College as a joint Content & Training Provider
* My Mentor Rohit Sharma - Providing project guidance in the initial phase
* My friend Dave J Horrocks - Providing advice, wisdom and guidance, without giving me any code!

## Licensing
N/A

## Project Status
Deployed - Under Review