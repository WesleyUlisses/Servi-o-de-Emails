import IKey from "../interfaces/IKey";
import KeyModel from "../models/KeyModel";

export default class KeyDao{
    
    public async createKey(key: IKey): Promise<IKey> {
        try {
            const newKey = await KeyModel.create(
                {
                    value: key.value,
                    name: key.name,
                    userId: key.userId
                }
            );
            return newKey as unknown as IKey;
        } catch ( error: any ) {
            throw new Error(`Erro ao criar chave: ${error}`);
        }
    }

    public async getKeyById(id: number): Promise<IKey | null> {
        try {
            const key = await KeyModel.findByPk(id);
            return key as unknown as IKey;
        } catch ( error: any ) {
            throw new Error(`Erro ao buscar chave por ID: ${error}`);
        }
    }

    public async getKeyByValue(value: string): Promise<IKey | null> {
        try {
            const key = await KeyModel.findOne({ where: { value } });
            return key as unknown as IKey;
        } catch ( error: any ) {
            throw new Error(`Erro ao buscar chave por valor: ${error}`);
        }
    }

    public async getKeysByUserId(userId: number): Promise<IKey[] | null> {
        try {
            const keys = await KeyModel.findAll({ where: { userId } });
            return keys as unknown as IKey[];
        } catch ( error: any ) {
            throw new Error(`Erro ao buscar chaves por userId: ${error}`);
        }
    }

    public async updateKeyName(key: IKey): Promise<IKey> {
        try {
            await KeyModel.update(
                {
                    name: key.name,
                },
                {
                    where: { id: key.id }
                }
            );
            return key;
        } catch ( error: any ) {
            throw new Error(`Erro ao atualizar chave: ${error}`);
        }
    }

    public async getAllKeys(): Promise<IKey[] | null> {
        try {
            const keys = await KeyModel.findAll();
            return keys as unknown as IKey[];
        } catch ( error: any ) {
            throw new Error(`Erro ao buscar todas as chaves: ${error}`);
        }
    }

    public async deleteKey(id: number): Promise<void> {
        try {
            await KeyModel.destroy({ where: { id } });
        } catch ( error: any ) {
            throw new Error(`Erro ao deletar chave: ${error}`);
        }
    }

}