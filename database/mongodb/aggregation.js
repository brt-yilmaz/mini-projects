// Aggregation: Collection and summary of data

// Stage: One of the built-in methods that can be completed on the data, but does not permanently alter it

// Aggregation pipeline: A series of stages completed on the data in order

// Structure of an Aggregation Pipeline

/**
 * * SUMMARY
 * ? $match $group $sort $limit $project $count $set $out
 */

db.zips.aggregate([
  // $match $group
  {
    $match: {
      state: "CA",
    },
  },
  {
    $group: {
      _id: "$city",
      totalZips: { $count: {} },
    },
  },
]);

db.zips.aggregate([
  // $sort , $limit
  {
    $sort: {
      pop: -1,
    },
  },
  {
    $limit: 5,
  },
]);

db.zips.aggregate([
  // $project, $set, $count
  {
    $project: {
      state: 1,
      zip: 1,
      population: "$pop",
      _id: 0,
    },
  },
  {
    $set: {
      // The $set stage creates new fields or changes the value of existing fields, and then outputs the documents with the new fields.
      place: {
        $concat: ["$city", ",", "$state"],
      },
      pop: 10000,
    },
  },
  {
    $count: "total_zips",
  },
]);

db.sightings.aggregate([
  // $out
  {
    $match: {
      date: {
        $gte: ISODate("2022-01-01T00:00:00.0Z"),
        $lt: ISODate("2023-01-01T00:00:00.0Z"),
      },
    },
  },
  {
    $out: "sightings_2022",
  },
]);
