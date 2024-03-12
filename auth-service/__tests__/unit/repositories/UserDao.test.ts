import UserDao from "../../../src/repositories/UserDao";
import IUser from "../../../src/interfaces/IUser";
import UserModel from "../../../src/models/UserModel";
import { describe, it, expect, jest } from "@jest/globals";


describe('UserDao', () => {
    describe('createUser', () => {
        it('should create a new user with valid input data', async () => {
            // Arrange
            const userDao = new UserDao();
            const user = {
                username: 'testuser',
                password: 'testpassword',
                email: 'test@example.com',
            } as IUser;

            // Mock UserModel.create to return the user
            const createMock = jest.spyOn(UserModel, 'create').mockResolvedValue(user);

            // Act
            const result = await userDao.createUser(user);

            // Assert
            expect(createMock).toHaveBeenCalledWith({
                username: user.username,
                password: user.password,
                email: user.email,
            });
            expect(result).toEqual(user);
        });

        it('should throw an error if UserModel.create fails', async () => {
            // Arrange
            const userDao = new UserDao();
            const user = {
                username: 'testuser',
                password: 'testpassword',
                email: 'test@example.com'
            } as IUser;

            // Mock UserModel.create to throw an error
            const error = new Error('Database error');
            const createMock = jest.spyOn(UserModel, 'create').mockRejectedValue(error);

            // Act and Assert
            await expect(userDao.createUser(user)).rejects.toThrow(`Erro ao criar usuário: ${error}`);
        });
    });
});