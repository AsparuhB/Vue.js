<template>
  <section>
    <div>
      <ul>
        <li>
          <h2>Username: {{ name }}</h2>
          <h3>Age: {{ age }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
