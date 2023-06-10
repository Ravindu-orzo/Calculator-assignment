# Calculator-assignment 
This repo holds the files of an assignment given in web development course. Had to edit and restore a lot of code so decided to use git version control to make it less tedious. 

![screenshot of the calculator i made using html,css,bootstrap and javascript](https://i.imgur.com/yu67WOd.png)

## Here's a quick rundown of the complicated lock mechanism implemented in the calculator using Javascript

### Operator-lock and numpad-lock:
These prevent the user from 
1. entering more than one operator at the same time
2. entering an operator first 

### decimalLock1, decimalLock2 and evaluatorLock:
These prevent user from
1. entering more than one operator at the same time
2. hitting the equal key after entering a decimal point and not entering a number
3. using operators after entering a decimal point

decimalLock 1 is assigned to the operator panel & decimalLock 2 is assigned to the numpad. these two work together to make the user enter a number before entering an operator, after a decimal point has been placed.

## Features
## It is responsive!
Use of flexbox allows the two flex items; calculator and history panel to automatically arrange themselves vertically as the screen width decreases. This allows an optimized layout for both desktop and mobile!

![Screenshot of caculator webpage on mobile](https://i.imgur.com/fk9otFL.jpg)

## It has a scrollable log of your calculations
The log keeps track of your calculations, in case you needed refer to your past calculations in the future.

![gif of scrolling the history panel](https://i.imgur.com/TAtCTrC.gif)

## It looks great on dark theme!
The color choice makes it look great on both light theme and dark theme.

![screenshot of calculator webpage in dark theme](https://i.imgur.com/lCMTURk.jpg)
