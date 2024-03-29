import { Request, Response } from 'express';
import { EnqueueEmailService } from '../services/Services';
import { IEmail } from '../interfaces/Interfaces';

export default class EnqueueEmailController {

    private enqueueEmailService: EnqueueEmailService;

    constructor() {
        this.enqueueEmailService = new EnqueueEmailService();
    }

    public async enqueueEmail(req: Request, res: Response): Promise<void> {

        try {
            
            const email: IEmail = req.body;

            if (!email.receiver || !email.sender || !email.api_key) {
                res.status(400).json({ message: "Invalid email data" });
                return;
            }

            const enqueued = await this.enqueueEmailService.enqueueEmail(email);

            enqueued ? res.status(201).json({ message: "Email enqueued successfully" }) : res.status(404).json({ message: "Error enqueuing email" });

        } catch (error: any) {
            res.status(500).json({ message: "Error enqueuing email" });
        }

    }
}