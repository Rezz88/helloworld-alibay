const { addToFile } = require('./tools');
const fs = require('fs-extra');

const userDbPath = './database/userInfo.json';

var usersLoggedIn = {}
var forSaleItems = {}

const signUp = async (userInfo) => {
    const emailValidate = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    //sorts user data coming in
    var username = userInfo.username;
    var email = userInfo.email;
    var password = userInfo.password;
    console.log(userInfo)
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
            itemsForSale: [],
            itemsSold: [],
            itemsBought: []
        };

        addToFile(userDbPath, obj);
        console.log('test')
        return true
    };

    //creates new user with all info to be filled on the site 
    const response = await fs.readFile(userDbPath, { String })
        .then(async data => {
            console.log('raw data: ', data)
            var result = JSON.parse(data.toString());
            console.log(result);
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
    console.log(response)
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
                usersLoggedIn["username"] = item.username;
                console.log(usersLoggedIn);
                returnVal = true;
            }
        }
    });
    if (!usernameExists) {
        returnVal = JSON.stringify('Username does not exist');
    }
    return returnVal;
}

const createListing = async (itemInfo) => {
    const dbForSalePath = './database/itemsForSale.json'
    var username = itemInfo.username;
    var price = itemInfo.price;
    var blurb = itemInfo.blurb
    console.log(itemInfo);

    var dbForSale = await fs.readFile(dbForSalePath, { String });
    dbForSale = JSON.parse(dbForSale.toString());
    console.log(dbForSale)

    var newItem;
    var match = false

    dbForSale.forEach( (item) => {
        if (item.username) {
            console.log('check', "i")
            match = true;
            dbForSale[0].forSale.push(JSON.stringify({
                productID: genPID(),
                price: price,
                blurb: blurb
            }));
            console.log('dbForSale:',dbForSale)
            newItem = item.forSale
            
        }
        })
    if (match === false) {
        newItem = {username: username, forSale: [{
            productID: genPID(),
            price: price,
            blurb: blurb
        }]}
    }
    
    rewriteDB = (toRead, dbForSale) => {
        var data = JSON.stringify(dbForSale);
        fs.writeFileSync(toRead, JSON.stringify(data));
        // changed to only display the current user that signed up
    };

    rewriteDB('./database/itemsForSale.json', dbForSale);
    

 


}









module.exports = {
    login,
    signUp,
    createListing
}

