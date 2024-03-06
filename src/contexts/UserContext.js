import React, { useReducer } from "react";

// Define the initial state of our context
const initialState = {
  user: null,
};

// Define a reducer function to handle state updates
function userReducer(state, action) {
  switch (action.type) {
    // In case of 'SET_USER' action, update the user in our state
    case "SET_USER":
      return { ...state, user: action.payload };
    // Throw an error for unknown actions
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// Create our context with the initial state
const UserContext = React.createContext(initialState);

// Define a provider component for our context
export function UserProvider({ children }) {
  // Use the useReducer hook to manage state with our userReducer
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Define a function to dispatch the 'SET_USER' action
  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  // Render the context provider and pass the current state and dispatch function as its value
  return (
    <UserContext.Provider value={{ user: state.user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Export our context so other components can use it
export default UserContext;
