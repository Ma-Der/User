import is from "is_js";
import { Misc } from "./Misc.js";
import { User } from './User.js';


export class ChatRoom {
    constructor() {
        this.userList = [];
    }

    addUser(...user) {
        user.forEach(usr => Misc.isInstanceValid(usr, User));
        this.userList.push(...user);
    }

    changeUserPassword(user, password) {
        Misc.isInstanceValid(user, User);
        Misc.isUserInChatroom(user, this.userList);
        Misc.passwordCheck(password);
        user.password = password;
    }

    changeUserEmail(user, email) {
        Misc.isInstanceValid(user, User);
        Misc.isUserInChatroom(user, this.userList);
        if(is.not.email(email)) throw new Error("Invalid email.");
        user.email = email;
    }

    editUserPassword(superuser, user, password) {
        Misc.isInstanceValid(superuser, User);
        Misc.isInstanceValid(user, User);
        Misc.passwordCheck(password);
        Misc.isUserInChatroom(superuser, this.userList);        
        Misc.isUserInChatroom(user, this.userList);
               
        const supUser = this.userList.filter(superusr => superusr.id === superuser.id).reduce((acc, el) => acc = el, {});
        const usr = this.userList.filter(usr => usr.id === user.id).reduce((acc, el) => acc = el, {});

        Misc.isSuperuser(supUser);
        Misc.isNormalUser(usr);
        usr.password = password;
    }

    editUserAccessLevel(superuser, user) {
        Misc.isInstanceValid(superuser, User);
        Misc.isInstanceValid(user, User);
        Misc.isUserInChatroom(superuser, this.userList);        
        Misc.isUserInChatroom(user, this.userList);

        const supUser = this.userList.filter(superusr => superusr.id === superuser.id).reduce((acc, el) => acc = el, {});
        const usr = this.userList.filter(usr => usr.id === user.id).reduce((acc, el) => acc = el, {});

        Misc.isSuperuser(supUser);
        Misc.isNormalUser(usr);
        usr.accessLevel = "admin";
    }
}