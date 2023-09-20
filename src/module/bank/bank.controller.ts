import type { Request, Response } from 'express'
import { BankInterface } from '../../interface'
import BankModel from '../../model/bank.model'

export default {
  //CREATE BANK****************************************************************
  CREATE_BANK: async (req: Request, res: Response): Promise<any> => {
    //get bank details from request body
    const { bank_name, bank_percent, bank_kredit_amount, bank_deposit_amount } = req.body as BankInterface
    try {
      //find bank by name
      const checkbank = await BankModel.findOne({ bank_name })
      //check bank
      if (checkbank) {
        return res.status(404).json({ message: `${bank_name} already created` })
      }
      //create new bank
      const newbank = await BankModel.create({
        bank_name,
        bank_percent,
        bank_kredit_amount,
        bank_deposit_amount,
      })
      //save new bank
      newbank.save()
      //return saved bank message
      return res.status(201).json({ message: 'Bank created successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //UPDATE BANK****************************************************************
  UPDATE_BANK: async (req: Request, res: Response): Promise<any> => {
    //get bank details from request body
    const { bank_name, bank_percent, bank_kredit_amount, bank_deposit_amount } = req.body as BankInterface
    //find params id
    const { id } = req.params
    try {
      //find bank by id
      await BankModel.findOne({ id })
      //update bank
      const updatedbank: any = await BankModel.updateOne(
        {
          bank_name,
          bank_percent,
          bank_kredit_amount,
          bank_deposit_amount,
        },
        { new: true },
      )
      //save updated bank
      updatedbank.save()
      //return updated bank message
      return res.status(201).json({ message: 'Bank updated successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //DELETE BANK****************************************************************
  DELETE_BANK: async (req: Request, res: Response): Promise<any> => {
    //find params id
    const { id } = req.params
    try {
      //find bank by id
      await BankModel.findOne({ id })
      //delete bank
      const deletedbank: any = await BankModel.findByIdAndDelete({ id })
      //save deleted bank
      deletedbank.save()
      //return deleted bank message
      return res.status(201).json({ message: 'Bank deleted successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //GET ALL BANK****************************************************************
  GET_ALL_BANK: async (_: Request, res: Response): Promise<any> => {
    try {
      //find all banks
      const allbanks = await BankModel.find()
      //return all banks
      return res.status(200).json(allbanks)
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
}
