export const getComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const newData = data.slice(0,10);
        localStorage.setItem('commentList', JSON.stringify(newData));
    })
}