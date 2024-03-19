<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="description"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="link" ref="link"/>
      </div>
      <div>
        <base-button type="submit" >Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: ''
    }
  },
  methods: {
    submitData() {
      const enteredTItle = this.$refs.title.value
      const enteredDescription = this.$refs.description.value
      const enteredUrl = this.$refs.link.value

      if (enteredTItle.trim() === '' || enteredDescription.trim() || enteredUrl.trim() === '') {
        
        
        return;
      }

      this.addResource(enteredTItle, enteredDescription, enteredUrl)
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
.form-control {
  margin: 1rem 0;
}
</style>
