import KeyServices from "../services/KeyServices";
import { Request, Response } from "express";
import IKey from "../interfaces/IKey";

export default class KeyController {

    private keyServices: KeyServices;

    constructor() {
        this.keyServices = new KeyServices();
    }

    public async registerKey(request: Request, response: Response): Promise<Response> {

        const keyData: IKey = request.body;

        try {
            if (!keyData.userId){
                return response.status(400).json({ message: 'UserId não pode ser vazio' });
            }

            if (!keyData.value){
                return response.status(400).json({ message: 'Chave não pode ser vazia' });
            }

            if(!keyData.name){
                return response.status(400).json({ message: 'Nome não pode ser vazio' });
            }

            const key = await this.keyServices.registerKey(keyData);
            return response.status(201).json({ message: key });

        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }

    public async generateKey(request: Request, response: Response): Promise<Response> {
        try {
            const previousKeyData : IKey = request.body;
            const keyValue = await this.keyServices.generateKey(previousKeyData);

            return response.status(201).json({ message: keyValue });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }

    public async getAllKeysByUserId(request: Request, response: Response): Promise<Response> {
        try {

            const key = request.body as IKey;

            if (!key.userId){
                return response.status(400).json({ message: 'UserId não pode ser vazio' });
            }

            const keys : IKey[] = await this.keyServices.getAllKeysByUserId(key.userId);

            if (keys.length === 0){
                return response.status(404).json({ message: 'Nenhuma chave encontrada' });
            }

            return response.status(200).json(keys);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }

    public async keyExists(request: Request, response: Response): Promise<Response> {
        try {

            const key = request.body as IKey;

            if (!key.value){
                return response.status(400).json({ message: 'Chave não pode ser vazia' });
            }

            const exists = await this.keyServices.keyExists(key.value);

            return response.status(200).json({ message: exists });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }

    public async deleteKey(request: Request, response: Response): Promise<Response> {
        try {

            const key = request.body as IKey;

            if (!key.id){
                return response.status(400).json({ message: 'Id da chave não pode ser vazio' });
            }

            const deleted = await this.keyServices.deleteKey(key.id as number);

            return response.status(200).json({ message: deleted });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }

    public async updateKeyName(request: Request, response: Response): Promise<Response> {

        try {

            const key = request.body as IKey;

            if (!key.id){
                return response.status(400).json({ message: 'Id da chave não pode ser vazio' });
            }

            if (!key.name){
                return response.status(400).json({ message: 'Nome não pode ser vazio' });
            }

            const updated = await this.keyServices.updateKeyName(key);

            return response.status(200).json({ message: updated });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}