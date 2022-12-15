import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyC4WaOZPPPGjp521Wr_8qEbLrrwPOXYdrs",
  authDomain: "fp-pweb-7cf5b.firebaseapp.com",
  projectId: "fp-pweb-7cf5b",
  storageBucket: "fp-pweb-7cf5b.appspot.com",
  messagingSenderId: "27887438101",
  appId: "1:27887438101:web:d93d89148a7f775592811c",
  measurementId: "G-RV7XGHQ86H"
  
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const booksCollection = db.collection('books')

export const createBook = book => {
  return booksCollection.add(book)
}

export const getBook = async id => {
  const book = await booksCollection.doc(id).get()
  return book.exists ? book.data() : null
}

export const updateBook = (id, book) => {
  return booksCollection.doc(id).update(book)
}

export const deleteBook = id => {
  return booksCollection.doc(id).delete()
}

export const useLoadBook = () => {
  const books = ref([])
  const close = booksCollection.onSnapshot(snapshot => {
    books.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return books
}
