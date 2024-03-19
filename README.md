# This is the front end part of a restaurant food delivery app.

## FUNCTIONALITIES

1. Sign up page (/signup)
   User has to sign up in order to place order
   Signing up involves sending a email, name and password. All of them are validated before being sent to the server using validator and regex.
   After signing up, the user is required to LOGIN.

2. Login
   If authentication fails, user gets a message, otherwise he gets a token which is used to authorize with the server so he gets the user data back.
   After successfull login, the logged in state persists for 5 hours or until the user signs out of the application.

3. Authorized area
   There are 2 unprotected routes (/signin and /signup) all the others are protected.

4. Inside the app
   a) Menu is pulled from an api that I created. All the data is fetched once.
   b) User can add and remove items from cart
   c) The cart is stored in Local Storage, so if the user leaves and comes back, the items are still there.
   d) If the user checks out, he gets a confirmation message and the localStorage is emptied.
   e) The sidebar is used for seeing User profile and editing it. Editing includes profile name and picture.

## SCRIPTS

To start the project:
npm run dev

To build:
npm run build

## IMPORTANT

The backend server is running on a FREE tier of Render, so when you run the app the first access can delay 50 seconds or more, but after that, all the requests will be processed immediately.

## TECHNOLOGIES

HTML, CSS, JAVASCRIPT, REACT
