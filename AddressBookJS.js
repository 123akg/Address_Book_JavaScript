class ContactPersonData{
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email
    }
    
    //method
    toString(){
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}

let person=new ContactPersonData("Abhijeet","Kumar Giri","Bidupur","Hajipur","Bihar",844503,9682648829,"akgiri@gmail.com");
console.log(person.toString());