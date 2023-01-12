const express = require('express')
const projectController = require('../controllers/project.controller')
const projectRouter = express.Router()

projectRouter.post('/',projectController.createProject);
projectRouter.put('/update/:id',projectController.updateProject);
projectRouter.delete('/delete/:id',projectController.deleteProject);
projectRouter.get('/:id',projectController.getProject);
projectRouter.get('/:userId/asc/:page',projectController.getProjectsByPageAsc);
projectRouter.get('/:userId/desc/:page',projectController.getProjectsByPageDesc);


module.exports = projectRouter;