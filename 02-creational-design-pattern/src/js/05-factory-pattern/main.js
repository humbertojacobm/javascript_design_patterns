console.log('05 factory pattern');
import Task from './task';
import taskRepo from './task-repository';
import userRepo from './user-repository';
import projectRepo from './project-repository';


var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();