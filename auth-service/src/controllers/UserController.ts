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
            const newUser = await this.userService.createUser(user);
            res.status(201).json(newUser);
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


    public async getUserByEmail(req: Request, res: Response): Promise<void> {
        
        try {
            const email = req.params.email;
            const user = await this.userService.getUserByEmail(email);
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).send(`Erro ao buscar usuário por email: ${error}`);
        }

    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        
        try {
            const user: IUser = req.body;
            const updatedUser = await this.userService.updateUser(user);
            res.status(200).json(updatedUser);
        } catch (error: any) {
            res.status(500).send(`Erro ao atualizar usuário: ${error}`);
        }

    }


    public async deleteUser(req: Request, res: Response): Promise<void> {
        
        try {
            const id = parseInt(req.params.id);
            await this.userService.deleteUser(id);
            res.status(200).send("Usuário deletado com sucesso");
        } catch (error: any) {
            res.status(500).send(`Erro ao deletar usuário: ${error}`);
        }

    }

    public async getAllUsers(req: Request, res: Response): Promise<void> {
        
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).send(`Erro ao buscar todos os usuários: ${error}`);
        }

    }
}