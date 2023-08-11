const session = db.getMongo().startSession();

session.startTransaction();

const account = session
  .getDatabase("< add database name here>")
  .getCollection("<add collection name here>");

//Add database operations like .updateOne() here

session.commitTransaction(); // if you want to abort use :
session.abortTransaction();

// Example 2

const session2 = db.getMongo().startSession();

session2.startTransaction();

const account2 = session2.getDatabase("bank").getCollection("accounts");

account2.insertOne({
  account_id: "MDB454252264",
  account_holder: "Florence Taylor",
  account_type: "savings",
  balance: 100.0,
  transfers_complete: [],
  last_updated: new Date(),
});
account2.updateOne(
  { account_id: "MDB963134500" },
  { $inc: { balance: -100.0 } }
);
session.commitTransaction(); // or abort session
