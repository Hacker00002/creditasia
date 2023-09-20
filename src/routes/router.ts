import { Router } from 'express'
import { bankRouter } from '../module/bank/bank.routes'
import { roomRouter } from '../module/room/room.routes'
import { adminRouter } from '../module/admin/admin.routes'
import { companyRouter } from '../module/company/company.routes'
import { complexRouter } from '../module/complex/complex.routes'

const appRouter: Router = Router()
appRouter.use(companyRouter, complexRouter, adminRouter, roomRouter, bankRouter)
export default appRouter
