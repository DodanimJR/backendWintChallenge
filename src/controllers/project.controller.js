const {request, response} = require('express');
const ProjectModel = require('../models/project.model');
const projectService = require('../services/project.service');

class projectController{
    createProject = async (req, res) => {
        try {
            const data = req.body;
            const validate = await ProjectModel.projectModel.validate(data);
            
            if(validate.error){
                throw new Error(validate.error.details[0].message);
            }else{
                const project = await projectService.createProject(validate.value);
                
                res.json({message: `Project ${project.name} created`}); 
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message: error.message});
        }
    }
    getProjectsByPageAsc = async (req, res) => {
        try {
            const {userId, page} = req.params;
            const projects = await projectService.getProjectsByPage(parseInt(userId),'asc',parseInt(page));
            if(projects.length > 0){
                res.json(projects);
            }else{
                throw new Error('No projects found');
            }
        } catch (error) {
            res.json({message: error.message});
        }
    }
    getProjectsByPageDesc = async (req, res) => {
        try {
            const {userId, page} = req.params;
            const projects = await projectService.getProjectsByPage(parseInt(userId),'desc',parseInt(page));
            if(projects.length > 0){
                res.json(projects);
            }else{
                throw new Error('No projects found');
            }
        } catch (error) {
            res.json({message: error.message});
        }
    }


    getProject = async (req, res) => {
        const {id} = req.params;
        const project = await projectService.getProject(parseInt(id));
        res.json(project);
    }
    deleteProject = async (req, res) => {
        const {id} = req.params;
        await Project.findByIdAndDelete(id);
        res.json({message: 'Project deleted'});
    }
    updateProject = async (req, res) => {
        const {id} = req.params;
        const data = req.body;
    }
        
}

module.exports = new projectController();