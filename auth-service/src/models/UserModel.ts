import { DataTypes, Model} from "sequelize";
import { database } from "../configs/Database";

class UserModel extends Model {

    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string;

}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: "user",
        sequelize: database
    }
);

export default UserModel;