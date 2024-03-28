import IEmail from "./IEmail";
import IEmailQueue from "./IEmailQueue";

export default interface IJobQueueEmail {

    email: IEmail;
    emailQueue: IEmailQueue;
    
}