import express from 'express'
import mdeicineController from '../controllers/medication/medicineInfo.mjs'

const medicineRouter = express.Router()
medicineRouter.post('/', mdeicineController.userMedicine)

export default medicineRouter
