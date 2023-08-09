// Example for insertOne
const dbname = "bank";
const collection_name = "accounts";

const accountsCollection = client.db(dbname).collection(collection_name);

const sampleAccount = {
  account_holder: "Linus Torvalds",
  account_id: "MDB829001337",
  account_type: "checking",
  balance: 50352434,
};

const insertOne = async () => {
  try {
    await connectToDatabase();
    // insertOne method is used here to insert the sampleAccount document
    let result = await accountsCollection.insertOne(sampleAccount);
    console.log(`Inserted document: ${result.insertedId}`);
  } catch (err) {
    console.error(`Error inserting document: ${err}`);
  } finally {
    await client.close();
  }
};

insertOne();

// Example for insertMany

const sampleAccounts = [
  {
    account_id: "MDB011235813",
    account_holder: "Ada Lovelace",
    account_type: "checking",
    balance: 60218,
  },
  {
    account_id: "MDB829000001",
    account_holder: "Muhammad ibn Musa al-Khwarizmi",
    account_type: "savings",
    balance: 267914296,
  },
];

const insertMany = async () => {
  try {
    await connectToDatabase();
    let result = await accountsCollection.insertMany(sampleAccounts);
    console.log(`Inserted ${result.insertedCount} documents`);
    console.log(result);
  } catch (err) {
    console.error(`Error inserting documents: ${err}`);
  } finally {
    await client.close();
  }
};

insertMany();

const documentToUpdate = { _id: ObjectId("62d6e04ecab6d8e130497482") };

const update = { $inc: { balance: 100 } };

const updateOne = async () => {
  try {
    await connectToDatabase();
    let result = await accountsCollection.updateOne(documentToUpdate, update);
    result.modifiedCount === 1
      ? console.log("Updated one document")
      : console.log("No documents updated");
  } catch (err) {
    console.error(`Error updating document: ${err}`);
  } finally {
    await client.close();
  }
};

updateOne(); // The `_id` field is immutable and cannot be overwritten.

const documentsToUpdate = { account_type: "checking" };

const updates = { $push: { transfers_complete: "TR413308000" } };

const updateMany = async () => {
  try {
    await connectToDatabase();
    let result = await accountsCollection.updateMany(
      documentsToUpdate,
      updates
    );
    result.modifiedCount > 0
      ? console.log(`Updated ${result.modifiedCount} documents`)
      : console.log("No documents updated");
  } catch (err) {
    console.error(`Error updating documents: ${err}`);
  } finally {
    await client.close();
  }
};

updateMany();

// you can use with the same way deleteOne, deleteMany,
