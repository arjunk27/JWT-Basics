const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) res.status(400).send("Incomplete request");
  //just for demo,, normaly provided by DB !!!!
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user Created", token });
};

const dashboard = async (req, res) => {
  const num = Math.floor(Math.random() * 100);
  res.status(200).json({ secret: num });
};

module.exports = { login, dashboard };
