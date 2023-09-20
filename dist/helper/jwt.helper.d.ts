import Jwt from 'jsonwebtoken';
declare const _default: {
    sign: (payload: any) => string;
    verify: (token: any) => string | Jwt.JwtPayload;
};
export default _default;
