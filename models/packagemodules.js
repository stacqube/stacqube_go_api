
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const PackageModules = sequelize.define('PackageModules', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    packageId: {
        type: DataTypes.UUID,
        references: {
            model: 'SubscriptionPackage',
            key: 'id'
        }
    },
    moduleId: {
        type: DataTypes.UUID,
        references: {
            model: 'Modules',
            key: 'id'
        }
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = PackageModules;
