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
