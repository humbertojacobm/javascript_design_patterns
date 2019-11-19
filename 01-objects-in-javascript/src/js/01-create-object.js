console.log("how to create an object");

var task = Object.create(Object.prototype);
//var task = new Object();

task.title = 'My title';
task.description = "My description";
task.toString = function(){
    return `${this.title} - ${this.description}`;
}

console.log(task.toString());