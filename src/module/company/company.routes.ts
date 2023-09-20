import { Router } from 'express'
import CompanyController from './company.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export compony router
export const companyRouter: Router = router
  .get('/company', CompanyController.GET_COMPANY)
  .post('/admin/company/create', verifytoken, CompanyController.CREATE_COMPANY)
  .patch('/admin/company/update/:id', verifytoken, CompanyController.UPDATE_COMPANY)
  .delete('/admin/company/delete/:id', verifytoken, CompanyController.DELETE_COMPANY)
