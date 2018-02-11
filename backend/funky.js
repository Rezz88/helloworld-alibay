
signUp = (userInfo) => {
    //sorts user data coming in
    var username = userInfo.username;
    var email = userInfo.email;
    var password = userInfo.password;

    //checks if username already exists
    if (allUsers[username]) {
        //***to figure out**
        // how to send back to user right away
        return ('try again')
    }
    
    //creates new user with all info to be filled on the site
    allUsers[username] = {};
    allUsers[username]['email'] = email;
    allUsers[username]['password'] = password;
    allUsers[username]['cart'] = [];
    allUsers[username]['itemsSold'] = [];
    allUsers[username]['itemsBought'] = [];
    return allUsers[username];
}

login = (userInfo, allUsers) => {
    //sorts user data coming in
    console.log("test2", userInfo)
    var attemptUsername = userInfo.username;
    var attemptPass = userInfo.password;
    console.log("test2.0", attemptUsername)
    console.log("test2.1", attemptPass)
    var dbPassword
 
    //checks to make sure username already exists in the db
    if (!allUsers[attemptUsername]) {
        //***to figure out**
        // how to send back to user right away
        return false
    }
    var dbPassword = allUsers[attemptUsername]['password']
    console.log('test2.2', dbPassword)
    if (dbPassword !== attemptPass) {
        return false
    }
    // figure out how to send "user exists" to render proper page */
    return true
 }




module.exports = {
    login,
    signUp
}

