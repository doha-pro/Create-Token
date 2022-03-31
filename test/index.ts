// import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("ERC20", function () {
  it("Should create a new token ", async function () {
    const CreateToken = await ethers.getContractFactory("StandardToken");
    const createToken = await CreateToken.deploy(
      "Doha",
      "Do",
      18,
      100000000,
      "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
      1
    );
    await createToken.deployed();

    //

    //
    //

    //
  });
});
