const clientConfiguration = {
  "meshName": "chimera",
  "newVersionNumber": "3",
  "serviceName": "movieselector",
  "containerName": "app",
  "imageURL": '822180497458.dkr.ecr.us-west-2.amazonaws.com/movieselector:5.0',
  "clusterName": "chimera",
  "serviceDiscoveryID": "srv-cz3dj4ut3k5x3ru3",
  "originalNodeName": "movieselector-1",
  "originalECSServiceName": "movieselector-1",
  "routeName": "movieselector-route",
  "routerName": "movieselector-vr",
  "originalTaskDefinition": "chimera-movieselector-1:2",
  "envoyContainerName": "envoy",
  "region": "us-west-2",
  "awsAccountID": "822180497458",
  "metricNamespace": "chimera-prometheus-metrics-3",
  "cwECSSecurityGroups": ["sg-0ba88d5feee9fedc3"],
  "cwECSPrimarySubnets": ["subnet-01683c903501dfd39", "subnet-01b67f4aa9f58abbb"]
};

module.exports = clientConfiguration;
