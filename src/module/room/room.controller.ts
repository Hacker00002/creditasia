import type { Request, Response } from 'express'
import { RoomInterface } from '../../interface'
import RoomModel from '../../model/room.model'
import ComplexModel from '../../model/complex.model'

export default {
  //CREATE ROOM****************************************************************
  CREATE_ROOM: async (req: Request, res: Response): Promise<any> => {
    //get room details from request body
    const {
      room_name,
      room_count,
      room_meters,
      room_all_meters,
      room_location,
      room_all_prices,
      room_credit_price,
      complex_id,
    } = req.body as RoomInterface
    try {
      //find complex id
      const complex = await ComplexModel.findOne({ _id: complex_id })
      //create new room
      const newRoom: any = await RoomModel.create({
        room_name,
        room_count,
        room_meters,
        room_all_meters,
        room_location,
        room_all_prices,
        room_credit_price,
        complex_id,
      })
      //room id push complex
      complex?.room.push(newRoom?._id)
      //save new room
      complex.save()
      //return room response success message
      return res.status(201).json({ message: 'Complex created successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //UPDATE ROOM****************************************************************
  UPDATE_ROOM: async (req: Request, res: Response): Promise<any> => {
    //get room details from request body
    const { room_name, room_count, room_meters, room_all_meters, room_location, room_all_prices, room_credit_price } =
      req.body as RoomInterface
    //find room id from params
    const { id } = req.params
    try {
      //find room id
      await RoomModel.findOne({ id })
      //update room
      await RoomModel.updateOne({
        room_name,
        room_count,
        room_meters,
        room_all_meters,
        room_location,
        room_all_prices,
        room_credit_price,
      })
      //return room response success message
      return res.status(201).json({ message: 'Room updated successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //DELETE ROOM****************************************************************
  DELETE_ROOM: async (req: Request, res: Response): Promise<any> => {
    //get id from request params
    const { id } = req.params
    try {
      //find room id
      const room = await RoomModel.findById(id)
      //complex find by id
      const complex: any = await ComplexModel.findById(room?.complex_id)
      //delete room
      await ComplexModel.findByIdAndUpdate(complex?._id, {
        room: complex?.room.map((e: any) => e.toString()).filter((e: any) => e != id),
      })
      //delete by id
      await RoomModel.findByIdAndDelete(id)
      //save company
      complex.save()
      //return company response success message
      return res.status(201).json({ message: 'Room deleted successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
}
