const webinar = require("../configuration/ticketing");

const getUser = async () => {
  try {
    const [results] = await webinar.query("SELECT * FROM `user`");
    return results;
  } catch (err) {
    console.log(err);
  }
};

const createUser = async ({ name, email}) => {
  try {
    const sql =
      "INSERT INTO `user`(`name`, `email`) VALUES (?, ?)";

    const [result] = await webinar.query(sql, [name, email]);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUser,
  createUser,
};
