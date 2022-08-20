import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

const AddItem = ({ setItems }) => {
    const [item, setItem] = useState("")
    return (
        <div className="additem">
            <input
                type="text"
                placeholder="Add Item"
                value={item}
                onChange={(event) => setItem(event.target.value)}
            />
            <button className="additem--button" type="button" onClick={() => setItems(prevState => [...prevState, item])}><AiOutlinePlus /></button>
        </div>
    )
}

export default AddItem