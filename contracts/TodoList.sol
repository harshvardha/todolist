// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TodoList {
    mapping(address => string[]) public userItems;

    function addItem(string memory item) public {
        string[] storage items = userItems[msg.sender];
        items.push(item);
        userItems[msg.sender] = items;
    }

    function removeItem(uint256 itemIndex) public {
        string[] storage items = userItems[msg.sender];
        for (uint256 i = itemIndex; i < items.length - 1; i++) {
            items[i] = items[i + 1];
        }
        items.pop();
        userItems[msg.sender] = items;
    }

    function getItems() public view returns (string[] memory items) {
        items = userItems[msg.sender];
    }
}
