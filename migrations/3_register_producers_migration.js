const EnergyStore = artifacts.require('./EnergyStore.sol');

module.exports = async (deployer) => {
  const energyStore = await EnergyStore.deployed();
  const producers = ['0x38814083b07be9b3b8c7315f13811c4f72411b97'];

  return Promise.all(
    producers.map(p => energyStore.registerProducer.sendTransaction(p, {
      privateFor: ['4i9VJoVQbypbQ9znw8S3sTnEELTTKSrQxSwmY/QN+10='],
    }))
  );
};
