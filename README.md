# Age of Empires II Unit Database by [@udenizdemirbilek](https://github.com/udenizdemirbilek)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Used Technologies

* React.JS
* React Router
* React Bootstrap
* Redux-Saga
* Material-UI
* Netlify https://ageofempires-react.netlify.app/

## Pages

### Home Page

Static home page with an image of my workstation. 

**Header:**
Displays NavLinks to navigate to other pages.

### Units Page

Reads Redux state and displays a list of units according to selected filters.

**Age Tab:**
Displays the selected age by the user as well as dispatching actions to Redux-Saga to update the selected age. 

**Range Slider:**
Displays whether the user has activated a cost filter and the range of the filter. 
Dispatches actions to Redux-Saga to update the selected range.

**UnitRow:**
Reads data from parent component Units as props and displays a unit row with the unit's id, name, age, and cost.

### Details Page

Uses useParams to get the unit id from the url. Using unit id, reads the unit data from Redux state and displays it.
Uses ternary operators to check if the corresponding field is empty or not.

### Sagas.js

Listens for actions dispatched by the user and dispatches actions to Redux-Saga to update the Redux state.

## Testing

Unfortunately testing couldn't be implemented due to lack of time.
Definitely will try to implement it in the future. Would be my first priority if I had the time.

## SASS

Unfortuantely SASS couldn't be implemented due to lack of time.
Definitely will try to implement it in the future.

## Netlify

Redirects are set up on Netlify so routes work on Netlify.

## React-Router

Not found page is set up so user is redirected to the home page if the url is invalid.