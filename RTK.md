# React Redux Toolkit

React Redux Toolkit [RTK Notes](https://www.markdownguide.org/basic-syntax/).  
React Redux Toolkit [RTK Notes](https://gemini.google.com/app/44c288e91f9070f2?hl=en-IN
).

- configureStore => Create main store  
- createSlice => Group data  
- useSelector => Get information from storage 
- useDispatch => To change the information, rooms use useDispatch to send requests (actions) to the storage room  
- reducers => When a room sends a request (action), the storage room uses special rules (reducers) to update the data  
- A reducer is a pure function that takes the current state and an action as input and returns a new state as output  
- Based on the action, the reducer creates a new state object with the necessary changes  
- It's important to remember that reducers should always return a new state object and not modify the existing state directly  
- state         => Represents the previous state of the application and state contains values from initial state
- action        => Contains information about what change should be made to the state  
- Action type(sliceName/reducerName)   => A simple message saying something happened  
- Action payload => More information about what happened  

## What is Redux Toolkit?
Imagine your app is a house. Redux Toolkit helps you manage all the stuff (data) in your house. It keeps everything organized and accessible.

### Step-by-Step Guide:
1. **Set Up Your House (Project)
Install tools** : Get the tools needed to build and manage your house (Redux Toolkit and React Redux):

```Javascript

npm install @reduxjs/toolkit react-redux

```

2. **Build a Storage Room (Redux Store)
Create a central place** : Make a special room (Redux store) to store all your stuff (app data):

```Javascript

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  // You'll add your stuff here later
});

```

3. **Organize Your Stuff (State Slices)
Divide and conquer** : Break down your stuff (data) into smaller groups (slices):

```Javascript

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart', // Name of the group
  initialState: {
    items: [] // Initial stuff in the group
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Add new item to the group
    },
    removeItem: (state, action) => {
      // Remove item from the group
    }
  }
});

```

4. **Make the Storage Room Accessible (Connect to App)
Open the door** : Let all parts of your house (app components) access the storage room (Redux store):

```Javascript

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      {/* Your app components */}
    </Provider>
  );
}

```

5. **Use Your Stuff (Access and Update State)
Get and change stuff** : In different rooms (components), you can get stuff from the storage room (useSelector) and add/remove stuff (useDispatch):

```Javascript

import { useSelector, useDispatch } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.items); // Get items from cart
}

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); // Add item to cart
  };
}

```

### Key Points  
- Redux Toolkit helps you manage your app's data efficiently.
- Think of the Redux store as a central storage place.
- Divide your data into smaller groups (slices) for better organization.
- Use useSelector to get data and useDispatch to change data.

### Remember:

- Start small and add more slices as your app grows.
- Use Redux DevTools to see what's happening in your storage room.
- By following these simple steps, you can effectively manage your app's data using Redux Toolkit.