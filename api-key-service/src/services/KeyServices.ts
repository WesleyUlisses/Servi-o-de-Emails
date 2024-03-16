import KeyDao from "../repositories/KeyDao";
import IKey from "../interfaces/IKey";
import bycript from 'bcrypt';

export default class KeyServices {

    private keyDao: KeyDao;

    constructor() {
        this.keyDao = new KeyDao();
    }

    public async keyExists(value: string): Promise<boolean> {
        try {
            const keys = await this.keyDao.getAllKeys() as IKey[];

            for (const key of keys) {

                const exists = await bycript.compare(value, key.value as string);

                if (exists) {
                    return true;
                }
            }
            return false;
        } catch (error: any) {
            throw new Error(`Erro ao verificar se chave existe: ${error}`);
        }
    }


    public async generateUniqueKey(length: number): Promise<string> {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/+_@#$%&*';
        let key = '';

        for (let i = 0; i < length; i++) {
            key += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        if (await this.keyExists(key)) {
            return this.generateUniqueKey(length);
        }

        return key;
    }


    public async generateKey(keyData: IKey): Promise<string> {

        try {

            if (!keyData.name) {
                return 'Propriedade "name" não pode ser vazia';
            }

            if (!keyData.userId) {
                return 'Propriedade "userId" não pode ser vazia';
            }

            keyData.value = await this.generateUniqueKey(32);
            const key = await this.registerKey(keyData);

            return keyData.value as string;

        } catch (error: any) {
            throw new Error(`Erro ao gerar chave: ${error}`);
        }
    }

    public async registerKey(keyData: IKey): Promise<string> {

        try {
            if (!keyData.value) {
                return 'Chave não pode ser vazia';
            }

            if (await this.keyExists(keyData.value)) {
                return 'Chave já existe';
            }

            if (!keyData.name) {
                return 'Nome não pode ser vazio';
            }

            if (!keyData.userId) {
                return 'Usuário não informado';
            }

            keyData.value = await this.encriptKey(keyData.value);
            const key = await this.keyDao.createKey(keyData);

            return 'Chave registrada com sucesso';
        } catch (error: any) {
            throw new Error(`Erro ao criar chave: ${error}`);
        }
    }

    public async encriptKey(keyValue: string): Promise<string> {

        const salt = await bycript.genSalt(10);
        const encriptedKey = await bycript.hash(keyValue, salt);

        return encriptedKey;
    }

    public async getAllKeysByUserId(userId: number): Promise<IKey[]> {
        try {
            const keys = await this.keyDao.getKeysByUserId(userId) as IKey[];
            return keys;
        } catch (error: any) {
            throw new Error(`Erro ao buscar chaves por userId: ${error}`);
        }
    }

    public async deleteKey(keyId: number): Promise<string> {
        try {
            const key = await this.keyDao.getKeyById(keyId) as IKey;

            if (!key) {
                return 'Chave não encontrada';
            }

            await this.keyDao.deleteKey(keyId);
            return 'Chave deletada com sucesso';
        } catch (error: any) {
            throw new Error(`Erro ao deletar chave: ${error}`);
        }
    }

    public async updateKeyName(keyData: IKey): Promise<string> {
        try {
            const key = await this.keyDao.getKeyById(keyData.id as number) as IKey;

            if (!key) {
                return 'Chave não encontrada';
            }

            if (!keyData.name) {
                return 'Nome não pode ser vazio';
            }

            await this.keyDao.updateKeyName(keyData);

            return 'Chave atualizada com sucesso';
        } catch (error: any) {
            throw new Error(`Erro ao atualizar chave: ${error}`);
        }
    }
}