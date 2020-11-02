

const user = new User("Tom", "TommyGun");
const superUser = new SuperUser("Mike", "Molek");

console.log(user);
console.log(superUser);

user.changeEmail("Tommy");
console.log(user);

superUser.changeUserEmail(user, "tfdfdsfdsfdsfd");
console.log(user);