const deploy = async () => {
  const [account] = await ethers.getSigners();
  console.log("Deploying contract with the account:", account.address);

  const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
  const deployed = await PlatziPunks.deploy();
  console.log("Platz Punks is deployed at:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
