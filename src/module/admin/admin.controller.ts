import type { Request, Response } from 'express'
import { AdminInterface } from '../../interface'
import AdminModel from '../../model/admin.model'
import jwt from '../../helper/jwt.helper'
import bcrypt from 'bcrypt'

export default {
  //SIGNIN ADMIN****************************************************************
  SIGN_IN_ADMIN: async (req: Request, res: Response): Promise<any> => {
    //get admin details from request body
    const { admin_email, admin_password } = req.body as AdminInterface
    try {
      //find the admin
      const admin = await AdminModel.findOne({ admin_email })
      //chack the email from admin
      if (!admin) {
        return res.status(404).json({ message: `${admin_email} email not found` })
      }
      //hash the admin password
      const hash = await bcrypt.compare(admin_password, admin?.admin_password)
      //check admin password
      if (!hash) {
        return res.status(404).json({ message: 'password is invalid' })
      }
      //create the new token
      const accesToken = jwt.sign({ admin_id: admin?.id })
      //return admin response success message
      return res.status(404).json({ message: 'Admin successfully entered', accesToken })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
  // //SIGNUP ADMIN****************************************************************
  // SIGN_UP_ADMIN: async (req: Request, res: Response): Promise<any> => {
  //   //get admin details from request body
  //   const { admin_name, admin_email, admin_phone, admin_address, admin_password } = req.body as AdminInterface
  //   try {
  //     //find the admin
  //     const admin = await AdminModel.findOne({ admin_email })
  //     //chack the email from admin
  //     if (admin) {
  //       return res.status(404).json({ message: `${admin_email} emai` })
  //     }
  //     //hash the admin password
  //     const hash = await bcrypt.hash(admin_password, 10)
  //     //create a new admin
  //     const newAdmin = new AdminModel({
  //       admin_name,
  //       admin_email,
  //       admin_phone,
  //       admin_address,
  //       admin_password: hash,
  //     })
  //     //save the new admin
  //     newAdmin.save()
  //     //create the new token
  //     const accesToken = jwt.sign({ admin_id: newAdmin?.id })
  //     //return admin response success message
  //     return res.status(404).json({ message: 'Admin successfully entered', accesToken })
  //     //cetch the error
  //   } catch (error: any) {
  //     //return error message
  //     return res.status(404).json({ message: error.message })
  //   }
  // },
  // GET ADMIN****************************************************************
  GET_ADMIN: async (_: Request, res: Response): Promise<any> => {
    try {
      //find the admin
      const admin = await AdminModel.find()
      //return admin response success message
      return res.status(404).json({ message: 'Admin successfully fetched', admin })
      //cetch the error
    } catch (error: any) {
      //return error message
      return res.status(404).json({ message: error.message })
    }
  },
}
