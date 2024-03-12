import UserController from "../controllers/UserController";
import { Router } from "express";

export default class UserRoutes {
    private userController: UserController;
    private router: Router;

    constructor() {
        this.userController = new UserController();
        this.router = Router();
        this.routes();
    }

    public routes(): Router {
        this.router.post("/", this.userController.createUser);
        this.router.get("/:id", this.userController.getUserById);
        this.router.get("/email/:email", this.userController.getUserByEmail);
        this.router.put("/:id", this.userController.updateUser);
        return this.router;
    }
}