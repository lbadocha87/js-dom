let heading = document.createElement('h1');

heading.innerText = "Lista";

document.getElementById('list').appendChild(heading);

let list = document.createElement('ul');
let names = ['Paweł', 'Łukasz', 'Adam', 'Ola'];



var t0 = performance.now()
names.forEach(function (name) {
    let item = document.createElement('li');
    item.innerText = name;
    list.appendChild(item);
});

/* for(let i = 0; i<names.length; i++) {
    let item = document.createElement('li');
    item.innerText = names[i];
    list.appendChild(item);
} */
var t1 = performance.now()

console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

document.getElementById('list').appendChild(list);



let staff = {
    "employees": [
        { "firstName": "Hans", "lastName": "Schmidt" },
        { "firstName": "Jan", "lastName": "Nowak" },
        { "firstName": "Marek", "lastName": "Kowalski" }
    ]
}


staff.employees.forEach(function(employee, index){
    let tableRow = document.createElement('tr');
    
    let numberCell = document.createElement('td');
    let nameCell = document.createElement('td');
    let surnameCell = document.createElement('td');

    numberCell.innerText = index + 1;
    nameCell.innerText = employee.firstName;
    surnameCell.innerText = employee.lastName;

    tableRow.appendChild(numberCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(surnameCell);

    document.getElementsByTagName('tbody')[0].appendChild(tableRow);
});