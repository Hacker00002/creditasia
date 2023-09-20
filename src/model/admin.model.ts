import { Types, Schema, model } from 'mongoose'

const AdminSchema = new Schema(
  {
    id: Types.ObjectId,
    admin_name: String,
    admin_email: String,
    admin_phone: String,
    admin_address: String,
    admin_password: String,
  },
  {
    collection: 'admin',
    timestamps: true,
  },
)

const AdminModel = model('AdminModel', AdminSchema)

export default AdminModel
