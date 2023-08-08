require("dotenv").config();
const http = require("http");
const connectDB = require("./dbConnection");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    try {
      const db = await connectDB(); // connect to Database and return client.db()
      const collections = await db.admin().listDatabases();

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ collections }));
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Server error" }));
    }
  }
});

// start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
