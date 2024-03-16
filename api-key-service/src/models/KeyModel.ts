import { DataTypes, Model} from "sequelize";
import { database } from "../configs/Database";
import UserModel from "./UserModel";

class KeyModel extends Model {

    public id!: number;
    public value!: string;
    public name!: string;
    public userId!: number;

}

KeyModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        value: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "key",
        sequelize: database
    }
);

KeyModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    as: 'user'
});

export default KeyModel;