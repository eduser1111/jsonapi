
// var url = 'employees.json';

var url = 'http://localhost:8000/employees/3';
 
async function updateEmployee() {
    try {
        let response = await fetch(url,{
            method: "patch",
            body: JSON.stringify({
                id: 3,
                fullname: 'Kincses Katalin',
                city: 'Szolnok',
                salary: 2340000
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let result = await response.json();        
        console.log(result);
    }catch (err) {
        console.log('Hiba! A dolgozó hozzáadása sikertelen!');
        console.log(err);
    }
}
updateEmployee();




// fetch (url,{
//     method: "put",
//     body: JSON.stringify({
//         id: 5,
//         fullname: 'Parkin Ede',
//         city: 'Kátrány Levente',
//         salary: 2175000
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
// .then(response => response.json())
// .then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });


// let response = fetch('employees.json');
// let promise = response.then(res => res.json());
// let end = promise.then(result => {
//     console.log(result.dolgozok[0].nev);
// });
// end.catch(err => {
//     console.error('Hiba! A lekérés sikertelen!');
//     console.error(err);        
// });

// let url = 'http://localhost:8000/list.php';
 
// let response = fetch(url);
// let promise = response.then(res => res.json());
// let end = promise.then(result => {
//     console.log(result.products);
// });
// end.catch(err => {
//     console.error('Hiba! A lekérés sikertelen!');
//     console.error(err);        
// });



// fetch('valami.json')
// .then(promis => promis.json())
// .then(res => {
//     console.log(res.dolgozok[1].nev)
// })


// async function getEmployees() {
//     try {
//         let response = await fetch("employees.json");
//         let result = await response.json();        
//         console.log(result.dolgozok[1].nev);
//     }catch (err) {
//         console.log('Hiba! A dolgozók lekérése sikertelen!');
//         console.log(err);
//     }
// }
// getEmployees();


// async function getEmployees() {
//     await fetch("employees.json")
//     .then(response => response.json())
//     .then(result => {
//         console.log(result.dolgozok[1].nev);
//     })
//     .catch(err => {
//         console.log('Hiba! A dolgozók lekérése sikertelen!');
//         console.log(err);        
//     })
// }
// getEmployees();
