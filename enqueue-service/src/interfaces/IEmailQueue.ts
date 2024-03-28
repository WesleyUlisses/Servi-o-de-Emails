export default interface IEmailQueue {

    idEmailQueue: number;
    name: string;
    status: string;
    startedAt: Date;
    finishedAt: Date;
    result: string;
    errorMessage: string;
    
}