const main =async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Balance account: ", accountBalance.toString());

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Wave portal address: ", waveContract.address);
};

const runMain = async () => {
    try{
        await main();
        process.exit(0)
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

runMain();