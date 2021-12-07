Che Vino

For my capstone project I created a web application called Che Vino – translation from Italian: What Wine!

My idea came from the wine world can be overwhelming with all the many choices that it provides. There are hundreds of different varieties of wine and I am usually the one standing in the wine section unsure of what wine to choose.

Che Vino is designed to help the user discover new wines, read reviews, and check out wine scores. It helps take the guess work out of making that wine decision.

It was built using React, Sass, Node, and Express

![che-vino-welcome-page-mobile](https://user-images.githubusercontent.com/82847249/145069648-5a3179ff-2725-4cf0-a66b-572aa40c22a4.jpg)

Project Overview

1.1 Description

An web application that allows the user to display a random bottle of wine based on the variety of their choice. E.g. Red, White, Port, Rose, Sparkling, and Dessert wine.

1.2 Problem

Purchasing wine can be overwhelming, due to the variety of wines on the shelves. The Che Vino takes the guess work out of making that decision. Che Vino determines a bottle of wine at random. The user has the choice of the different types of wine available, such as Red, White, Rose, Port, Dessert, and Sparkling. The user will receive the name of the wine along with an image, location of the winery, and the year.

1.3 User Profile

Anyone who enjoys wine. This will give them a fun way of trying different wines. The user can also search for a particular wine by year, see images of the wine, and check out or leave a review/comment.

![image](https://user-images.githubusercontent.com/82847249/145070211-f97e1463-1508-4eea-8c53-dc343c72a493.png)

1.4 Functionality

Front-End:

Router for the main header, and nested router for sub-header in 'search' page
Using axios GET, list of wines, reviews and comments - generated from back-end and displayed on front-end.
users can post comments

Back-End:

Various routes for /wines, /review, /wines/reds, /wines/whites, /wines/port, /wines/dessert, /wines/sparkling, /wines/rose
GET, GET/:id, POST


1.5 Demo


![che-vino-wine-generator-page-mobile](https://user-images.githubusercontent.com/82847249/145074800-c3e75edd-2a86-4bf2-a3f9-9e3a550b92eb.jpg)


![che-vino-contact-page-mobile](https://user-images.githubusercontent.com/82847249/145074855-c17dc139-81c3-4df8-b7b8-cdadcd01b6e2.jpg)


![che-vino-search-page-mobile](https://user-images.githubusercontent.com/82847249/145074880-bae04c77-5fc8-44aa-bbdf-68fa9986df39.jpg)


![che-vino-top-20-page-mobile](https://user-images.githubusercontent.com/82847249/145074892-f4cd6e2a-ad54-4ec0-89dc-99eb52476555.jpg)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
