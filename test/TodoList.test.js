const { expect } = require("chai")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")

describe("TodoList Contract", function () {
    async function deployTodoListContract() {
        const [owner, addr1] = await ethers.getSigners()
        const TodoList = await ethers.getContractFactory("TodoList")
        const todoList = await TodoList.deploy()
        await todoList.deployed()
        return { owner, addr1, TodoList, todoList }
    }

    describe("Operations on TodoList", function () {
        it("should add item in the list", async function () {
            const { todoList, addr1 } = await loadFixture(deployTodoListContract)
            await todoList.connect(addr1).addItem("Mango")
            const listItems = await todoList.userItems(addr1.address, 0)
            expect(listItems).to.equal("Mango")
        })

        it("should remove item in the list", async function () {
            const { todoList, addr1 } = await loadFixture(deployTodoListContract)
            await todoList.connect(addr1).addItem("Mango")
            await todoList.connect(addr1).addItem("Banana")
            await todoList.connect(addr1).removeItem(0)
            const listItems = await todoList.userItems(addr1.address, 0)
            expect(listItems).to.equal("Banana")
        })

        it("should get all the items in the list", async function () {
            const { todoList, addr1 } = await loadFixture(deployTodoListContract)
            await todoList.connect(addr1).addItem("Mango")
            const listItems = await todoList.userItems(addr1.address, 0)
            expect(listItems).to.equal("Mango")
        })
    })
})