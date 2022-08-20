const { ethers } = require("hardhat")

async function main() {
  const TodoListContract = await ethers.getContractFactory("TodoList")
  const todoListContract = await TodoListContract.deploy()
  await todoListContract.deployed()
  console.log(`Deployed Contract Address: ${todoListContract.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
