const { addToFile } = require('./tools');
const fs = require('fs-extra');

signUp = async (userInfo) => {
    emailValidate = (email) => {
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    //sorts user data coming in
    var username = userInfo.username;
    var email = userInfo.email;
    var password = userInfo.password;

    //test to see if legit email else fuck you 
    if(!emailValidate(email)){
        return ('Invalid email');
    }

    buildObj = () => {
        var obj = {};
        obj.username = username;
        obj.email = email;
        obj.password = password;
        obj.cart = [];
        obj.itemsSold = [];
        obj.itemsBought = [];

        return addToFile('userInfo.json', obj);
    }; 
    
    //creates new user with all info to be filled on the site 
    var response = await fs.readFile('userInfo.json', { String })
        .then(async data => {
            var result = JSON.parse(data);
            if(result.length){ 
                let alreadyExist = false;
                result.forEach((item) => {
                    if (item.username === username) {
                        alreadyExist = true;
                    }
                });

                if (alreadyExist) {
                    return 'User already exists';
                } else {
                    console.log('buildObj', buildObj);
                    return await buildObj();
                }
            } else {
                return await buildObj();
            }
        }).catch(err => err);
    console.log('response', response);
    return response;
}

login = (userInfo, users) => {
    //sorts user data coming in
    console.log(userInfo)
    var attemptUsername = userInfo.username;
    var attemptPass = userInfo.password;
    //checks to make sure username already exists in the db
    
    var dbUser = fs.readFileSync('userInfo.json', { String });
    dbUser = JSON.parse(dbUser);
    console.log(dbUser);
    var usernameExists = false;
    var returnVal;
    dbUser.forEach((item) => {
        if (item.username === attemptUsername) {
            usernameExists = true;
            if (item.password !== attemptPass) {
                returnVal = false;
            } else {
                returnVal =  true;
            }
        }
    });
    if(!usernameExists){
        returnVal = 'Username does not exist';
    }
    return returnVal;
 }




module.exports = {
    login,
    signUp
}

