const MedIPFS = artifacts.require("MedIPFS");

module.exports = function(_deployer) {
  _deployer.deploy(MedIPFS); 
};
