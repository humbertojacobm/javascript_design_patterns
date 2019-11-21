var repo = function (){
  var db = {};
  var get = function (id) {
    console.log('getting user' + id);
    return {
        name: 'new user from db'
    }
  }

  var save = function(user){
    console.log('saving ' + user.name + 'to the db');
  }
  return {
      get: get,
      save: save
  }
}
export default repo();