console.log("02 demo prototypes");

var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('completing task: '+ this.name);
    this.completed = true;
};

Task.prototype.save = function(){
    console.log('saving task: '+this.name);
};

var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singleton");
var task4 = new Task("create a demo for prototype");

task1.complete();
task2.save();
task3.save();
task4.save();


