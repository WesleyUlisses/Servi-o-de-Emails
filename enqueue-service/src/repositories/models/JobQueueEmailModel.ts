import { IJobQueueEmail } from "../../interfaces/Interfaces";
import EmailModel from "./EmailModel";
import EmailQueueModel from "./EmailQueueModel";
import { DataTypes, Model} from "sequelize";
import { database } from "../../configs/Database";

class JobQueueEmailModel extends Model implements IJobQueueEmail {
    
    idJobQueueEmail: number;
    idEmail: number;
    idEmailQueue: number;
    
}

JobQueueEmailModel.init({
    idJobQueueEmail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idEmail: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idEmailQueue: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database,
    tableName: "JobQueueEmail"
});

JobQueueEmailModel.belongsTo(EmailModel, {
    foreignKey: "idEmail"
});

JobQueueEmailModel.belongsTo(EmailQueueModel, {
    foreignKey: "idEmailQueue"
});

export default JobQueueEmailModel;