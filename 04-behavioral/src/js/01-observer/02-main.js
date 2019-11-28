console.log('02 observer -> main');
import Task from './01-task';

class notificationService {
    
    constructor(){
             
    }
    
    update(task) {
        let message = 'Notifying';    
        console.log(`${message} ${task.user} for task  ${task.name}`)
    }    
}

class loggingService {
    constructor(){
         
    }
    update(task) {
        let message = 'Logging';
        console.log(`${message} ${task.user} for task  ${task.name}`)
    }    
}

class auditingService {
    constructor(){
         
    }
    update(task) {
        let message = 'Auditing';
        console.log(`${message} ${task.user} for task  ${task.name}`)
    }    
}

class ObserverList{
    constructor(){
        this.observerList = [];
    }
    add(obj){
      return this.observerList.push(obj);
    }
    get(index){
        if( index > -1 && index < this.observerList.length ){
            return this.observerList[index];
        }
    }
    count(){
        return this.observerList.length;
    }
    removeAt(index){
       this.observerList.splice(index,1);
    }
    indexOf(obj, startIndex){
        let i = startIndex;
        while(i < this.observerList.length){
           if (this.observerList[i] === obj) {
               return i;
           }
        }
        return -1;
    }    
}

class ObservableTask extends Task{
    constructor(data)
    {
        super(data);
        this.observers = new ObserverList();
    }
    addObserver(observer){
      this.observers.add(observer);
    }
    notify(context){
        let observerCount = this.observers.count();
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i)(context);
        }
    }
    save(){
        this.notify(this);
        super.save(this);
    }
    removeObserver(observer){
        this.observers.removeAt(this.observers.indexOf(observer,0));
    }
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