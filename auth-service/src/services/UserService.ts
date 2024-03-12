import IUser from "../interfaces/IUser";
import UserDao from "../repositories/UserDao";
import bcrypt from 'bcrypt';
import jwt, { Jwt } from 'jsonwebtoken';

export default class UserService {

    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    public async createUser(user: IUser): Promise<string> {

        try {

            user.password = await this.createHashedPassword(user.password as string);
            const userCreated = await this.userDao.createUser(user);
            const token = await this.generateJWTToken(userCreated);

            return token;
        }
        catch (error: any) {
            throw new Error(`Erro ao criar usuário: ${error}`);
        }
    }

    public async getUserById(id: number): Promise<IUser | null> {

        try {
            return await this.userDao.getUserById(id);
        }
        catch (error: any) {
            throw new Error(`Erro ao buscar usuário por ID: ${error}`);
        }
    }

    public async getUserByEmail(email: string): Promise<IUser | null> {

        try {
            return await this.userDao.getUserByEmail(email);
        }
        catch (error: any) {
            throw new Error(`Erro ao buscar usuário por email: ${error}`);
        }
    }

    public async updateUser(user: IUser): Promise<IUser> {

        try {
            return await this.userDao.updateUser(user);
        }
        catch (error: any) {
            throw new Error(`Erro ao atualizar usuário: ${error}`);
        }
    }

    public async deleteUser(id: number): Promise<boolean> {

        try {
            const user = await this.userDao.deleteUser(id);
            return user;
        }
        catch (error: any) {
            throw new Error(`Erro ao deletar usuário: ${error}`);
        }
    }

    public async getAllUsers(): Promise<IUser[]> {

        try {
            return await this.userDao.getAllUsers();
        }
        catch (error: any) {
            throw new Error(`Erro ao buscar todos os usuários: ${error}`);
        }
    }

    public async generateJWTToken(user: IUser): Promise<string> {

        return jwt.sign({ user }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    }

    public async verifyJWTToken(token: string): Promise<IUser | null> {

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
            return (decoded as any).user;
        }
        catch (error: any) {
            throw new Error(`Erro ao verificar token: ${error}`);
        }
    }

    public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {

        return await bcrypt.compare(password, hashedPassword);
    }


    public async login(user: IUser): Promise<string | null> {

        try {
            const userDB = await this.userDao.getUserByEmail(user.email as string);

            if (!userDB) {
                return 'Usuário não encontrado';
            }
            const token = await this.generateJWTToken(userDB);
            const isPasswordValid = await this.comparePassword(user.password as string, userDB.password as string);

            if (isPasswordValid) {
                return token;
            }

            return null;
        }
        catch (error: any) {
            throw new Error(`Erro ao realizar login: ${error}`);
        }
    }


    public async createHashedPassword(password: string): Promise<string> {

        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS as string));
        return await bcrypt.hash(password, salt);
    }

}