const main = async () => {
    
    let addresses = [];
    
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    
    console.log("Contract deployed to: ", waveContract.address);
    console.log("Contract deployed by: ", owner.address);

    let waveCount;
    let difWaves;

    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    addresses.push(owner.address);

    difWaves = await waveContract.difWaves(addresses.length);
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    if(!(randomPerson.adress in addresses)){
        addresses.push(randomPerson.address);
    }

    difWaves = await waveContract.difWaves(addresses.length);
    waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch (error){
        console.log(error);
        process.exit(1);
    }
};

runMain();