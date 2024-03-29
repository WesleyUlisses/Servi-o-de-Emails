import { IEmailQueue } from "../interfaces/Interfaces";
import { DataTypes, Model} from "sequelize";
import { database } from "../configs/Database";

class EmailQueueModel extends Model implements IEmailQueue {
    
    idEmailQueue: number;
    name: string;
    status: string;
    startedAt: Date;
    finishedAt: Date;
    result: string;
    errorMessage: string;
    
}

EmailQueueModel.init({
    idEmailQueue: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    finishedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    result: {
        type: DataTypes.STRING,
        allowNull: true
    },
    errorMessage: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database,
    tableName: "EmailQueue"
});


export default EmailQueueModel;