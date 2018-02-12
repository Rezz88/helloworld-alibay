const { addToFile } = require('./tools');
const fs = require('fs-extra');

const userDbPath = 'userInfo.json';

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
    if (!emailValidate(email)) {
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

        addToFile(userDbPath, obj);
        return true;
         
    };

    //creates new user with all info to be filled on the site 
    var response = await fs.readFile(userDbPath, { String })
        .then(async data => {
            var result = JSON.parse(data);
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

login = (userInfo, users) => {
    //sorts user data coming in
    // console.log(userInfo)
    var attemptUsername = userInfo.username;
    var attemptPass = userInfo.password;
    //checks to make sure username already exists in the db

    var dbUser = fs.readFileSync(userDbPath, { String });
    dbUser = JSON.parse(dbUser);
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

createListing = (user, price, blurb) => {
    const dbForSalePath = 'itemsForSale.json'
    const cost = price;
    const details = blurb

    var dbForSale = fs.readFileSync(dbForSalePath, { String });
    dbForSale = JSON.parse(dbForSale);

    var newUserListing;
    var returningUserListing;

    // newListingObj = () => {
    //     usename : user,
    //     itemsForSale : [
    //         {
    //             productID: 01,
    //             price: cost,
    //             blurb: details
    //         }
    //     ]
    // }

    dbForSale.forEach((item) => {

        if (item.username !== user) {
            // newUserListing = {
            //     username: user,
            //     itemsForSale: [
            //         {
            //             productID: 01,
            //             price: cost,
            //             blurb: details
            //         }]
            // }
            newUserListingObj();
        }
        console.log('newUserListing: ', newUserListing)
        // return addToFile(dbForSalePath, newUserListing);
    })



    addToFile()

}




module.exports = {
    login,
    signUp,
    createListing
}

