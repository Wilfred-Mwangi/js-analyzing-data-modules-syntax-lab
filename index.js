require('datejs');

function combineUsers(...args) {
    let combinedObject = {
        users: []
    };
    
    for (let i = 0; i < args.length; i++) {
        combinedObject.users = [...combinedObject.users, ...args[i]];
    }
    
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");
    
    return combinedObject;
}

module.exports = { combineUsers };