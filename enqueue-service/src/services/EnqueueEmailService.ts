import Redis from "../configs/Redis";
import { IEmail } from "../interfaces/Interfaces";
import { EmailDao } from "../repositories/dao/Daos";

export default class EnqueueEmailService {

    private emailDao: EmailDao;
    private redis: any;

    constructor() {
        this.emailDao = new EmailDao();
        this.redis = Redis;
    }

    public async enqueueEmail(email: IEmail): Promise<boolean> {

        try {
            
            await this.emailDao.saveEmail(email);
            const emailStr = JSON.stringify(email);
            const enqueued = this.redis.rpush("email_queue", emailStr);

            enqueued.then((result: boolean) => {
                console.log("Email enqueued successfully", result);
                return true;
            }).catch((error: any) => {
                console.log("Error enqueuing email", error);
            });
            
            return false;

        } catch (error: any) {
            throw new Error(error.message);
        }

    }

   
}