const { addToFile } = require('./tools');
const fs = require('fs-extra');

const userDbPath = './database/userInfo.json';

const signUp = async (userInfo) => {
    const emailValidate = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    //sorts user data coming in
    var username = userInfo.username;
    var email = userInfo.email;
    var password = userInfo.password;

    //test to see if legit email else fuck you 
    if (!emailValidate(email)) {
        return ('Invalid email');
    }

    const buildObj = () => {
        var obj = {
            username,
            email,
            password,
            cart: [],
            itemsSold: [],
            itemsBought: []
        };
        // obj.username = username;
        // obj.email = email;
        // obj.password = password;
        // obj.cart = [];
        // obj.itemsSold = [];
        // obj.itemsBought = [];

        addToFile(userDbPath, obj);
        console.log('test')
        return true
    };

    //creates new user with all info to be filled on the site 
    const response = await fs.readFile(userDbPath, { String })
        .then(async data => {
            var result = JSON.parse(data.toString());
            if (result.length) {
                let alreadyExist = false;
                result.forEach((item) => {
                    if (item.username === username) {
                        alreadyExist = true;
                    }
                });

                if (alreadyExist) {
                    // return 'User already exists';
                    return false;
                } else {
                    return await buildObj();
                }
            } else {
                return await buildObj();
            }
        }).catch(err => err);
    return response;
}

const login = async (userInfo, users) => {
    //sorts user data coming in
    // console.log(userInfo)
    var attemptUsername = userInfo.username;
    var attemptPass = userInfo.password;
    //checks to make sure username already exists in the db

    var dbUser = await fs.readFile(userDbPath, { String });
    dbUser = JSON.parse(dbUser.toString());
    // console.log(dbUser);
    var usernameExists = false;
    var returnVal;
    dbUser.forEach((item) => {
        if (item.username === attemptUsername) {
            usernameExists = true;
            if (item.password !== attemptPass) {
                returnVal = false;
            } else {
                returnVal = true;
            }
        }
    });
    if (!usernameExists) {
        returnVal = JSON.stringify('Username does not exist');
    }
    return returnVal;
}

module.exports ={ 
    login,
    signUp
}