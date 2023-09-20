import { Router } from 'express'
import RoomController from './room.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export room router
export const roomRouter: Router = router
  .post('/admin/room/create', RoomController.CREATE_ROOM)
//   .patch('/admin/complex/update/:id', RoomController.UPDATE_COMPLEX)
//   .delete('/admin/complex/delete/:id', RoomController.DELETE_COMPLEX)
