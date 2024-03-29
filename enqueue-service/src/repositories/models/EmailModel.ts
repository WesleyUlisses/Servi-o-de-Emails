import { IEmail } from "../../interfaces/Interfaces";
import { DataTypes, Model} from "sequelize";
import { database } from "../../configs/Database";

class EmailModel extends Model implements IEmail {
    
    idEmail: number;
    sender: string;
    receiver: string;
    subject: string;
    body: string;

}

EmailModel.init({
    idEmail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    receiver: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database,
    tableName: "Email"
});


export default EmailModel;