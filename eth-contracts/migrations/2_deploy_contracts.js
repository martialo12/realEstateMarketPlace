// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier)
      .then(() => {
          console.log('your SquareVerifier address ', SquareVerifier.address)
        return deployer.deploy(SolnSquareVerifier, SquareVerifier.address)
      });
}
