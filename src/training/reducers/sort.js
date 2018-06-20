let initialState = {
    by: 'name',
    value: 1
};

let myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {
        let {by, value} = action.sort

        return {
            by,
            value
        }
    }

    return state
};

export default myReducer