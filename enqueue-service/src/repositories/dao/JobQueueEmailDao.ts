import { IJobQueueEmail } from '../../interfaces/Interfaces';
import { JobQueueEmailModel } from '../models/Models';

export default class JobQueueEmailDao {

    public async saveJobQueueEmail(jobQueueEmail: IJobQueueEmail): Promise<IJobQueueEmail> {

        try {

            const jobQueueEmailSaved = await JobQueueEmailModel.create({
                idEmail: jobQueueEmail.idEmail,
                idEmailQueue: jobQueueEmail.idEmailQueue
            }) as IJobQueueEmail;

            return jobQueueEmailSaved;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getJobQueueEmailById(idJobQueueEmail: number): Promise<IJobQueueEmail> {

        try {

            const jobQueueEmail = await JobQueueEmailModel.findByPk(idJobQueueEmail) as IJobQueueEmail;

            return jobQueueEmail;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getJobQueueEmails(): Promise<IJobQueueEmail[]> {

        try {

            const jobQueueEmails = await JobQueueEmailModel.findAll() as IJobQueueEmail[];

            return jobQueueEmails;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getJobQueueEmailsByIdEmail(idEmail: number): Promise<IJobQueueEmail[]> {

        try {

            const jobQueueEmails = await JobQueueEmailModel.findAll({
                where: {
                    idEmail
                }
            }) as IJobQueueEmail[];

            return jobQueueEmails;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getJobQueueEmailsByIdEmailQueue(idEmailQueue: number): Promise<IJobQueueEmail[]> {

        try {

            const jobQueueEmails = await JobQueueEmailModel.findAll({
                where: {
                    idEmailQueue
                }
            }) as IJobQueueEmail[];

            return jobQueueEmails;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmail(idJobQueueEmail: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idJobQueueEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailByIdEmail(idEmail: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailByIdEmailQueue(idEmailQueue: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmailQueue
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailByIdEmailAndIdEmailQueue(idEmail: number, idEmailQueue: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmail,
                    idEmailQueue
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailsByIdEmail(idEmail: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailsByIdEmailQueue(idEmailQueue: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmailQueue
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailsByIdEmailAndIdEmailQueue(idEmail: number, idEmailQueue: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmail,
                    idEmailQueue
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailsByIdEmailAndIdEmailQueueAndIdJobQueueEmail(idEmail: number, idEmailQueue: number, idJobQueueEmail: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmail,
                    idEmailQueue,
                    idJobQueueEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailsByIdEmailAndIdJobQueueEmail(idEmail: number, idJobQueueEmail: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmail,
                    idJobQueueEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }


    public async deleteJobQueueEmailsByIdEmailQueueAndIdJobQueueEmail(idEmailQueue: number, idJobQueueEmail: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idEmailQueue,
                    idJobQueueEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteJobQueueEmailsByIdJobQueueEmail(idJobQueueEmail: number): Promise<void> {

        try {

            await JobQueueEmailModel.destroy({
                where: {
                    idJobQueueEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

}