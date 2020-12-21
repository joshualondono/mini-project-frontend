export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                properties: state.properties.filter(property => property.id !== action.payload)
            };
        case 'ADD_EMPLOYEES':
            return {
                ...state,
                properties: [...state.properties, action.payload]
            };
        case 'EDIT_EMPLOYEE':
            const updatedProperty = action.payload;

            const updatedPropertys = state.properties.map(property => {
                if (property.id === updatedProperty.id) {
                    return updatedProperty;
                }
                return property;
            });

            return {
                ...state,
                properties: updatedPropertys
            };
        default: return state;
    }
}