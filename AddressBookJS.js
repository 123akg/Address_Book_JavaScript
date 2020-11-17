class Contact{

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    get firstName()
    {
        return this._firstName;
    }

    set firstName(firstName)
    {
        let firstNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else
        throw 'First Name Invalid'
    }

    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastName)
    {
        let lastNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else
        throw 'Last Name Invalid'
    }

    get address()
    {
        return this._address;
    }

    set address(address)
    {
        let addressRegex = RegExp('^[A-Za-z\\s0-9,]{4,}$')
        if(addressRegex.test(address))
        this._address = address;
        else
        throw 'Address Invalid'
    }

    get city()
    {
        return this._city;
    }

    set city(city)
    {
        let cityRegex = RegExp('^[A-Za-z\\s]{4,}$')
        if(cityRegex.test(city))
        this._city = city;
        else
        throw 'City Invalid'
    }

    get state()
    {
        return this._state;
    }

    set state(state)
    {
        let stateRegex = RegExp('^[A-Za-z\\s]{4,}$')
        if(stateRegex.test(state))
        this._state = state;
        else
        throw 'State Invalid'
    }

    get zip()
    {
        return this._zip;
    }

    set zip(zip)
    {
        let zipRegex = RegExp('^[0-9]{3}[\\s]*[0-9]{2,}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else
        throw 'Zip Invalid'
    }

    get phone()
    {
        return this._phone;
    }

    set phone(phone)
    {
        let phoneRegex = RegExp('^[1-9][0-9]{9}$');
        if(phoneRegex.test(phone))
        this._phone = phone;
        else
        throw 'Phone Invalid'
    }

    get email()
    {
        return this._email;
    }

    set email(email)
    {
        let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z_+.-]*[a-zA-Z]+@[a-zA-Z]+[.][a-zA-z]{2,}$');
        if(emailRegex.test(email))
        this._email = email;
        else
        throw 'Email Incorrect';
    }

    toString()
    {
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}

// AddressBook Array
let addressBook = new Array();

function addContact(...params) {
    firstname = params[0];
    lastname = params[1]; 
    let countOfPersons = addressBook.filter(x=>x.firstName == firstname && x.lastName == lastname).reduce((totalPeople,e)=>totalPeople+1,0);
    if (countOfPersons==0){
        try{
        let newContact = new Contact(params[0],params[1],params[2],params[3],params[4],params[5],params[6],params[7]);
        addressBook.push(newContact);
        }catch(e){
            console.error(e);
        }
    }
    else{
        console.log("The Contact with name already exists");
    }
    
}

function editContact(...params){
    firstname = params[0];
    lastname = params[1]; 
    let index = addressBook.findIndex(x=>x.firstName == firstname && x.lastName == lastname);
    let newContact;
    try{
    newContact = new Contact(params[0],params[1],params[2],params[3],params[4],params[5],params[6],params[7]);
    }catch(e){
        console.error(e);
    }
    addressBook[index] = newContact;
}

function deleteContact(...params){
    firstname = params[0];
    lastname = params[1]; 
    let index = addressBook.findIndex(x=>x.firstName == firstname && x.lastName == lastname);
    addressBook.splice(index,1);
}

function getNoOfContacts(array){
    let count = array.reduce((totalCount,e)=>totalCount+1,0);
    return count;
}

function searchContactInCity(city,name,array){
    let contacts = array.filter(e=>e.city == city && e.firstName+" "+e.lastName==name).reduce((totalCount,e)=>totalCount+1,0);
    if(contacts==0)
    return false;
    else
    return true;
}

function viewContactsByCity(city,array){
    let contacts = array.filter(e=>e.city == city).map(e=>e.firstName+" "+e.lastName);
    return contacts;
}

function getContactsCountByCity(city,array){
    let count = array.filter(e=>e.city == city).reduce((totalCount,e)=>totalCount+1,0);
    return count;
}

function sortContactsByName(array){
    array.sort((a,b)=> (a.firstName>b.firstName) ? 1 : ((a.firstName<b.firstName)? -1 : 0));
    return array;
}

function sortContactsByCity(array){
    array.sort((a,b)=> (a.city>b.city) ? 1 : ((a.city<b.city)? -1 : 0));
    return array;
}

// Adding contacts and validating with regex
addContact("Abhi","Kumar","Raghopur Chaturang","Bihar","India",844508,9368832387,"abhi@Yahoo.com");
addContact("Amit","Kumar","Raghopur Chaturang","Bihar","India",844508,9367832387,"amit@Yahoo.com");
addContact("Sagar","Kumar","Raghopur Chaturang","Bihar","India",844508,9398432387,"sagar@Yahoo.com");
addContact("Ani","Kumar","Raghopur Chaturang","Bihar","India",844508,9366762387,"ani@Yahoo.com");
addContact("Rohit","Kumar","Raghopur Chaturang","Bihar","India",844508,9334432387,"rohit@Yahoo.com");

// Editing a contact
editContact("Rohit","Kumar","Bidupur","Bihar","New York",844508,9334432387,"rohit@Yahoo.com");
console.log(addressBook.toString());

// Deleting a contact
deleteContact("Rohit","Kumar");
console.log(addressBook.toString());

//Find no of contacts in addressBook
let noOfContacts = getNoOfContacts(addressBook);
console.log("Total no of contacts : "+noOfContacts);

//Ensuring no duplicate entry
addContact("Ronit","Kumar","Raghopur Chaturang","Bihar","India",844508,9334432387,"ronit@Yahoo.com");

noOfContacts = getNoOfContacts(addressBook);
console.log("Total no of contacts : "+noOfContacts);

//Search a person in a city
let City = "Bihar ";
let name = "Sagar Kumar";
let isPersonPresent = searchContactInCity(City,name,addressBook);
if(isPersonPresent==true)
console.log("The person "+name+" is found in the city "+City);
else
console.log("The person "+name+" is not found in the city "+City);

//View persons in a city
City = "Bihar";
let contacts = viewContactsByCity(City,addressBook);
if(contacts.length>0)
console.log("The people in the city "+City+" are :"+contacts);
else
console.log("No people found in the city");

//Getting no of contacts
City = "Bihar";
let contactsCount = getContactsCountByCity(City,addressBook);
console.log("The no of people in the city "+City+" is : "+contactsCount);

//Sorting contacts by name
addressBook = sortContactsByName(addressBook);
console.log(addressBook.toString());

//Sorting contacts by city
addressBook = sortContactsByCity(addressBook);
console.log(addressBook.toString());