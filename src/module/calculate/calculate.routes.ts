import { Router } from 'express'
import CalculateController from './calculate.controller'
//connection router from express
const router = Router()
//export calculate router
export const calculateRouter: Router = router
  .post('/calculate/:company_id/:complex_id/:room_id/:bank_id', CalculateController.CREATE_CALCULATE)
