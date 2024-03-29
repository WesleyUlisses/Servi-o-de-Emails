import { IEmail } from "../../interfaces/Interfaces";
import { EmailModel } from "../models/Models";

export default class EmailDao {


    public async saveEmail(email: IEmail): Promise<IEmail> {


        try {

            const emailSaved = await EmailModel.create({
                sender: email.sender,
                receiver: email.receiver,
                subject: email.subject,
                body: email.body,
                api_key: email.api_key
            }) as IEmail;

            return emailSaved;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getEmailById(idEmail: number): Promise<IEmail> {

        try {

            const email = await EmailModel.findByPk(idEmail) as IEmail;

            return email;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getEmails(): Promise<IEmail[]> {

        try {

            const emails = await EmailModel.findAll() as IEmail[];

            return emails;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getEmailsByReceiver(receiver: string): Promise<IEmail[]> {

        try {

            const emails = await EmailModel.findAll({
                where : {
                    receiver
                }
            }) as IEmail[];

            return emails;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getEmailsBySender(sender: string): Promise<IEmail[]> {

        try {

            const emails = await EmailModel.findAll({
                where : {
                    sender
                }
            }) as IEmail[];

            return emails;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteEmailById(idEmail: number): Promise<void> {

        try {

            await EmailModel.destroy({
                where: {
                    idEmail
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteEmailsByReceiver(receiver: string): Promise<void> {

        try {

            await EmailModel.destroy({
                where: {
                    receiver
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteEmailsBySender(sender: string): Promise<void> {

        try {

            await EmailModel.destroy({
                where: {
                    sender
                }
            });

        } catch (error: any) {
            throw new Error(error);
        }
    }
}