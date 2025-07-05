function combineDatasets(dataset1, dataset2, dataset3) {
  const combineMap = {};
  function combineDataSet(dataset) {
    for (let i = 0; i < dataset.length; i++) {
      const userToFind = dataset[i];
      combineMap[userToFind.user_id] = {
        ...combineMap[userToFind.user_id],
        ...userToFind,
      };
      // if (combineMap[userToFind.user_id]) {
      //   combineMap[userToFind.user_id] = {
      //     ...combineMap[userToFind.user_id],
      //     ...userToFind,
      //   };
      // } else {
      //   combineMap[userToFind.user_id] = userToFind;
      // }
    }
  }

  combineDataSet(dataset1);
  combineDataSet(dataset2);
  combineDataSet(dataset3);

  return Object.values(combineMap);
}

// Example datasets
const dataset1 = [
  { user_id: 1, name: 'John', email: 'john@example.com', age: 25 },
  { user_id: 2, name: 'Alice', email: 'alice@example.com', age: 30 },
];

const dataset2 = [
  { user_id: 3, name: 'Bob', email: 'bob@example.com' },
  { user_id: 1, name: 'John', age: 25 },
];

const dataset3 = [
  { user_id: 4, name: 'Eve', email: 'eve@example.com', age: 22 },
  { user_id: 2, name: 'Alice', email: 'alice@example.com', age: 30 },
];
// const salesData1 = [
//   { "product_id": 1, "quantity": 10, "revenue": 150.50 },
//   { "product_id": 2, "quantity": 5, "revenue": 75.20 },
//   // ... (more products)
// ];

// const salesData2 = [
//   { "product_id": 2, "quantity": 8, "revenue": 120.80 },
//   { "product_id": 3, "quantity": 12, "revenue": 180.60 },
//   // ... (more products)
// ];

// const salesData3 = [
//   { "product_id": 1, "quantity": 15, "revenue": 225.75 },
//   { "product_id": 3, "quantity": 10, "revenue": 150.50 },
//   // ... (more products)
// ];

console.log(combineDatasets(dataset1, dataset2, dataset3));
