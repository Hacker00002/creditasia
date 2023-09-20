import type { Request, Response } from 'express';
declare const _default: {
    CREATE_COMPANY: (req: Request, res: Response) => Promise<any>;
    UPDATE_COMPANY: (req: Request, res: Response) => Promise<any>;
    DELETE_COMPANY: (req: Request, res: Response) => Promise<any>;
    GET_COMPANY: (_: Request, res: Response) => Promise<any>;
};
export default _default;
