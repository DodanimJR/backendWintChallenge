const client = require('../database/client');
const {hashSync, genSaltSync} = require('bcrypt');


class userService {
    #hashPassword(password) {
        const salt = genSaltSync(10);
        return hashSync(password, salt);
    }

    createUser(User){
        return client.user.create({data: User});
    }
    findUserByEmail(email){
        return client.user.findUnique({where: {email: email}});
    }
    findUserById(id){
        return client.user.findUnique({where: {id: id}});
    }
    updateUser(id, User){
        if(User.password){
            User.password = this.#hashPassword(User.password);
        }
        return client.user.update({where: {id: id}, data: User});
    }

}

module.exports = new userService();