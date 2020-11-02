import { User } from './Components/User';
import { SuperUser } from './Components/Superuser';

const user = new User("Tom", "TommyGun");
const superUser = new SuperUser("Mike", "Molek");

console.log(user);
console.log(superUser);

user.changeEmail("Tommy");
console.log(user);

superUser.changeUserEmail(user, "tfdfdsfdsfdsfd");
console.log(user);