<template>
  <div class="home-container">
  <h2> Add Your Book Here</h2>
    <div class="card card-body mt-4">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Title</label>
          <input v-model="form.name" class="form-control" required />
        </div>
  
        <div class="form-group mt-3">
          <label>Description</label>
          <input
            v-model="form.desc" placeholder="eg : buku fiksi" maxlength="25"
            class="form-control"
         
            required
          />
        </div>

  
        <button type="submit" class="btn btn-success mt-3">
          Add Book
        </button>
      </form>
    </div>
    </div>
  </template>
  
  <script>
  import { createBook } from '@/firebase'
  import { reactive } from 'vue'
  

  export default {
      name: ' createApp ',
    setup() {
      const form = reactive({ name: '', desc: '' })
  
      const onSubmit = async () => {
        await createBook({ ...form })
        form.name = ''
        form.desc = ''
      }

 
  
      return { form, onSubmit }
    }
  }
  </script>



