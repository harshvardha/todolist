import { MdOutlineClose } from "react-icons/md"

const ListItem = ({ itemName }) => {
    return (
        <div className="listItem">
            <button className="listItem--button" type="button"><MdOutlineClose /></button>
            <p className="listItem--name">{itemName}</p>
        </div>
    )
}

export default ListItem