
//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal{
    uint256 totalWaves;

    constructor(){
        console.log("Yo, I'm a contract, and I'm smart");
    }

    function wave() public{
        totalWaves += 1;
        console.log('%s has waved', msg.sender);
    }

    function difWaves(uint wavers) public{
        console.log("We've had %d different wavers!", wavers);
    }

    function getTotalWaves() public view returns(uint256){
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}