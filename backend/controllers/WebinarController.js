const { getData, createData, updateData } = require("../model/Webinar");

const getWebinar = async (req, res) => {
  try {
    const data = await getData();
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

const createWebinar = async (req, res) => {
  try {
    const data = await createData(req.body);
    res.status(200).json({
      message: "Berhasil Membuat Webinar",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Terjadi Error Ketika Menambahkan Data",
    });
  }
};

const updateWebinar = async (req, res) => {
  try {
    const data = await updateData(req.body, req.params)
    res.status(200).json({
      message: "Berhasil Mengupdate Webinar",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Terjadi Error Ketika Mengupdate Data",
    });
  }
};

module.exports = {
  getWebinar,
  createWebinar,
  updateWebinar,
};
