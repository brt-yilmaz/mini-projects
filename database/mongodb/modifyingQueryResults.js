/** SUMMARY
 * ? Return query results in a specified order by using cursor.sort().
 * ? Constrained the number of results returned by using cursor.limit().
 * ? Specified fields to return by adding a projection document parameter in calls to db.collection.find().
 * ? Counted the number of documents that match a query by using db.collection.countDocuments().
 * TODO ⬋
 */

// Return data on all music companies, sorted alphabetically from A to Z. Ensure consistent sort order with _id field
db.companies
  .find({ category_code: "music" })
  .sort({ name: 1, _id: 1 })
  .limit(4);

db.sales.find({
  storeLocation: "London",
  "items.name": { $in: ["laptop", "backpack", "printer"] },
});

// Add a Projection Document
// Return all restaurant inspections - business name, result, and _id fields only
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1 } //included
);

db.inspections.find(
  { result: { $in: ["Pass", "Warning"] } },
  { date: 0, "address.zip": 0 } // excluded
);

db.trips.countDocuments({ tripDuration: { $gt: 120 }, userType: "Subscriber" });

/* Sample document

{
  _id: ObjectId("5bd761dcae323e45a93ccfe9"),
  saleDate: ISODate("2015-08-25T10:01:02.918Z"),
  items: [
    {
      name: 'envelopes',
      tags: [ 'stationary', 'office', 'general' ],
      price: Decimal128("8.05"),
      quantity: 10
    },
    {
      name: 'binder',
      tags: [ 'school', 'general', 'organization' ],
      price: Decimal128("28.31"),
      quantity: 9
    },
    {
      name: 'notepad',
      tags: [ 'office', 'writing', 'school' ],
      price: Decimal128("20.95"),
      quantity: 3
    },
    {
      name: 'laptop',
      tags: [ 'electronics', 'school', 'office' ],
      price: Decimal128("866.5"),
      quantity: 4
    },
    {
      name: 'notepad',
      tags: [ 'office', 'writing', 'school' ],
      price: Decimal128("33.09"),
      quantity: 4
    },
    {
      name: 'printer paper',
      tags: [ 'office', 'stationary' ],
      price: Decimal128("37.55"),
      quantity: 1
    },
    {
      name: 'backpack',
      tags: [ 'school', 'travel', 'kids' ],
      price: Decimal128("83.28"),
      quantity: 2
    },
    {
      name: 'pens',
      tags: [ 'writing', 'office', 'school', 'stationary' ],
      price: Decimal128("42.9"),
      quantity: 4
    },
    {
      name: 'envelopes',
      tags: [ 'stationary', 'office', 'general' ],
      price: Decimal128("16.68"),
      quantity: 2
    }
  ],
  storeLocation: 'Seattle',
  customer: { gender: 'M', age: 50, email: 'keecade@hem.uy', satisfaction: 5 },
  couponUsed: false,
  purchaseMethod: 'Phone'
}
*/

db.sales.countDocuments({
  items: { $elemMatch: { name: "laptop", price: { $lt: 600 } } },
});
