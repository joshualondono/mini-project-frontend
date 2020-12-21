import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'



const initialState = {
    properties: [
        { 
            id: 1, 
            name: 'Single Family HOuse', 
            location: 'Queens, NY', 
            arv: 'house for sale amazing!!', 
            fee: '$100' 
        }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeProperty(id) {
        dispatch({
            type: 'REMOVE_PROPERTY',
            payload: id
        });
    };

    function addProperty(properties) {
        dispatch({
            type: 'ADD_PROPERTIES',
            payload: properties
        });
    };

    function editProperty(properties) {
        dispatch({
            type: 'EDIT_PROPERTY',
            payload: properties
        });
    };

    return (<GlobalContext.Provider value={{
        properties: state.properties,
        removeProperty,
        addProperty,
        editProperty
    }}>
        {children}
    </GlobalContext.Provider>);
}