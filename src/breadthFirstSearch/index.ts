interface Graph {
  [name: string]: Graph;
}

export default function search(graph: Graph, item: string): Graph | null {
  const items = Object.keys(graph);
  let deepObject = {};

  for (const oneItem of items) {
    if (oneItem === item) {
      return graph[oneItem];
    }
    deepObject = { ...deepObject, ...graph[oneItem] };
  }

  if (Object.keys(deepObject).length > 0) return search(deepObject, item);

  return null;
}
