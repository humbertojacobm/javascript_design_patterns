console.log('02 observer -> 03 main -> es5');
import Task from './01-task';

var notificationService = function() {
    var message = 'Notifying';
    this.update = function (task) {            
        console.log(`${message} ${task.user} for task  ${task.name}`)
    }    
}

var loggingService = function () {
    var message = 'Logging';
    this.update = function(task) {        
        console.log(`${message} ${task.user} for task  ${task.name}`)
    }    
}

var auditingService = function() {
    var message = 'Auditing';
    this.update = function(task) {        
        console.log(`${message} ${task.user} for task  ${task.name}`)
    }    
}

var ObserverList = function() {  
        this.observerList = [];
}
ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj);
}
ObserverList.prototype.get = function (index){
    if( index > -1 && index < this.observerList.length ){
        return this.observerList[index];
    }
}
ObserverList.prototype.count = function (){
    return this.observerList.length;
}
ObserverList.prototype.removeAt = function (index){
    this.observerList.splice(index,1);
}
ObserverList.prototype.indexOf = function (obj, startIndex){
    let i = startIndex;
    while(i < this.observerList.length){
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
}    

var ObservableTask = function(data){
    
    Task.call(this,data);
    this.observers = new ObserverList();
}   

ObservableTask.prototype.addObserver = function (observer){
    this.observers.add(observer);
}
ObservableTask.prototype.notify = function (context){
    let observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}
ObservableTask.prototype.save = function (){
    this.notify(this);
    Task.prototype.save.call(this);
}
ObservableTask.prototype.removeObserver = function (observer){
    this.observers.removeAt(this.observers.indexOf(observer,0));
}

var Task1 = new ObservableTask({name: 'create a demo for constructors', user: 'jhon'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

Task1.addObserver(not.update);
Task1.addObserver(ls.update);
Task1.addObserver(audit.update);

Task1.save();

Task1.removeObserver(audit);

Task1.save();