import { Types, Schema, model } from 'mongoose'

const CalculateSchema = new Schema(
  {
    id: Types.ObjectId,
    room_id: {
      ref: 'RoomModel',
      type: Types.ObjectId,
    },
    bank_id: {
      ref: 'BankModel',
      type: Types.ObjectId,
    },
    srog_year: Number,
    starter_payment: Number,
    bank_service: Number,
  },
  {
    collection: 'calculate',
    timestamps: true,...Schema
































































      },
)

const calculateModel = model('calculateModel', CalculateSchema)

export default calculateModel
