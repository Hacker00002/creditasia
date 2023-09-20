import type { IncomingHttpHeaders } from 'http'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const verifytoken = (req: Request, res: Response, next: NextFunction): any => {
  const { admin_token } = req.headers as IncomingHttpHeaders as any

  if (!admin_token) {
    return res.status(401).json({
      message: 'Admin token is required',
    })
  }

  jwt.verify(admin_token, process.env.SECRET_KEY, async (err: unknown, decoded: any) => {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).json({
        message: 'Admin token expired',
      })
      return
    }

    if (err instanceof jwt.JsonWebTokenError) {
      res.status(401).json({
        message: 'Invalid admin token',
      })
      return
    }

    req.body.id = decoded.id
    next()
  })
}

export default verifytoken
