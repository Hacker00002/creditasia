import { Router } from 'express'
import RoomController from './room.controller'
import verifytoken from '../../middleware/checktoken'
//connection router from express
const router = Router()
//export room router
export const roomRouter: Router = router
  .post('/admin/room/create', verifytoken, RoomController.CREATE_ROOM)
  .patch('/admin/room/update/:id', verifytoken, RoomController.UPDATE_ROOM)
  .delete('/admin/room/delete/:id', verifytoken, RoomController.DELETE_ROOM)
