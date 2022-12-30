const client = require('../database/client');
const User = require('@prisma/client');

class userService {
    createUser(User){
        return client.user.create({data: User});
    }
    findUserByEmail(email){
        return client.user.findUnique({where: {email: email}});
    }

}

module.exports = new userService();