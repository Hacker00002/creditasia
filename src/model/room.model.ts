import { Types, Schema, model } from 'mongoose'

const RoomSchema = new Schema(
  {
    id: Types.ObjectId,
    room_name: String,
    room_count: Number,
    room_meters: Number,
    room_location: String,
    room_all_prices: Number,
    room_credit_price: Number,
    mortgage: [
      {
        ref: 'MortgageModel',
        type: Types.ObjectId,
      },
    ],
  },
  {
    collection: 'room',
    timestamps: true,
  },
)

const RoomModel = model('RoomModel', RoomSchema)

export default RoomModel
