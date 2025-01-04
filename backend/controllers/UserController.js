const { getUser, createUser } = require("../model/User");

const getDataUser = async (req, res) => {
  try {
    const data = await getUser();
    res.status(200).json({
      message: "Berhasil mendapat data",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Terjadi Error Ketika Mengambil Data",
    });
  }
};

const createDataUser = async (req, res) => {
  try {
    const data = await createUser(req.body);
    res.status(200).json({
      message: "Berhasil Membuat User",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Terjadi Error Ketika Menambahkan Data",
    });
  }
};

module.exports = {
  getDataUser,
  createDataUser,
  // updateEvent,
};
