
const API_PAISES ='https://restcountries.com/v3.1/all';

    fetch(API_PAISES)
    .then(response=>response.json() )
    .then(data => {
        let element = document.getElementById('pais')
        element.innerHTML= "";
       
        for(var i = 0 ; i<data.length; i++){

             element.innerHTML+=`<option value="${data[i].cca2}">${data[i].name.common}</option>`
        
        }

        console.log(data)

    })
    .catch(err=>console.log(err))
   







