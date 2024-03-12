import UserService from "../services/UserService";
import { Request, Response } from "express";
import IUser from "../interfaces/IUser";

export default class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        
        try {
            const user: IUser = req.body;
            
            if (!user.email && !user.password) {
                res.status(400).send("Email e senha são obrigatórios para operação de criação de usuário");
                return;
            }

            const newUserToken = await this.userService.createUser(user);
            res.status(201).json(newUserToken);
            return;
        } catch (error: any) {
            res.status(500).send(`Erro ao criar usuário: ${error}`);
        }

    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        
        try {
            const id = parseInt(req.params.id);
            const user = await this.userService.getUserById(id);
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).send(`Erro ao buscar usuário por ID: ${error}`);
        }

    }


    public async updateUser(req: Request, res: Response): Promise<void> {
        
        try {
            const user: IUser = req.body;

            if (!user.id) {
                res.status(400).send("ID é obrigatório");
                return;
            }

            if (!user.email && !user.password) {
                res.status(400).send("Email ou senha são obrigatórios para operação de deleção de usuário");
                return;
            }

            const updatedUser = await this.userService.updateUser(user);
            res.status(200).json(updatedUser);
        } catch (error: any) {
            res.status(500).send(`Erro ao atualizar usuário: ${error}`);
        }

    }


    public async deleteUser(req: Request, res: Response): Promise<void> {
        
        try {

            const user: IUser = req.body;

            if (!user.id) {
                res.status(400).send("ID é obrigatório");
                return;
            }

            const id = parseInt(user.id);
            const userDeleted = await this.userService.deleteUser(id);
            
            if(!userDeleted) {
                res.status(401).send("Usuário não encontrado");
                return;
            }

            res.status(200).send("Usuário deletado com sucesso");
            return;
        } catch (error: any) {
            res.status(500).send(`Erro ao deletar usuário: ${error}`);
        }

    }

    public async login(req: Request, res: Response): Promise<void> {

        try {
            const user: IUser = req.body;
            
            if (!user.email || !user.password) {
                res.status(400).send("Email e senha são obrigatórios");
                return;
            }

            const login = await this.userService.login(user);
            
            if(login === null) {
                res.status(401).send("Email ou senha inválidos");
                return;
            }

            res.status(200).json({ login });
            return;
        } catch (error: any) {
            res.status(500).send(`Erro ao buscar todos os usuários: ${error}`);
        }
    }
}