console.log("main 2");
import Task from './task';
//import repoFactory from './repo-factory';
import repoFactory from './repo-factory-w-cache';

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

task1.save();