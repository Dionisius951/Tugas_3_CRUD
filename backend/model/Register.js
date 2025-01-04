const webinar = require("../configuration/ticketing");

const getRegister = async () => {
  try {
    const [results] = await webinar.query("SELECT * FROM `registration`");
    return results;
  } catch (err) {
    console.log(err);
  }
};

const createRegister = async ({ user_id, webinar_id, date_register}) => {

  const user = parseInt(user_id)
  const webinarID = parseInt(webinar_id)

  try {
    const sql =
      "INSERT INTO `registration`(`user_id`, `webinar_id`, `date_register`) VALUES (?, ?, ?)";

    const [result] = await webinar.query(sql, [user, webinarID, date_register]);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRegister,
  createRegister,
};
