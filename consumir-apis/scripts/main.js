import {getUsers} from "./helper/getUsers.js"

window.onload = () => {
    const cardList = document.querySelector('#card-list');
    getUsers();

    const userList = JSON.parse(localStorage.getItem('userList'));

    const printCards = () => {
        const body = userList.map(user => {
            return (
                `
                    <li>
                        <h5>${user.name}</h5>
                        <p><b>correo:</b> ${user.email}</p>
                        <span><b>telefono</b> ${user.phone}</span>
                    </li>
                `
            )
        }).join('')

        cardList.innerHTML = body;
    }

    printCards();
}