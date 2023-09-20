import { Types, Schema, model } from 'mongoose'

const CompanySchema = new Schema(
  {
    id: Types.ObjectId,
    company_name: String,
    company_person_name: String,
    company_description: String,
    complex: [
      {
        ref: 'ComplexModel',
        type: Types.ObjectId,
      },
    ],
  },
  {
    collection: 'company',
    timestamps: true,
  },
)

const CompanyModel = model('CompanyModel', CompanySchema)

export default CompanyModel
