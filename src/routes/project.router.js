const express = require('express')
const projectController = require('../controllers/project.controller')
const projectRouter = express.Router()

projectRouter.post('/',projectController.createProject);
projectRouter.get('/:userId/asc',projectController.getProjectsAsc);
projectRouter.get('/:userId/desc',projectController.getProjectsDesc);


module.exports = projectRouter;