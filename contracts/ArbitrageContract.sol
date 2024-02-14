// contracts/ArbitrageContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ArbitrageContract {
    address private owner;
    address private tokenAddress;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address _tokenAddress) {
        owner = msg.sender;
        tokenAddress = _tokenAddress;
    }

    function executeArbitrage() external onlyOwner {
        // Implement your arbitrage logic here
        // Use Uniswap or any other decentralized exchange for trading
        // Make sure to handle all edge cases and follow best practices
    }

    function withdrawToken(address to, uint256 amount) external onlyOwner {
        IERC20(tokenAddress).transfer(to, amount);
    }

    function withdrawETH(address payable to, uint256 amount) external onlyOwner {
        to.transfer(amount);
    }
}
