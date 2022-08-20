import { useContext } from "react"
import { TodoListContext } from "../context/TodoListContext"

const Header = () => {
    const { address, connectWallet } = useContext(TodoListContext)

    return (
        <div className="header">
            <h1>ToDo List</h1>
            {!address ? (
                <button id="header--connectButton" onClick={connectWallet}>Connect</button>
            ) : (
                <p style={{ backgroundColor: "white", padding: "5px 0px" }}>{address}</p>
            )}
        </div>
    )
}

export default Header