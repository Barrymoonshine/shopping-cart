# Shopping Cart

![](https://github.com/Barrymoonshine/shopping-cart/blob/main/public/shopping-cart-demo.gif)

[Live demo](https://barrymoonshine.github.io/shopping-cart/)

## Summary

The Smelly Cheese Co. is a fake e-commerce store in which the user can purchase all the pungent cheeses they desire! The user can browse a selection of cheese, select the quantity they wish to purchase and then add these to their cart. Prior to checking-out (disabled), the user can amend the quantity and products in their cart.

This app was built using React functional components, specifically utilising React Router v6 to route between pages, the `useReducer` hook to centrally manage state, and the `createContext` and `useContext` hooks to make state available throughout the application.

## Key learning points

- **React Router** managing redirection with React Router to move the user between pages without refreshing the application, including how to create a 404 redirect and how to use NavLink and the active css pseudo class to visually inform the user as to the page they are on
- **useReducer** to centrally manage state using a reducer function containing a switch statement to provide explicit control over what action is being carried out, and a global ACTIONS variable to eliminate the need to hard-code switch cases and reduce the risk of inconsistencies and errors across files
- **createContext** as a way to make state available throughout the application and remove the need for prop drilling between multiple child components
- **useContext** to subscribe to the context/state as needed
- **Custom hooks** using the custom hooks useShopState and useShopDispatch to make state and dispatch available throughout the application and execute update to state based on the users interactions
- **Object spread operator** to shallow copy an object and define new values for existing properties by using the same key to overwrite the previous value
