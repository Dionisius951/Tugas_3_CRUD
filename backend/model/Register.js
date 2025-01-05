const webinar = require("../configuration/ticketing");

const getRegister = async () => {
  try {
    const [results] = await webinar.query("SELECT * FROM `registration`");
    return results;
  } catch (err) {
    console.log(err);
  }
};

const createRegister = async ({ webinar_id, date_register, name, email}) => {

  const webinarID = parseInt(webinar_id)

  try {
    const sql =
      "INSERT INTO `registration`( `webinar_id`, `date_register`, `name`, `email`) VALUES (?, ?, ?, ?)";

    const [result] = await webinar.query(sql, [webinarID, date_register, name, email]);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRegister,
  createRegister,
};
