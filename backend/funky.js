const { addToFile } = require('./tools');
const fs = require('fs-extra');
const tools = require('./tools')
const userDbPath = './database/userInfo.json';
const dbForSalePath = './database/itemsForSale.json';

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

const createListing = (itemInfo) => {
    const dbForSalePath = './database/itemsForSale.json';
    const userDB = './database/userInfo.json';
    var username = itemInfo.username;
    var price = itemInfo.price;
    var blurb = itemInfo.blurb;
    // console.log('create listing test2: ', itemInfo);
    // console.log('create listing test2.0: ', username);
    // console.log('create listing test2.1: ', price);
    // console.log('create listing test2.2: ', blurb);

    var newUser = {
        username: username,
        forSale: [{
            productID: genPID(),
            price: price,
            blurb: blurb
        }]
    }
    var newItem = {
        productID: genPID(),
        price: price,
        blurb: blurb
    }

    //console.log('create listing test 3', newUser);


    // for debbugging we create an empty database with the line below.     
    // tools.FileWriteSync(dbForSalePath,JSON.stringify([]))

    var sellTempDB = JSON.parse(tools.FileReadSync(dbForSalePath));
    var userTempDB = JSON.parse(tools.FileReadSync(userDB));
    // console.log('create listing test 4: ', tempDB);

    var match = false

    sellTempDB.forEach((item, pos) => {
        // console.log("iii",item)
        // console.log('aaa', item.username)
        if (item.username === username) {
            match = true;
            // console.log('create listing 4.1', item.username)
            sellTempDB[pos].forSale.push(newItem);
        }
    });

    if (match === false) {
        sellTempDB.push(newUser);
    }

    userTempDB.forEach((item, pos) => {
        if (item.username === username) {
            userTempDB[pos].itemsForSale.push(newItem);
        }
    });


    //console.log('create listing test 5: ', tempDB);
    tools.FileWriteSync(dbForSalePath, JSON.stringify(sellTempDB));
    tools.FileWriteSync(userDB, JSON.stringify(userTempDB))
    return true;
}

const buyItem = (itemInfo) => {
    var buyerUsername = itemInfo.username;
    var toBuyProductID = itemInfo.productID;
    console.log('buyerUsername: ',buyerUsername);
    console.log('product: ', toBuyProductID);

    var sellTempDB = JSON.parse(tools.FileReadSync(dbForSalePath));
    var userTempDB = JSON.parse(tools.FileReadSync(userDbPath));
    
    //looking for buyers productID to match db productID and get username of seller
    var sellingUser;
    var soldItem;
    sellTempDB.forEach((item, pos) => {
      
        item.forSale.forEach((things, posit) => {
     
            if (Number(things.productID) === Number(toBuyProductID)) {
                soldItem = things
                sellingUser = sellTempDB[pos].username
                // console.log('soldItem: ', soldItem);
            }
        });
    });
    
    //rewrite dbs accordingly
    //itemsforsaledb
    userTempDB.forEach((item, pos) => {
        if (item.username === sellingUser) {
            userTempDB[pos].itemsSold.push(soldItem);
        }
        if (item.username === buyerUsername) {
            userTempDB[pos].itemsBought.push(soldItem);
        }
    })
    sellTempDB.forEach((item, pos, arr) => {
        if (item.username === sellingUser) {
            sellTempDB[pos].forSale.forEach((things, posit) => {
                if (Number(things.productID) === Number(toBuyProductID)){
                    //deletes item from  all items 
                    sellTempDB[pos].forSale.splice(posit, 1)
                }
            })
        }
    });

    userTempDB.forEach((item, pos, arr) => {
        if (item.username === sellingUser) {
            userTempDB[pos].itemsForSale.forEach((things, posit) => {
                if (Number(things.productID) === Number(toBuyProductID)){
                    //deletes item from  all items 
                    userTempDB[pos].itemsForSale.splice(posit, 1)
                }
            })
            
        }
    });

        console.log('sellingUser: ',sellingUser)
        console.log('soldItem: ', soldItem)
        tools.FileWriteSync(dbForSalePath, JSON.stringify(sellTempDB));
        tools.FileWriteSync(userDbPath, JSON.stringify(userTempDB))
}

const mainPage = () => {
    var allItems = JSON.parse(tools.FileReadSync(dbForSalePath));
    return allItems;
}

module.exports = {
    login,
    signUp,
    createListing,
    buyItem,
    mainPage
}

