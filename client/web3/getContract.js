const getContractInstance = async (web3, contractDefinition) => {
  const networkId = await web3.eth.net.getId()
  const deployedAddress = contractDefinition.networks[networkId].address

  const instance = new web3.eth.Contract(
    contractDefinition.abi,
    deployedAddress
  )

  return instance
}

export default getContractInstance
