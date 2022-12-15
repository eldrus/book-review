<template>
    <div class="card booklist-container">
      <table class="table m-0">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ id, name, desc } in books" :key="id">
            <td>{{ name }}</td>
            <td>{{ desc }}</td>
        
            <td>
              <router-link :to="`/edit/${id}`">
                <button class="btn btn-primary btn-sm me-2">
                  Edit
                </button>
              </router-link>
              <button class="btn btn-danger btn-sm" @click="deleteBook(id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useLoadBook, deleteBook } from '@/firebase'
  
  export default {
    setup() {
      const books = useLoadBook()
      return { books, deleteBook }
    }
  }
  </script>