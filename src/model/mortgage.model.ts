import { Types, Schema, model } from 'mongoose'

const MortgageSchema = new Schema(
  {
    id: Types.ObjectId,
    mortgage_name: String,
    mortgage_srog: Number,
  },
  {
    collection: 'mortgage',
    timestamps: true,
  },
)

const MortgageModel = model('MortgageModel', MortgageSchema)

export default MortgageModel
