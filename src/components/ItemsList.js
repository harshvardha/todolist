import ListItem from "./ListItem"

const ItemsList = ({ items }) => {
    const listItems = items.map((item, index) => {
        return (
            <div className="itemsList--item">
                <li>
                    <ListItem key={index} itemName={item} />
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