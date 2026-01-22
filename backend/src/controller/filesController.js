const { request, response } = require("express");
const api = require("../services/api.js");
const { parseCSV } = require("../utils/index.js");

let filesCache = [];
const getFiles = async (req = request, res = response) => {
  try {
    // consulta de todos los files
    const { data } = await api.get("/secret/files");
    const filesData = await Promise.all(
      data.files.map(async (file) => {
        try {
          const { data: dataFile } = await api.get(`/secret/file/${file}`);
          const lines = parseCSV(dataFile);
          return { file, lines };
        } catch (error) {
          return { file, lines: [] };
        }
      }),
    );
    filesCache = filesData;
    res.json(filesData);
  } catch (error) {
    res.status(error?.response?.status || 500).json({
      msg: error.message || "Error retrieving files",
    });
  }
};

const filterFiles = (req = request, res = response) => {
  try {
    const { fileName } = req.query;
    const filteredFiles = filesCache.filter((item) =>
      item.file.toLowerCase().includes(fileName.toLowerCase()),
    );

    res.json(filteredFiles);
  } catch (error) {
    res.status(error?.response?.status || 500).json({
      msg: error.message || "Error retrieving files",
    });
  }
};
module.exports = {
  getFiles,
  filterFiles,
};
