console.log("typescript file ");
const userName = "galamouyal88@gmail.com";
const age = 33;
const user = {
    userName: "gal",
    age: 33,
    address: { city: "Ashdod" }
};
console.log(typeof user);
function getUserAddress(user) {
    if (typeof user !== 'object')
        return;
    return user.address.city;
}
