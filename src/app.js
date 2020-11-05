import { User } from './Components/User';
import { SuperUser } from './Components/Superuser';

const user = new User('Tom', 'Seleck', "sdsadfF9*",'sdsdsa@sds.pl', -12979, 'm');
const superUser = new SuperUser("Michelle", "Molek", "dsaffafKL&3", 'sdsd@sdsds.uk', new Date(1899), 'f');

console.log(user);
console.log(superUser);

console.log('-------------------------------------------------------------------------');

user.changeEmail("Tommy@fdf.pl");

superUser.changePass("tds@fdsDf3dsfd");
superUser.changeUserPass(user, 'sasfafsafKFJJDAF*&^78');
console.log(user);
console.log(superUser);