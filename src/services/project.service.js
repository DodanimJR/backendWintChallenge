const client = require('../database/client');

class projectService{
    async createProject(data){
        try {
            const project = await client.project.create({
                data: data
            });
            return project;
        } catch (error) {
            return error;
        }
    }
    async getProjects(userId,type){
        try {
            const projects = await client.project.findMany({
                where: {
                    userId: userId
                },
                take: 10,
                orderBy: {
                    createdAt: type
                }
            });
            return projects;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    async getProjectsByPage(userId,type,page){
        try {
            const projects = await client.project.findMany({
                where: {
                    userId: userId
                },
                take: 10,
                skip: (page - 1) * 10,
                orderBy: {
                    createdAt: type
                }
            });
            return projects;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    async getProject(id){
        try {
            const project = await client.project.findUnique({
                where: {
                    id: id
                }
            });
            return project;
        } catch (error) {
            return error;
        }
    }
    async deleteProject(id){
        try {
            const project = await client.project.delete({
                where: {
                    id: id,
                }
            });
            return project;
        } catch (error) {
            return error;
        }
    }
    async updateProject(id, data){
        try {
            const project = await client.project.update({
                where: {
                    id: id
                },
                data: data
            });
            return project;
        } catch (error) {
            return error;
        }
    }

}


module.exports = new projectService();

