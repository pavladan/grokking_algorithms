const START_KEY = "start";
const FIN_KEY = "fin";

interface Graph {
  [START_KEY]: {
    [toNode: string]: number;
  };
  [fromNode: string]: {
    [toNode: string]: number;
  };
  [FIN_KEY]: {};
}

interface Parents {
  [node: string]: string;
}

interface Costs {
  [node: string]: number;
}

function findLowestCostNode(costs: Costs, processed: string[]) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const node in costs) {
    if (costs.hasOwnProperty(node)) {
      const cost = costs[node];
      if (cost < lowestCost && !processed.some((p) => p === node)) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }
  }
  return lowestCostNode;
}

function convertParentsToNodePath(parents: Parents) {
  let curNode = parents[FIN_KEY];
  if (!curNode) return [];
  let nodePath: string[] = [];
  while (curNode !== START_KEY) {
    nodePath = [curNode, ...nodePath];
    curNode = parents[curNode];
  }
  return nodePath;
}

export default function search(graph: Graph) {
  const processed: string[] = [];
  const parents: Parents = Object.keys(graph[START_KEY]).reduce(
    (acc, curValue) => {
      return { ...acc, [curValue]: START_KEY };
    },
    {}
  );
  const costs: Costs = { ...graph.start };
  let node = findLowestCostNode(costs, processed);
  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (const neighborsKey of Object.keys(neighbors)) {
      const newCost = cost + neighbors[neighborsKey];
      if (costs[neighborsKey] === undefined || costs[neighborsKey] > newCost) {
        costs[neighborsKey] = newCost;
        parents[neighborsKey] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }
  return { path: convertParentsToNodePath(parents), cost: costs[FIN_KEY] };
}
