console.log("01-constructor pattern");

var task = function(name){
    this.name = name;
    this.completed = false;

    this.complete = function(){
        console.log('completing task: '+ this.name);
        this.completed = true;
    }

    this.save = function(){
        console.log('saving task: '+this.name);
    }
}

var task1 = new task("create a demo for constructor");
var task2 = new task("create a demo for modules");
var task3 = new task("create a demo for singleton");
var task4 = new task("create a demo for prototype");

task1.complete();
task2.save();
task3.save();
task4.save();

