class AddressBook{
    constructor(...para){
        this.firstName = para[0];
        this.lastName = para[1];
        this.address = para[2];
        this.city = para[3];
        this.state = para[4];
        this.zip = para[5];
        this.phoneNum = para[6];
        this.email = para[7];
    }

    get firstName(){return this._firstName}
    set firstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "FirstName Is Incorrect Try Diff Name..!!"
    }

    get lastName(){return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName = lastName;
        else throw "LastName Is Incorrect Try Diff Name..!!"
    }

    get address(){return this._address}
    set address(address){
        let nameRegex = RegExp('[A-Z,a-z,0-9]{3,}$');
        if(nameRegex.test(address))
            this._address = address;
        else throw "Address In Incorrect Try Diff..!!"
    }

    get city(){return this._city}
    set city(city){
        let nameRegex = RegExp('[A-Z,a-z,0-9]{3,}$');
        if(nameRegex.test(city))
            this._city = city;
        else throw "Incorrect City Name Try Diff..!!"
    }
    
    get state(){return this._state}
    set state(state){
        let nameRegex = RegExp('[A-Z,a-z,0-9]{3,}$');
        if(nameRegex.test(state))
            this._state = state;
        else throw "Incorrect State Name Try Diff..!!"
    }
    get zip(){return this._zip}
    set zip(zip){
        let nameRegex = RegExp('^[1-9]{1}[0-9]{5}')
        if(nameRegex.test(zip))
            this._zip = zip;
        else throw "Incorrect zip Pattern Try Diff..!"
    }
 
    get phoneNum(){return this._phoneNum}
    set phoneNum(phoneNum){
        let nameRegex = RegExp('^[0-9]{2}[: :][0-9]{10}')
        if(nameRegex.test(phoneNum))
            this._phoneNum = phoneNum;
        else throw "Incorrect Phone Num..!!"
    }

    get email(){return this._email}
    set email(email){
        let nameRegex = RegExp('^[0-9a-zA-Z]+[./+_-]{0,1}[0-9a-zA-Z]+[@][a-zA-Z0-9-]+[.][a-zA-Z]{2,}([.][a-zA-Z]{2,}){0,1}$')
        if(nameRegex.test(email))
            this._email = email;
        else throw "Incorrect Email Address..!"
    }

    toString(){
        return "\nFirstName = "+this.firstName+" \nlastName = "+this.lastName+" \nAddress = "+this.address+" \nCity = "+this.city+" \nState = "+this.state+" \nZip = "+this.zip+" \nPhoneNo = "+this.phoneNum+" \nEmail = "+this.email;
    }
}
const prompt = require('prompt-sync')();
let flag = true;
var addressBookList = []

while(flag == true){
    const option = Number(prompt("Chosse Your option: \n1. For add new Contact. \n2. Edit Contact Using Name. \n3. Delete Contact Using Name"+
                                 "\n4. For Get Number Of Contact In Book. \n5. For Serch By City And State. \nAny Number To Exit" ))
    switch(option){
        case 1:
            addEntries(addressBookList);
            break;
        case 2:
            editEntries(addressBookList);
            break;
        case 3:
            deleteEntries(addressBookList);
            break;
        case 4:
            sizeOfBook(addressBookList);
            break;
        case 5:
            searchContact(addressBookList);
            break;
        default:
            flag = false;
    }
}

function addEntries(addressBookList){ 
    try {
        let addressBook1 = new AddressBook("Ronit","Patel","RLD","SNG","Odisha","123456","91 1234567890","ronitkp12@gmail.com");
        let addressBook2= new AddressBook("Swagatika","Behera","","blngr","karnataka","654321","91 0987654321","swagatika12@gamil.com");
        addressBookList.push(addressBook1);
        addressBookList.push(addressBook2);

        const sizeOfBookStr = prompt('Enter Size Of Book: ');
        const sizeOfBook = Number(sizeOfBookStr)
        let i = 0;
        while(i<sizeOfBook){
            newfirstName = prompt("Enter First Name: ");
            lastName = prompt("Enter Last Name: ");
            address = prompt("Enter Address: ");
            city = prompt("Enter City: ");
            state = prompt("Enter State: ");
            zip = prompt("Enter Zip: ");
            phoneNum = prompt("Enter Phone Number: ");
            email = prompt("Enter Email Address: ");

            let addressBook = new AddressBook(newfirstName,lastName,address,city,state,zip,phoneNum,email);
            let flag = true;
            addressBookList.forEach(element =>{
                if (element.firstName == newfirstName){
                    flag = false;
                }
            })
            if(flag == true)
                addressBookList.push(addressBook);
            else console.log("Data Already Exist Try Diffrent Name.");
            i++;
        }
        console.log(addressBookList.toString());
    } 
    catch (e) {
        console.error(e)
    }
}

function editEntries(addressBookList){
    
    const name = prompt("Enter Name To Search: ")
    addressBookList.forEach(element => {
        try {
            if(element.firstName===name){
                element.firstName = prompt("Edit First Name: ")
                console.log(" Data successfully Edited");
            }
        } catch (e) {
            console.error(e)
        } 
    });
    console.log(addressBookList.toString());
}

function deleteEntries(addressBookList){
    const name = prompt("Enter Name Which U Want To Delete: ")
    addressBookList.forEach(element =>{
        if (element.firstName===name){
            addressBookList.pop(element);
            console.log("Data SuccessFully Deleted");
        }
    });
    console.log(addressBookList.toString());
}

function sizeOfBook(addressBookList){
    console.log(`${addressBookList.length} Entries In Our AddressBook`);
}

function searchContact(addressBookList){
    console.log("Select Your Option, \n1. Search By City. \n2. Search By State");
    const option = Number(prompt("Select Ur Option"))
    switch(option){
        case 1:
            const city = prompt("Enter Ur City Name: ");
            filtteredAddressBook = addressBookList.filter(filterValueByCity);
            
            function filterValueByCity(element){
                if(element.city === city)
                    return element; 
            }
            console.log(filtteredAddressBook.toString());
            console.log(`Number of contact in city ${city} is ${filtteredAddressBook.length}.` );
            break;
        case 2:
            const state = prompt("Enter Ur state Name: ");
            filtteredAddressBook1 = addressBookList.filter(filterValueByState);
            
            function filterValueByState(element){
                if(element.state === state)
                    return element; 
            }
            console.log(filtteredAddressBook1.toString());
            console.log(`Number of contact in city ${city} is ${filtteredAddressBook1.length}.` );
            break;
    }
}