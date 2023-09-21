import { Router } from 'express'
import verifytoken from '../../middleware/checktoken'
import CalculateController from './calculate.controller'
//connection router from express
const router = Router()
//export bank router
export const calculateRouter: Router = router
  .get('/calculate', CalculateController.CREATE_CALCULATE)
//   .post('/admin/bank/create', verifytoken, CalculateController.CREATE_BANK)
//   .patch('/admin/bank/update', verifytoken, CalculateController.UPDATE_BANK)
//   .delete('/admin/bank/delete/:id', verifytoken, CalculateController.DELETE_BANK)
