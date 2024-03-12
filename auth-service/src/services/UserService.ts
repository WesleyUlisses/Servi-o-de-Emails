import IUser from "../interfaces/IUser";
import UserDao from "../repositories/UserDao";

export default class UserService {

    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    public async createUser(user: IUser): Promise<IUser> {
        
        try{
            return await this.userDao.createUser(user);
        }
        catch(error: any){
            throw new Error(`Erro ao criar usuário: ${error}`);
        }
    }

    public async getUserById(id: number): Promise<IUser | null> {
        
        try{
            return await this.userDao.getUserById(id);
        }
        catch(error: any){
            throw new Error(`Erro ao buscar usuário por ID: ${error}`);
        }
    }

    public async getUserByEmail(email: string): Promise<IUser | null> {
        
        try{
            return await this.userDao.getUserByEmail(email);
        }
        catch(error: any){
            throw new Error(`Erro ao buscar usuário por email: ${error}`);
        }
    }

    public async updateUser(user: IUser): Promise<IUser> {
        
        try{
            return await this.userDao.updateUser(user);
        }
        catch(error: any){
            throw new Error(`Erro ao atualizar usuário: ${error}`);
        }
    }

    public async deleteUser(id: number): Promise<void> {
        
        try{
            await this.userDao.deleteUser(id);
        }
        catch(error: any){
            throw new Error(`Erro ao deletar usuário: ${error}`);
        }
    }

    public async getAllUsers(): Promise<IUser[]> {
        
        try{
            return await this.userDao.getAllUsers();
        }
        catch(error: any){
            throw new Error(`Erro ao buscar todos os usuários: ${error}`);
        }
    }

}