export function getAllItems() {
  console.log("getAllItems() called");
  return new Promise((resolve) => {
    let itemsList = [];
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log("res: " + res);
        itemsList = res;
        resolve({ data: itemsList });
      });
  });
}
