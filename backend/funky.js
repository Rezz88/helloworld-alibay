const { addToFile } = require('./tools');
const fs = require('fs-extra');

const userDbPath = './database/userInfo.json';

const signUp = async (userInfo) => {
    const emailValidate = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    console.log('signup funky');

    //sorts user data coming in
    var username = userInfo.username;
    var email = userInfo.email;
    var password = userInfo.password;
    console.log(userInfo);

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

<<<<<<< HEAD
        addToFile(userDbPath, obj);
        return true;
         
    };

=======
>>>>>>> 34942791d79b3e0a59b08c9ef8aa3e148a3cb95f
    //creates new user with all info to be filled on the site 
    const response = await fs.readFile(userDbPath, { String })
        .then(async data => {
<<<<<<< HEAD
            var result = JSON.parse(data);
=======
            console.log(data.toString());
            var result = JSON.parse(data.toString());
            console.log('result', result);
>>>>>>> 34942791d79b3e0a59b08c9ef8aa3e148a3cb95f
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
<<<<<<< HEAD
=======
    console.log('response', response);
>>>>>>> 34942791d79b3e0a59b08c9ef8aa3e148a3cb95f
    return response;
}

const login = (userInfo, users) => {
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
<<<<<<< HEAD

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
=======
>>>>>>> 34942791d79b3e0a59b08c9ef8aa3e148a3cb95f




module.exports = {
    login,
    signUp,
    createListing
}

