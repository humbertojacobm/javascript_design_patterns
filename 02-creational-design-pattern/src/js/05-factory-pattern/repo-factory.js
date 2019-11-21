import Task from "./task-repository";
import User from "./user-repository";
import Project from "./project-repository"

var repoFactory = function() {
   this.getRepo = function (repoType){
     if (repoType === 'task') {
         var taskRepo =  Task;
         return taskRepo;
     }
     if (repoType === 'user') {
        var userRepo =  User;
        return userRepo;
    }
    if (repoType === 'project') {
        var projectRepo =  Project;
        return projectRepo;
    }
   }
};

export default new repoFactory;