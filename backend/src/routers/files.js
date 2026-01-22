const { Router } = require('express')
const { getFiles, filterFiles } = require('../controller/filesController')

const filesRouter = Router()

/**
 * @swagger
 * /files/list:
 *   get:
 *     summary: Obtiene todos los archivos
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: Lista de archivos
 */
filesRouter.get('/list', getFiles)
/**
 * @swagger
 * /files/data:
 *   get:
 *     summary: Filtra archivos
 *     tags: [Files]
 *     parameters:
 *       - in: query
 *         name: fileName
 *         schema:
 *           type: string
 *         description: Nombre del archivo a filtrar
 *     responses:
 *       200:
 *         description: Archivos filtrados
 */
filesRouter.get('/data', filterFiles)

module.exports = filesRouter
