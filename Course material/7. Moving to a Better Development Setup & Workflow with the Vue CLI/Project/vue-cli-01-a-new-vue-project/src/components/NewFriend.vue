<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name:</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="">Phone:</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="">E-Mail:</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <label>Favorite:</label>
      <input type="checkbox" v-model="checkedFavorite">
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
      checkedFavorite: false,
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-contact',
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail,
        this.checkedFavorite
      );
    },
  },
};
</script>
