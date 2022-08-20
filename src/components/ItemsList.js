import ListItem from "./ListItem"
import { useContext } from "react"
import { TodoListContext } from "../context/TodoListContext"

const ItemsList = () => {
    const { itemsList, actions } = useContext(TodoListContext)

    const listItems = itemsList.map((item, index) => {
        return (
            <div className="itemsList--item">
                <li>
                    <ListItem key={index} itemName={item} id={index} removeItem={actions.removeItem} />
                </li>
            </div>
        )
    })

    return (
        <div className="itemsList">
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ItemsList