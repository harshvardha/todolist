const initialState = {
    items: []
}

const reducer = async (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            try {
                await action.contract.addItem(action.payload)
                return {
                    items: [...state, action.payload]
                }
            } catch (error) {
                console.log(error)
                window.alert("cannot add item")
            }
            break
        case "REMOVE_ITEM":
            try {
                await action.contract.removeItem(action.payload)
                return {
                    items: state.filter(item => item !== action.payload)
                }
            } catch (error) {
                console.log(error)
                window.alert("cannot remove item")
            }
            break
        case "GET_ITEMS":
            try {
                const listItems = await action.contract.getItems()
                return {
                    items: [...listItems]
                }
            } catch (error) {
                console.log(error)
                window.alert("cannot fetch list items")
            }
            break
        default:
            return state
    }
}

export { initialState, reducer }