import { NextFunction, Request, Response } from 'express';
declare const verifytoken: (req: Request, res: Response, next: NextFunction) => any;
export default verifytoken;
