console.log('03 constructor node');
import Task from './class';

var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singleton");
var task4 = new Task("create a demo for prototype");

task1.complete();
task2.save();
task3.save();
task4.save();