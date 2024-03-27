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

## LIVE VIEW
To view the live website, visit: www.italianrestaurant.fairuse.org

## SCREENSHOTS
Home page
<img width="1268" alt="Screenshot 2024-03-26 205535" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/9bcc0066-d267-4ad0-ad17-e4016b8b3d14">
<img width="1267" alt="Screenshot 2024-03-26 205553" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/95ad3925-f29e-453a-9f26-674abcb2ab74">

Login page
<img width="1274" alt="Screenshot 2024-03-26 205602" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/19f5bbf1-5efc-45e1-96e4-e5789b82e63a">

Sign Up page
<img width="1280" alt="Screenshot 2024-03-26 205617" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/f28424cb-4b21-46d8-95a8-86c885a609a3">

Menu
<img width="1278" alt="Screenshot 2024-03-26 205636" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/a3710d5a-0441-42c5-816c-ec382e2f83a6">
<img width="1277" alt="Screenshot 2024-03-26 205650" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/a8763d6e-e60e-4070-8194-d7efcf161a4b">

Food Card
<img width="1279" alt="Screenshot 2024-03-26 205704" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/9f70459c-94f0-4616-bf11-681bd4f78050">

Edit Cart
<img width="1280" alt="Screenshot 2024-03-26 205801" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/77a63a5d-1207-487d-ae64-c4fcc29fdc47">

Checkout page
<img width="1278" alt="Screenshot 2024-03-26 205813" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/acb4940f-ae2c-41da-98d6-f0dcd38e5df8">

Profile sidebar
<img width="1280" alt="Screenshot 2024-03-26 205827" src="https://github.com/altomizawa/food-ordering_frontend/assets/45319659/4f4cadca-b0a8-4706-a7ab-0eaf81c9adb9">

## TECHNOLOGIES
HTML, CSS, JAVASCRIPT, REACT
