console.log("how to create an object");

//var task = Object.create(Object.prototype);
//var task = new Object();
var task = {
    title : 'My title',
    description : "My description"
}

Object.defineProperty(task,'toString',{
   value: function(){
    return `${this.title} - ${this.description}`;
   },
   writable: false,
   enumerable: false,
   configurable: false
});

// Object.defineProperty(task,'toString',{
//    enumerable:true
// });

//task.toString = 'hi';

// task.toString = function(){
//     return `${this.title} - ${this.description}`;
// }

//console.log(task.toString());
console.log(Object.keys(task));