import { AiOutlinePlus } from "react-icons/ai"
import { useState, useContext } from "react"
import { TodoListContext } from "../context/TodoListContext"

const AddItem = () => {
    const [item, setItem] = useState("")
    const { actions } = useContext(TodoListContext)
    return (
        <div className="additem">
            <input
                type="text"
                placeholder="Add Item"
                value={item}
                onChange={(event) => setItem(event.target.value)}
            />
            <button className="additem--button" type="button" onClick={() => {
                actions.addItem(item)
                setItem("")
            }
            }
            >
                <AiOutlinePlus />
            </button>
        </div>
    )
}

export default AddItem