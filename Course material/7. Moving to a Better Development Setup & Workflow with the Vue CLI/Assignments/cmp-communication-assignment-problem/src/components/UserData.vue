<template>
  <section>
    <div>
      <form @submit.prevent="submitData">
        <div>
          <label>Username:</label>
          <input type="text" v-model="enteredUserName" />
        </div>
        <div>
          <label>Age:</label> <input type="text" v-model="enteredAge" />
        </div>
        <button>Set User Data</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  emits: ['set-user'],
  data() {
    return {
      enteredUserName: '',
      enteredAge: '',
    };
  },
  methods: {
    submitData() {
      this.$emit('set-user', this.enteredUserName, this.enteredAge);
    },
  },
};
</script>
