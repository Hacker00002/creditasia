import type { Request, Response } from 'express'
import { CompanyInterface } from '../../interface'
import CompanyModel from '../../model/company.model'

export default {
  //CREATE COMPANY****************************************************************
  CREATE_COMPANY: async (req: Request, res: Response): Promise<any> => {
    //get company details from request body
    const { company_name, company_description, company_person_name } = req.body as CompanyInterface
    try {
      //create new company
      const newCompany = await CompanyModel.create({ company_name, company_description, company_person_name })
      //sace new company
      newCompany.save()
      //return company response success message
      return res.status(201).json({ message: 'Company created successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //UPDATE ALL COMPANY****************************************************************
  UPDATE_COMPANY: async (req: Request, res: Response): Promise<any> => {
    //get company details from request body
    const { company_name, company_description, company_person_name } = req.body as CompanyInterface
    //get id from request params
    const { id } = req.params
    try {
      //find company id
      await CompanyModel.findOne({ id })
      //update all company
      const updateCompany: any = await CompanyModel.updateOne({
        company_name,
        company_description,
        company_person_name,
      })
      //save company
      updateCompany.save()
      //return company response success message
      return res.status(201).json({ message: 'Company updated successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //DELETE COMPANY****************************************************************
  DELETE_COMPANY: async (req: Request, res: Response): Promise<any> => {
    //get id from request params
    const { id } = req.params
    try {
      //find company id
      await CompanyModel.findOne({ id })
      //delete company
      await CompanyModel.findByIdAndDelete(id)
      //return company response success message
      return res.status(201).json({ message: 'Company deleted successfully' })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  //get company
  GET_COMPANY: async (_: Request, res: Response): Promise<any> => {
    try {
      //find company id
      const complexList = await CompanyModel.find().populate({
        path: 'complex',
        select: ['id', 'complex_name', 'complex_description'],
      })
      //return company response success message
      return res.status(201).json({ message: 'Company fetched successfully', complexList })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
}
