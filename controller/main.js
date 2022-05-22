const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) res.status(400).send("Incomplete request");
  res.send("t");
};

const dashboard = async (req, res) => {
  const num = Math.floor(Math.random() * 100);
  res.status(200).json({ secret: num });
};

module.exports = { login, dashboard };
