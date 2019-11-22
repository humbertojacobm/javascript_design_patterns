import MyRepo from './repo';

var taskHandler = function () {
    console.log('task handler: first invoking');
    return {
        save: function () {
            MyRepo.save('Hi from taskhandler');
        }
    }
}

export default taskHandler();