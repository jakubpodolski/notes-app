const apiUrl = 'http://v-ie.uek.krakow.pl/~s206966/app/api/user/create.php';

const userPost = (user,password) => ({
    method: 'POST',
    header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nazwa_uzytkownika: user,
        password: password,
    })
})

const userGet = (user,password) => ({
    method: 'GET',
    header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nazwa_uzytkownika: user,
        password: password,
    })
})

const noteGet = (user) => {}
const noteSave = (note) => {}
const noteDelete = (id) => {}

export {
    apiUrl,
    userPost,
    userGet,
    noteGet,
    noteSave,
    noteDelete,
}