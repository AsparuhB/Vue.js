<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div class="card mb-4" v-for="i in 3">
      <div class="card-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quaerat
        eaque suscipit reiciendis, obcaecati animi, hic, maiores sapiente
        aliquid rem dolorum provident soluta. Molestiae consequuntur earum
        libero dolor, nostrum eligendi?
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
//imports
import { ref } from 'vue';
//notes

const notes = ref()
</script>
