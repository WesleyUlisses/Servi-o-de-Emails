import IUser from "../interfaces/IUser";
import UserModel from "../models/UserModel";

export default class UserDao {

    public async createUser(user: IUser): Promise<IUser> {

        try {
            const newUser = await UserModel.create(
                {
                    username: user.username,
                    password: user.password,
                    email: user.email
                }
            );
            
            return newUser as unknown as IUser;

        } catch ( error: any ) {
            throw new Error(`Erro ao criar usuário: ${error}`);
        }
    }

    public async getUserById(id: number): Promise<IUser | null> {

        try {
            const user = await UserModel.findByPk(id);
            return user as unknown as IUser;

        } catch ( error: any ) {
            throw new Error(`Erro ao buscar usuário por ID: ${error}`);
        }
    }

    public async getUserByEmail(email: string): Promise<IUser | null> {

        try {
            const user = await UserModel.findOne({ where: { email } });
            return user as unknown as IUser;

        } catch ( error: any ) {
            throw new Error(`Erro ao buscar usuário por email: ${error}`);
        }
    }

    public async updateUser(user: IUser): Promise<IUser> {

        try {
            await UserModel.update(
                {
                    username: user.username,
                    password: user.password,
                    email: user.email
                },
                {
                    where: { id: user.id }
                }
            );

            return user;

        } catch ( error: any ) {
            throw new Error(`Erro ao atualizar usuário: ${error}`);
        }
    }

    public async deleteUser(id: number): Promise<void> {

        try {
            await UserModel.destroy({ where: { id } });

        } catch ( error: any ) {
            throw new Error(`Erro ao deletar usuário: ${error}`);
        }
    }

    public async getAllUsers(): Promise<IUser[]> {

        try {
            const users = await UserModel.findAll();
            return users as unknown as IUser[];

        } catch ( error: any ) {
            throw new Error(`Erro ao buscar todos os usuários: ${error}`);
        }
    }

}