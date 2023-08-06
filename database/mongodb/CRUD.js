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

db.sales.find({ storeLocation: { $in: ["London", "NewYork"] } }); // The $in operator allows you to select all documents that have a field value equal to any of the values that are specified in the array.
/**
 * TODO you can use in find method also $gt, $lt, $lte, $gte.
 */

db.sales.find({ "items.price": { $gt: 200 } });
