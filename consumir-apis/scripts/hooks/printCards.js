const printCards = (el) => {
    const userList = JSON.parse(localStorage.getItem('userList'));

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

    el.innerHTML = body;
}

export default printCards