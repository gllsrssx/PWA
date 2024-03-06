// Import necessary hooks from React
import React, { useReducer } from "react";

// Define the initial state of our context
const initialState = {
    movies: [],
};

// Define a reducer function to handle state updates
function movieReducer(state, action) {
    switch (action.type) {
        // In case of 'SET_MOVIES' action, update the movies array in our state
        case "SET_MOVIES":
            return { ...state, movies: action.payload };
        // Throw an error for unknown actions
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}

// Create our context with the initial state
const MovieContext = React.createContext(initialState);

// Define a provider component for our context
export function MovieProvider({ children }) {
    // Use the useReducer hook to manage state with our movieReducer
    const [state, dispatch] = useReducer(movieReducer, initialState);

    // Define a function to dispatch the 'SET_MOVIES' action
    const setMovies = (movies) => {
        dispatch({ type: "SET_MOVIES", payload: movies });
    };

    // Render the context provider and pass the current state and dispatch function as its value
    return (
        <MovieContext.Provider value={{ movies: state.movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
}

// Export our context so other components can use it
export default MovieContext;