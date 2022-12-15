
<template>
  <div class="card card-body edit-container">
    <h3>Edit Book</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Deskripsi</label>
        <input
          v-model="form.desc"
          class="form-control"      
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBook, updateBook } from '@/firebase'

export default {
  name: ' EditApp',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const bookId = computed(() => route.params.id)

    const form = reactive({ name: '', desc: '' })
    onMounted(async () => {
      const book = await getBook(bookId.value)
      console.log(book, bookId.value)
      form.name = book.name
      form.desc = book.desc
    })

    const update = async () => {
      await updateBook(bookId.value, { ...form })
      router.push('/about')
      form.name = ''
      form.desc = ''
    }

    return { form, update }
  }
  
}


</script>