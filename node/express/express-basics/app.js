const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // simple global middleware
  req.date = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to express" });
});

app.get("/users/:id/:name?", (req, res) => {
  // name is optional
  // const {id, name} = req.params
  const user = users.find((user) => user.id === req.params.id * 1); // users is array, *1 to convert number

  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

app.post("/", (req, res) => res.send("This is a post request"));

const port = 3000;

app.listen(port, () => console.log(`App running on port ${port}...`));

/* you can use route method to make code more readable 

  app.route('/').get(getAllUsers).post(createUser)

  app.route('/users/:id').get(getUser).patch(updateUser).delete(deleteUser)
  
  or you can create middleware
*/
