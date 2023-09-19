/**
 * Sorts an array of objects by a specified property in ascending order
 * 
 */
function sortingAlgo(arrObject, order = "ascending") {
  const n = arrObject.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (
        order === "ascending"
          ? arrObject[j].price > arrObject[j + 1].price
          : arrObject[j].price < arrObject[j + 1].price
      ) {
        // Swap arrObject[j] and arrObject[j + 1]
        const temp = arrObject[j];
        arrObject[j] = arrObject[j + 1];
        arrObject[j + 1] = temp;
      }
    }
  }

  return arrObject;
}

const productList = [
  { name: "bread", price: 60 },
  { name: "ham", price: 200 },
  { name: "sufuria", price: 34 },
  { name: "exe", price: 45 },
];

// Sort in ascending order
const ascendingArray = sortingAlgo(productList);
console.log("Ascending:", ascendingArray);

// Sort in descending order
const descendingArray = sortingAlgo(productList, "descending");
console.log("Descending:", descendingArray);


