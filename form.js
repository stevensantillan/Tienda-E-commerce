let mail = document.getElementById('mail');
let buscar = document.getElementById('buscar');
let resultado = document.getElementById('resultado');


buscar.addEventListener('click', () => {
    const data = {
        email: mail.value,
    }

        fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       (emailRegex.test(mail.value))? resultado.innerHTML = `<h1>${data.email}</h1> <p>Usted se ha registrado al Newsletter de la tienda.</p>` : resultado.innerHTML = `<p>No se ingresó un mail con el formato correcto.</p>`
        ;
    })

});