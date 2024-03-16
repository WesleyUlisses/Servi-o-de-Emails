import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import IDecodedToken from '../interfaces/IDecodedToken';
import IUser from '../interfaces/IUser';
import dotenv from 'dotenv';

class JWTMiddleware {
    
    public static async validateJWT(request: Request, response: Response, next: NextFunction): Promise<Response | void>{
        
        const secret = process.env.JWT_SECRET as string;
        const token = request.headers.authorization;
        
        if (!token) {
            return response.status(401).json({ message: 'Token não informado' });
        }

        try {
            const decoded = jwt.verify(token, secret) as IDecodedToken;
            const user = decoded.user as IUser;
            request.body = user;
            next();
        }
        catch (error: any) {
            return response.status(401).json({ message: 'Token inválido' });
        }
    }

}

export default JWTMiddleware;