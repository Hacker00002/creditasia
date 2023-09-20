import { Types, Schema, model } from 'mongoose'

const BankSchema = new Schema(
  {
    id: Types.ObjectId,
    bank_name: String,
    bank_percent: Number,
    bank_kredit_amount: Number,
    bank_deposit_amount: Number,
  },
  {
    collection: 'bank',
    timestamps: true,
  },
)

const BankModel = model('BankModel', BankSchema)

export default BankModel
