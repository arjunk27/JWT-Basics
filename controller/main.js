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
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    res.status(401).send("unauthorized");
  }
  const token = authHeaders.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res
      .status(200)
      .json({ msg: "Welcome to dashbord", user: decoded.username });
  } catch (error) {
    res.status(401).send("unauthorized");
  }
};

module.exports = { login, dashboard };
