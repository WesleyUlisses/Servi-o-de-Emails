import KeyController from "../controllers/KeyController";
import { Router } from "express";
import JWTMiddleware from "../middlewares/jwtMiddleware";

export default class KeyRoutes {

    private keyController: KeyController;
    private router: Router;

    constructor() {
        this.keyController = new KeyController();
        this.router = Router();
        this.routes();
    }

    public routes(): Router {
        this.router.post("/register-key",               JWTMiddleware.validateJWT, this.keyController.registerKey);
        this.router.post("/generate-key",               JWTMiddleware.validateJWT, this.keyController.generateKey);
        this.router.post("/validate-key",               JWTMiddleware.validateJWT, this.keyController.keyExists);
        this.router.get("/get-all-by-user-id/:id",      JWTMiddleware.validateJWT, this.keyController.getAllKeysByUserId);
        this.router.put("/update-key-name/:id",         JWTMiddleware.validateJWT, this.keyController.updateKeyName);
        this.router.delete("/delete-key/:id",           JWTMiddleware.validateJWT, this.keyController.deleteKey);
        return this.router;
    }
}