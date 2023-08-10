db.customers.createIndex(
  {
    email: 1,
  },
  {
    unique: true,
  }
);

db.customers.getIndexes(); // to see all the indexes created in a collection.

/*
  * Use explain() in a collection when running a query to see the Execution plan. This plan provides the details of the execution stages (IXSCAN , COLLSCAN, FETCH, SORT, etc.).
 
  ? The IXSCAN stage indicates the query is using an index and what index is being selected.

  ? The COLLSCAN stage indicates a collection scan is perform, not using any indexes.

  ? The FETCH stage indicates documents are being read from the collection.

  ? The SORT stage indicates documents are being sorted in memory.
 */

db.customers
  .explain()
  .find({
    birthdate: {
      $gt: ISODate("1995-08-01"),
    },
  })
  .sort({
    email: 1,
  });

// Create a Single field Multikey Index
db.customers.createIndex({
  accounts: 1, // account is array
});

//Create a Compound Index
db.customers
  .find({
    birthdate: {
      $gte: ISODate("1977-01-01"),
    },
    active: true,
  })
  .sort({
    birthdate: -1,
    name: 1,
  });

// Here's an example of an efficient index for this query:

db.customers.createIndex({
  active: 1,
  birthdate: -1,
  name: 1,
});

// create a compound index using the `account_holder`, `balance` and `account_type` fields:
db.accounts.createIndex({ account_holder: 1, balance: 1, account_type: 1 });

// Use the explain method to view the winning plan for a query
db.accounts
  .explain()
  .find(
    { account_holder: "Andrea", balance: { $gt: 5 } },
    { account_holder: 1, balance: 1, account_type: 1, _id: 0 }
  )
  .sort({ balance: 1 });

db.customers.getIndexes(); // to see all the indexes created in a collection

//Delete Index by name: Before deleting index you can consider to hide that index
db.customers.dropIndex("active_1_birthdate_-1_name_1");
// Delete index by key:

db.customers.dropIndex({
  active: 1,
  birthdate: -1,
  name: 1,
});

db.collection.dropIndexes(["index1name", "index2name", "index3name"]); // array of index names as a parameter
