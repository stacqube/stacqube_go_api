const modulesModel = require('../models/modules');
const submodulesModel = require('../models/submodules');

class ModulesService {
    async createModule(
        moduleName, moduleDescription
    ) {
        try {
            const moduleData = {
                moduleName: moduleName,
                moduleDescription: moduleDescription,
            };
            const module = await modulesModel.create(moduleData);
            return module;
        } catch (error) {
            console.error('Error creating module:', error);
            throw new Error('Error creating module');
        }
       
    }
    async getModules() {
        //Include submodules
        return await modulesModel.findAll({
            include:[
                {
                    model: submodulesModel,
                    as: 'submodules'
                }
            ]
        });
    }
    async getModuleById(id) {
        return await modulesModel.findByPk(id);
    }
    async updateModule(id, module) {
        return await modulesModel.update(module, {
            where: {
                id: id
            }
        });
    }
    async deleteModule(id) {
        return await modulesModel.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new ModulesService();