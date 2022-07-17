console.log("typescript file ")
const userName: string = "galamouyal88@gmail.com"
const age: number = 33;

interface IUser {
    userName: string;
    age: number;
    address: { city: string }
}

const user: IUser = {
    userName: "gal",
    age: 33,
    address: { city: 1 }
}
console.log(typeof user)

function getUserAddress(user: IUser): string | undefined {
    if (typeof user !== 'object') return;
    return user.address.city
}