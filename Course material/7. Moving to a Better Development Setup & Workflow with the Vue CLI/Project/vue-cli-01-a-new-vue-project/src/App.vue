<template>
  <h2>My Friends</h2>
  <section>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'tedo',
          name: "Teodor Georgiev",
          phone: '08935454544',
          email: 'teodor@localhost.com'
        },
        {
          id: 'vito',
          name: "Vitorio Pavlov",
          phone: '08769202022',
          email: 'vitorio@localhost.com'
        },
      ]
    }
  },

};
</script>