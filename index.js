require('datejs');

function allUsers(...args) {
  let combinedObject = {
    users: []
  };
  
  for (let i = 0; i < args.length; i++) {
    let currentBatch = args[i];
    combinedObject.users = [...combinedObject.users, ...currentBatch];
  }
  
  let now = new Date();
  combinedObject.merge_date = now.toString('M/d/yyyy');
  
  return combinedObject;
}

module.exports = allUsers;