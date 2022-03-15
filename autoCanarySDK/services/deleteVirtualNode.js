const { AppMeshClient, DeleteVirtualNodeCommand } = require("@aws-sdk/client-app-mesh")

// CANNOT DELETE VIRTUAL NODE UNTIL ALL SERVICES THAT LIST VIRTUAL NODE AS A SERVICE PROVIDER ARE DELETED
const deleteVirtualNode = async (chimeraConfig, virtualNodeName) => {
  const client = new AppMeshClient();
  const input = {
    meshName: chimeraConfig.meshName,
    virtualNodeName: virtualNodeName,
  }

  const command = new DeleteVirtualNodeCommand(input)
  
  try {
    const response = await client.send(command)
    console.log(`Success deleting Virtual Node named ${virtualNodeName}`)
    return response
  } catch(err) {
    console.log(`ERROR trying to delete Virtual Node named ${virtualNodeName}`)
    console.log(err)
    return err
  }
}

// deleteVirtualNode({region: 'us-west-2'}, 'apps', 'serviceA')

module.exports = deleteVirtualNode