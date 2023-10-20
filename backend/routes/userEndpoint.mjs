import express from 'express'
import userController from '../controllers/users/userProfile.mjs'

const userRouter = express.Router()
userRouter.post('/', userController.userProfile)
userRouter.post('/update', userController.userUpdate)

export default userRouter
