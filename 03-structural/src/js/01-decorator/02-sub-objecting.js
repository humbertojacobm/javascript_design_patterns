console.log("02 more complex decorator");

var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log("completing task: " + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function (name, priority) {
  Task.call(this,name);
  this.priority = priority;
};
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('notifying important people');
}

UrgentTask.prototype.save = function () {
    this.notify();
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('This is urgent',1);

ut.complete();
ut.save();
console.log();