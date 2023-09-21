import type { Request, Response } from 'express'
import { CalculateInterface } from '../../interface'
import RooModel from '../../model/room.model'
import BankModel from '../../model/bank.model'
import CalculateModel from '../../model/calculate.model'

export default {
  //CALCULATE_CREATE****************************************************************
  CREATE_CALCULATE: async (req: Request, res: Response): Promise<any> => {
    //get calculate details from request body
    const { bank_id, room_id, bank_service, srog_year, starter_payment } = req.body as CalculateInterface
    try {
      //find bank_id from request body
      const bank = await BankModel.findOne({ _id: bank_id })
      //find room_id from request body
      const room = await RooModel.findOne({ _id: room_id })
      //return saved calculate message
      return res.status(201).json({ bank, room })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
}
