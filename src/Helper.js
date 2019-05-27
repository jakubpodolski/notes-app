const apiUserURL = 'http://v-ie.uek.krakow.pl/~s206966/app/api/user/'
const apiNoteURL = 'http://v-ie.uek.krakow.pl/~s206966/app/api/note/'
const apiCategoriesURL = 'http://v-ie.uek.krakow.pl/~s206966/app/api/categories/all_categories.php'

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

const noteUpdate = (noteID,userID,content,title,style) => ({
    method: 'PUT',
    header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id_notatki: noteID,
        tytul_notatki: title,
        tresc_notatki: content,
        kategoria: style,
        id_uzytkownika: userID,
    })
})

const noteSave = (userID,content,title,style) => ({
    method: 'POST',
    header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        tytul_notatki: title,
        tresc_notatki: content,
        kategoria: style,
        id_uzytkownika: userID,
    })
})

const noteDelete = (id) => ({
    method: 'DELETE',
    header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id_notatki: id
    })
})

export {
    apiUserURL,
    apiNoteURL,
    apiCategoriesURL,
    userPost,
    userGet,
    noteUpdate,
    noteSave,
    noteDelete,
}