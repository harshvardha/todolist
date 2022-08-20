import React from "react";
import { useReducer, useState } from "react";
import { ethers } from "hardhat";
import { contractAddress, contractABI } from "../utils/constants";
import { initialState, reducer } from "../reducers/store";
import { useEffect } from "react";
const { ethereum } = window

const TodoListContext = React.createContext()

const createTodolistContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const todoListContract = new ethers.Contract(contractAddress, contractABI.abi, signer)
    return todoListContract
}

const TodoListProvider = ({ children }) => {
    const [itemsListState, dispatch] = useReducer(reducer, initialState)
    const [contract, setContract] = useState(null)
    const [address, setAddress] = useState("")

    const connectWallet = async () => {
        if (!ethereum) return window.alert("Please install MetaMask")
        const accounts = await ethereum.request({ method: "eth_requestAccounts" })
        setAddress(accounts[0])
    }

    const actions = {
        addItem: (item) => {
            if (item) {
                dispatch({ type: "ADD_ITEM", payload: item, contract: contract })
            }
        },
        removeItem: (index) => {
            if (index >= 0) {
                dispatch({ type: "REMOVE_ITEM", payload: index, contract: contract })
            }
        },
        getItems: () => {
            dispatch({ type: "GET_ITEMS", contract: contract })
        }
    }

    useEffect(() => {
        const contract = createTodolistContract()
        setContract(contract)
    })

    return (
        <TodoListContext.Provider
            value={{
                itemsList: itemsListState,
                address,
                actions,
                connectWallet
            }
            }
        >
            {children}
        </TodoListContext.Provider>
    )
}

export { TodoListContext, TodoListProvider }