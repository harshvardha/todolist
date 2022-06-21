import { AiOutlinePlus } from "react-icons/ai"

const AddItem = () => {
    return (
        <div className="additem">
            <input type="text"
                placeholder="Add Item"
            />
            <button className="additem--button" type="button"><AiOutlinePlus /></button>
        </div>
    )
}

export default AddItem