import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    properties: [
        { 
            id: 1, 
            name: 'Single Family HOuse', 
            location: 'Queens, NY', 
            arv: 'Frontend Dev', 
            fee: '$100' 
        }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeProperty(id) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    };

    function addProperty(properties) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: properties
        });
    };

    function editProperty(properties) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
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