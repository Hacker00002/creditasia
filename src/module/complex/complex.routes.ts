import { Router } from 'express'
import ComplexController from './complex.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export complex router
export const complexRouter: Router = router
  .post('/admin/complex/create', ComplexController.CREATE_COMPLEX)
  .patch('/admin/complex/update/:id', ComplexController.UPDATE_COMPLEX)
  .delete('/admin/complex/delete/:id', ComplexController.DELETE_COMPLEX)
