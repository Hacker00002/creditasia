import { Router } from 'express'
import CompanyController from './company.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export compony router
export const companyRouter: Router = router
  .get('/admin/company', CompanyController.GET_COMPANY)
  .post('/admin/company/create', CompanyController.CREATE_COMPANY)
  .patch('/admin/company/update/:id', CompanyController.UPDATE_COMPANY)
  .delete('/admin/company/delete/:id', CompanyController.DELETE_COMPANY)
