import User from "./index.js";

const controller = {
  async create(username, password) {
    const createdUser = await User.create({ username, password });

    return createdUser.authenticate(password);
  },
  async show(username, password) {
    const user = await User.findOne({ username });

    const correctPassword = await user?.isCorrectPassword(password);

    if (!correctPassword) {
      throw new Error("Incorrect password");
    }

    return user;
  },
};

export default controller;
