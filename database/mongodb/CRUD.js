db.grades.insertOne({
  //  to insert a document into a collection. If collection does not exist, will be created automatically.
  student_id: 654321,
  products: [
    {
      type: "exam",
      score: 90,
    },
    {
      type: "homework",
      score: 59,
    },
    {
      type: "quiz",
      score: 75,
    },
    {
      type: "homework",
      score: 88,
    },
  ],
  class_id: 550,
});

db.grades.insertMany([
  // to insert multiple documents at once, must be array
  {
    student_id: 546789,
    products: [
      {
        type: "quiz",
        score: 50,
      },
      {
        type: "homework",
        score: 70,
      },
      {
        type: "quiz",
        score: 66,
      },
      {
        type: "exam",
        score: 70,
      },
    ],
    class_id: 551,
  },
  {
    student_id: 777777,
    products: [
      {
        type: "exam",
        score: 83,
      },
      {
        type: "quiz",
        score: 59,
      },
      {
        type: "quiz",
        score: 72,
      },
      {
        type: "quiz",
        score: 67,
      },
    ],
    class_id: 550,
  },
  {
    student_id: 223344,
    products: [
      {
        type: "exam",
        score: 45,
      },
      {
        type: "homework",
        score: 39,
      },
      {
        type: "quiz",
        score: 40,
      },
      {
        type: "homework",
        score: 88,
      },
    ],
    class_id: 551,
  },
]);

db.zips.find({ _id: ObjectId("5c8eccc1caa187d17ca6ed16") });

db.books.find({ genre: "Historical" }); // The following query will return documents where the genre field is equal to a scalar value of Historical, and it will also return documents that have an array value equal to Historical, such as ["Historical", "Fiction"].

db.sales.find({ storeLocation: { $in: ["London", "NewYork"] } }); // The $in operator allows you to select all documents that have a field value equal to any of the values that are specified in the array.
/**
 * TODO you can use in find method also $gt, $lt, $lte, $gte.
 */

db.sales.find({ "items.price": { $gt: 200 } });

// Use the $elemMatch operator to find all documents that contain the specified sub document(Array). For example:
db.sales.find({
  // $elemMatch
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
});

db.routes.find({
  // $or & $and
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ],
});

db.sales.find({
  // implicit $and
  purchasedMethod: "Online",
  couponUsed: true,
  "customer.age": { $lte: 25 },
});

db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"), // filter
  },
  {
    // replacement
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  }
);

db.birds.replaceOne(
  { _id: ObjectId("6286809e2f3fa87b7d86dccd") },
  {
    common_name: "Morning Dove",
    scientific_name: "Zenaida macroura",
    wingspan_cm: 37.23,
    habitat: ["urban areas", "farms", "grassland"],
    diet: ["seeds"],
  }
);

db.podcasts.updateOne(
  // $set, $upsert
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
);

db.podcasts.updateOne(
  // $push adds a new value to the hosts array field
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
);

db.birds.updateOne(
  // $set
  { _id: ObjectId("6268413c613e55b82d7065d2") },
  { $set: { tags: ["geese", "herbivore", "migration"] } }
);

db.birds.updateOne(
  // $push $each
  { _id: ObjectId("6268471e613e55b82d7065d7") },
  { $push: { diet: { $each: ["newts", "opossum", "skunks", "squirrels"] } } }
);

db.birds.updateOne(
  // $inc , upsert
  { common_name: "Robin Redbreast" },
  { $inc: { sightings: +1 }, $set: { last_update: new Date() } },
  { upsert: true } // without $ sign
);

db.podcasts.findAndModify({
  query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
  update: { $inc: { subscribers: 1 } },
  new: true,
});

db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
);

db.birds.updateMany(
  {
    common_name: {
      $in: ["Blue Jay", "Grackle"], // like $or operator
    },
  },
  {
    $set: {
      last_seen: ISODate("2022-01-01"),
    },
  }
);

db.podcasts.deleteOne({ _id: Objectid("6282c9862acb966e76bbf20a") });

db.podcasts.deleteMany({ category: "crime" });
