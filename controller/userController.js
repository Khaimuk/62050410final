const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.index = async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    message: "successfully loaded",
    data: users,
  });
};

exports.reqister = async (req, res, next) => {
  const { username, password } = req.body;

  const user = new User({
    username: username,
    password: password,
  });

  await blog.save();

  res.status(201).json({
    message: "Successfully  reqistered",
  });
};

exports.login = async (req, res, next) => {
  const { username, password } = req.params;

  const user = await User.findOne({ username, password });

  if (!user) {
    res.status(404).json({
      message: "no user founded",
    });
  }

  if (user.password !== password) {
    res.status(404).json({
      message: "password not match",
    });
  }

  const token = await jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    "monkey",
    { expiresIn: "5 days" }
  );

  const expires_in = jwt.decode(token);

  return res.status(201).json({
    access_token: token,
    expires_in: expires_in.exp,
    token_type: "Bearer",
    data: user,
  });
};
