var repo = function (){
  var db = {};
  var get = function (id) {
    console.log('getting project' + id);
    return {
        name: 'new project from db'
    }
  }

  var save = function(project){
    console.log('saving ' + project.name + 'to the db');
  }
  return {
      get: get,
      save: save
  }
}
export default repo();