import { MdOutlineClose } from "react-icons/md"

const ListItem = ({ itemName, removeItem, id }) => {
    return (
        <div className="listItem">
            <button className="listItem--button" type="button" onClick={() => removeItem(id)}><MdOutlineClose /></button>
            <p className="listItem--name">{itemName}</p>
        </div>
    )
}

export default ListItem