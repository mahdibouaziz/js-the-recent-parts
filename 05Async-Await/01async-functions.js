/* promises */

const fetchCurrentUser = () => {
  //...
};

fetchCurrentUser()
  .then((user) => {
    return Promise.all([
      //...,
      //...,
    ]);
  })
  .then(([archivedOrders, currentOrders]) => {
    //...
  });

/* the async functions will replace promises */

async function main() {
  let user = await fetchCurrentUser();
  let [archivedOrders, currentOrders] = await Promise.all([
    //...
  ]);
  // ..
}
