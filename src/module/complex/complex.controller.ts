import type { Request, Response } from 'express'
import { ComplexInterface } from '../../interface'
import ComplexModel from '../../model/complex.model'
import CompanyModel from '../../model/company.model'

export default {
  //CREATE COMPLEX****************************************************************
  CREATE_COMPLEX: async (req: Request, res: Response): Promise<any> => {
    //get complex details from request body
    const { complex_name, complex_description, company_id } = req.body as ComplexInterface
    try {
      //find company id
      const company = await CompanyModel.findOne({ _id: company_id })
      //create new complex
      const newComplex: any = await ComplexModel.create({
        complex_name,
        complex_description,
        company_id,
      })
      //complex push new complex
      company?.complex.push(newComplex?._id)
      //save company details
      company.save()
      //update and find by id
      await CompanyModel.findByIdAndUpdate({ _id: company_id }, { complex_id: company.complex })
      //save complex
      newComplex.save()
      //return company response success message
      return res.status(201).json({ message: 'Complex created successfully' })
      //cetch the error
    } catch (error: any) {
      //cetch the error message
      return res.status(404).json({ message: error.message })
    }
  },
  //UPDATE COMPLEX****************************************************************
  UPDATE_COMPLEX: async (req: Request, res: Response): Promise<any> => {
    //get complex details from request body
    const { complex_name, complex_description } = req.body as ComplexInterface
    //find complex id from params
    const { id } = req.params
    try {
      //find complex id
      await ComplexModel.findOne({ id })
      //update complex
      const updateComplex: any = await ComplexModel.updateOne({
        complex_name,
        complex_description,
      })
      //save complex
      updateComplex.save()
      //return company response success message
      return res.status(201).json({ message: 'Complex updated successfully' })
      //cetch the error
    } catch (error: any) {
      //cetch the error message
      return res.status(404).json({ message: error.message })
    }
  },
  //DELETE COMPLEX****************************************************************
  DELETE_COMPLEX: async (req: Request, res: Response): Promise<any> => {
    //get id from request params
    const { id } = req.params
    try {
      //find company id
      const complex = await ComplexModel.findById(id)
      //company find by id
      const company: any = await CompanyModel.findById(complex?.company_id)
      //delete company
      await CompanyModel.findByIdAndUpdate(company?._id, {
        complex: company?.complex.map((e: any) => e.toString()).filter((e: any) => e != id),
      })
      //delete by id
      await ComplexModel.findByIdAndDelete(id)
      //save company
      company.save()
      //return company response success message
      return res.status(201).json({ message: 'Complex deleted successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //GET ALL COMPLEX****************************************************************
  GET_COMPLEX: async (_: Request, res: Response): Promise<any> => {
    try {
      //find complex id
      const roomList = await ComplexModel.find().populate({
        path: 'room',
        select: [
          'id',
          'room_name',
          'room_count',
          'room_meters',
          'room_all_meters',
          'room_location',
          'room_all_prices',
          'room_credit_price',
          'complex_id',
        ],
      })
      //return company response success message
      return res.status(201).json({ message: 'Company fetched successfully', roomList })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
}
