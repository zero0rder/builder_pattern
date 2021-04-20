class Address {
    street: String;
    city: String;
    zip: Number;

    constructor(street: String, city: String, zip: Number){
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
}

class User {
    name: String;
    age: Number;
    email: String;
    address: Address;

    constructor(name: String, age: Number = undefined, email: String = "", address: Address = null){
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
    }
}


class UserBuilder {
    user: User;

    constructor(name: String){
        this.user = new User(name)
    }

    setAge(age: Number){
        this.user.age = age;
        return this;
    }

    setEmail(email: String){
        this.user.email = email;
        return this;
    }

    setAddress(address: Address){
        this.user.address = address;
        return this;
    }

    build(){
        return this.user;
    }

}

let user1 = new UserBuilder("Sam Perkins").setEmail('sperk@osu.edu').build()
console.log(user1)

//new User('Sam Perkins', 21, 'sperk@osu.edu', new Address('34 Hampshire Rd', 'Columbus', 33527))
