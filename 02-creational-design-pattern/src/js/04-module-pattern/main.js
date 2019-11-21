console.log('04 module pattern');
import Task from './task';
import Repo from './task-repository';

//var task1 = new Task("create a demo for constructor");
var task1 = new Task(Repo.get(1));
var task2 = new Task({name:"create a demo for modules"});
var task3 = new Task({name:"create a demo for singleton"});
var task4 = new Task({name:"create a demo for prototype"});

task1.complete();
task2.save();
task3.save();
task4.save();