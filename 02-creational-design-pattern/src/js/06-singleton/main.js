console.log('06 singleton');
import taskHandler from './task-handler';
import myRepo from './repo';

myRepo.save('fromMain');
myRepo.save('fromMain');
myRepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();