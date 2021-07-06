interface Items {
  [item: string]: string[];
}

export default function (items: Items, neededItems: string[]) {
  let neededItemsClone = neededItems;
  const finalItems: string[] = [];
  while (neededItemsClone.length > 0) {
    let bestItem = null;
    let itemsCovered: string[] = [];
    Object.keys(items).forEach((i) => {
      const item = items[i];
      const covered = [...neededItemsClone].filter((x) =>
        item.some((oneItem) => oneItem === x)
      );
      if (covered.length > itemsCovered.length) {
        bestItem = i;
        itemsCovered = covered;
      }
    });
    neededItemsClone = [...neededItemsClone].filter(
      (x) => !itemsCovered.some((ic) => ic === x)
    );
    bestItem && finalItems.push(bestItem);
  }
  return finalItems;
}
