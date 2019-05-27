const apiUserURL = 'http://v-ie.uek.krakow.pl/~s206966/app/api/user/'
const apiNoteURL = 'http://v-ie.uek.krakow.pl/~s206966/app/api/note/'
const apiCategoriesURL = 'http://v-ie.uek.krakow.pl/~s206966/app/api/categories/all_categories.php'

const userPost = (user,password) => ({
    method: 'POST',
    header: {
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
    apiUserURL,
    apiNoteURL,
    apiCategoriesURL,
    userPost,
    userGet,
    noteGet,
    noteSave,
    noteDelete,
}