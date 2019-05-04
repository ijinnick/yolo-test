

const reducer = (state = {},action = 'LOADJOBS') => {

    switch(action.type) {
        case "SEARCHJOB":
            return {
                ...state,
                searchResults: action.json
            }

        case "RETRIEVEJOBS":
            return {
                ...state,
                searchResults: action.json,
                totalResults: action.json_count
            }
        default:
    }
    return state;
}


export default reducer;