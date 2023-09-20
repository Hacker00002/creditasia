import type { Request, Response } from 'express';
declare const _default: {
    CREATE_BANK: (req: Request, res: Response) => Promise<any>;
    UPDATE_BANK: (req: Request, res: Response) => Promise<any>;
    DELETE_BANK: (req: Request, res: Response) => Promise<any>;
    GET_ALL_BANK: (_: Request, res: Response) => Promise<any>;
};
export default _default;
