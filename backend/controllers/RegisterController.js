const { getRegister, createRegister } = require("../model/Register");

const getDataRegister = async (req, res) => {
  try {
    const data = await getRegister();
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

const createDataRegister = async (req, res) => {
  try {
    const data = await createRegister(req.body);
    res.status(200).json({
      message: "Berhasil Mendaftar webinar",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Terjadi Error Ketika Menambahkan Data",
    });
  }
};

module.exports = {
  getDataRegister,
  createDataRegister,
};
