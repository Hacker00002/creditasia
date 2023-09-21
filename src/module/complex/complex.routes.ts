import { Router } from 'express'
import ComplexController from './complex.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export complex router
export const complexRouter: Router = router
  .get('/complex', ComplexController.GET_COMPLEX)
  .get('/complex/:roomid', ComplexController.GET_COMPLEX_WITH_ID)
  .post('/admin/complex/create', verifytoken, ComplexController.CREATE_COMPLEX)
  .patch('/admin/complex/update/:id', verifytoken, ComplexController.UPDATE_COMPLEX)
  .delete('/admin/complex/delete/:id', verifytoken, ComplexController.DELETE_COMPLEX)
