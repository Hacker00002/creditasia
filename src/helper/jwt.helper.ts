import Jwt from 'jsonwebtoken'

const sign = (payload: any) => Jwt.sign(payload, process.env.SECRET_KEY)
const verify = (token: any) => Jwt.verify(token, process.env.SECRET_KEY)

export default {
  sign,
  verify,
}
