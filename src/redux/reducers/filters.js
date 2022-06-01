const initialState = {
    category: 2,
    sortBy: {
        type: 'popular',
        order: "desc"
    },
}

const filters = (state = initialState, action) => {
    switch (action.type){
        case 'SET_SORT_BY':
            return {
                ...state, 
                sortBy: action.payload,
                category: action.payload
            };
    
    
       case 'SET_CATEGORY':
           return {
            ...state, 
            category: action.payload
           }
    
        default: 
           return state;
        }
}

export default filters;