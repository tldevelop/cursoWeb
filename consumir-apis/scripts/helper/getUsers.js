export const getUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    /*Metodo GET*/

    fetch(url)
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('userList',JSON.stringify(data));
    })

    /*
    Otros metodos de fetch API son:
    PUT
    DELETE
    POST
    */
}