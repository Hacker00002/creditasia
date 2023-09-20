import { Router } from 'express'
import AdminController from './admin.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export admin router
export const adminRouter: Router = router
  .get('/admin', verifytoken, AdminController.GET_ADMIN)
  .post('/admin/signin', verifytoken, AdminController.SIGN_IN_ADMIN)
