import { Router } from 'express'
import BankController from './bank.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export bank router
export const bankRouter: Router = router
  .get('/bank', BankController.GET_ALL_BANK)
  .post('/admin/bank/create', verifytoken, BankController.CREATE_BANK)
  .patch('/admin/bank/update', verifytoken, BankController.UPDATE_BANK)
  .delete('/admin/bank/delete/:id', verifytoken, BankController.DELETE_BANK)
