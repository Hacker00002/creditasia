import { Types, Schema, model } from 'mongoose'

const ComplexSchema = new Schema(
  {
    id: Types.ObjectId,
    complex_name: String,
    complex_description: String,
    company_id: {
      ref: 'CompanyModel',
      type: Types.ObjectId,
    },
  },
  {
    collection: 'complex',
    timestamps: true,
  },
)

const ComplexModel = model('ComplexModel', ComplexSchema)

export default ComplexModel
