<template>
  App.vue
  <div class="left">
    <ul>
      <active-user
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :age="user.age"
      ></active-user>
    </ul>
  </div>
  <div class="right">
    <user-data @add-user="addingUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 'a', name: 'Asparuh', age: '30' },
        { id: 'm', name: 'Mitko', age: '31' },
      ],
    };
  },
  methods: {
    addingUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: age
      }
      this.users.push(newUser)
    }
  }
};
</script>

<style>
.left {
  width: 50%;
  position: relative;
}
.right {
  width: 50%;
  position: absolute;
  top: 10px;
  padding-top: 35px;
  left: 50%
}

</style>
