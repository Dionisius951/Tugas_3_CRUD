const webinar = require("../configuration/ticketing");

const getData = async () => {
  try {
    const [results] = await webinar.query("SELECT * FROM `webinar`");
    return results;
  } catch (err) {
    console.log(err);
  }
};

const createData = async ({ title, detail, date, link }) => {
  try {
    const sql =
      "INSERT INTO `webinar`(`title`, `detail`, `date`, `link`) VALUES (?, ?, ?, ?)";

    const [result] = await webinar.query(sql, [title, detail, date, link]);
    return result;
  } catch (err) {
    console.log(err);
  }
};
const updateData = async (body, params) => {
  try {
    const { id } = params;
    const { title, detail, date, link } = body;
    const convID = parseInt(id);

    const fetchQuery = "SELECT * FROM `webinar` WHERE `id` = ?";
    const [response] = await webinar.query(fetchQuery, [convID]);

    if (!response) {
      throw new Error("Data dengan ID ini tidak ditemukan!");
    }

    const updatedTitle = title ?? response[0].title;
    const updatedDetail = detail ?? response[0].detail;
    const updatedDate = date ?? response[0].date;
    const updatedLink = link ?? response[0].link;

    const updateQuery =
      "UPDATE `webinar` SET `title` = ?, `detail` = ?, `date` = ?, `link` = ? WHERE `id` = ? ";
    const [result] = await webinar.query(updateQuery, [
      updatedTitle,
      updatedDetail,
      updatedDate,
      updatedLink,
      convID,
    ]);

    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Terjadi kesalahan saat memperbarui data.");
  }
};
const deleteData = async (params) => {
  try {
    const { id } = params;
    const convID = parseInt(id); 

    const sql = 'DELETE FROM `webinar` WHERE `id` = "?"';
    const [result] = await webinar.query(sql, [convID])

    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Terjadi kesalahan saat memperbarui data.");
  }
};

module.exports = {
  getData,
  createData,
  updateData,
  deleteData,
};
