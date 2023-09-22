import type { Request, Response } from 'express'
import { CalculateInterface } from '../../interface'
import CompanyModel from '../../model/company.model'
import ComplexModel from '../../model/complex.model'
import RoomModel from '../../model/room.model'
import BankModel from '../../model/bank.model'

export default {
  //CALCULATE_CREATE****************************************************************
  CREATE_CALCULATE: async (req: Request, res: Response): Promise<any> => {
    //get calculate details from request body
    const { date_time } = req.body as CalculateInterface
    //get company_id,complex_id,room_id,bank_id from request params
    const { company_id, complex_id, room_id, bank_id } = req.params
    try {
      //find company id
      const find_company_id = await CompanyModel.findOne({ _id: company_id })
      //find company id
      const find_complex_id = await ComplexModel.findOne({ _id: complex_id })
      //find company id
      const find_roomy_id: any = await RoomModel.findOne({ _id: room_id })
      //find bank id
      const find_bank_id: any = await BankModel.findOne({ _id: bank_id })
      //room_all_prices subtract room_credit_price
      const resss = Number(find_roomy_id.room_all_prices) - Number(find_roomy_id.room_credit_price)
      //find mothly credit
      const monthly = Math.floor(resss / (Number(date_time) * 12))
      //fetch calculate and response send all prices
      const data = {
        company_name: find_company_id.company_name,
        complex_name: find_complex_id.complex_name,
        bank_name: find_bank_id?.bank_name,
        bank_kredit_amount: find_bank_id?.bank_kredit_amount,
        room_price: find_roomy_id?.room_all_prices,
        monthly_payment: monthly,
        starter_payment: find_roomy_id?.room_credit_price,
        room_count: find_roomy_id?.room_count,
      }
      //return all response success message
      return res.status(201).json({ calculate_message: data })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
}
