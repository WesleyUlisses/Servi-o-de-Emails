import { IEmailQueue } from "../../interfaces/Interfaces";
import { EmailQueueModel } from "../models/Models";

export default class EmailQueueDao {

    public async saveEmailQueue(emailQueue: IEmailQueue): Promise<IEmailQueue> {

        try {

            const emailQueueSaved = await EmailQueueModel.create({
                name: emailQueue.name,
                status: emailQueue.status,
                startedAt: emailQueue.startedAt,
                finishedAt: emailQueue.finishedAt,
                result: emailQueue.result,
                errorMessage: emailQueue.errorMessage
            }) as IEmailQueue;

            return emailQueueSaved;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getEmailQueueById(idEmailQueue: number): Promise<IEmailQueue> {

        try {

            const emailQueue = await EmailQueueModel.findByPk(idEmailQueue) as IEmailQueue;

            return emailQueue;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getEmailQueues(): Promise<IEmailQueue[]> {

        try {

            const emailQueues = await EmailQueueModel.findAll() as IEmailQueue[];

            return emailQueues;

        } catch (error: any) {
            throw new Error(error);
        }
    }


    public async getEmailQueuesByStatus(status: string): Promise<IEmailQueue[]> {

        try {

            const emailQueues = await EmailQueueModel.findAll({
                where: {
                    status
                }
            }) as IEmailQueue[];

            return emailQueues;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    
}