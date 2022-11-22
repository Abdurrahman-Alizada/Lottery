const { network } = require("hardhat")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = getNamedAccounts()

    const raffle = await deploy("Raffle", {
        from: deployer,
        arg: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}
