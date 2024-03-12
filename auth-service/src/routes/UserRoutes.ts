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
        this.router.post("/create", this.userController.createUser);
        this.router.get("/:id", this.userController.getUserById);
        this.router.put("/:id", this.userController.updateUser);
        this.router.delete("/:id", this.userController.deleteUser);
        this.router.post("/login", this.userController.login);
        return this.router;
    }
}