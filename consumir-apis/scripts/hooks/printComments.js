const printComments = (el) => {
    const commentList = JSON.parse(localStorage.getItem('commentList'));

    const body = commentList.map(comment => {
        return (
            `
                <li>
                    <h5>${comment.name}</h5>
                    <p><b>correo:</b> ${comment.email}</p>
                    <span><b>comentario:</b> ${comment.body}</span>
                </li>
            `
        )
    }).join('')

    el.innerHTML = body;
}

export default printComments