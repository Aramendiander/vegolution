import connection from '../src/config/mongodb.js';
import userModel from '../src/models/userModel.js';


const email = "mikel@mongo.com";
const password = '1234';
const createUser = async (email, password) => {
    const newUser = new userModel({
        email: email,
        password: password,
    });
    console.log(newUser)
    return await newUser.save();

};

const user = await createUser(email,password);
console.log(user)
