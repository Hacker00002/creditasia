import type { Request, Response } from 'express';
declare const _default: {
    CREATE_COMPLEX: (req: Request, res: Response) => Promise<any>;
    UPDATE_COMPLEX: (req: Request, res: Response) => Promise<any>;
    DELETE_COMPLEX: (req: Request, res: Response) => Promise<any>;
    GET_COMPLEX: (_: Request, res: Response) => Promise<any>;
    GET_COMPLEX_WITH_ID: (req: Request, res: Response) => Promise<any>;
};
export default _default;
