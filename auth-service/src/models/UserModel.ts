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
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: "user",
        sequelize: database
    }
);

export default UserModel;