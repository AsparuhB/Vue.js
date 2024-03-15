<template>
  <li>
    <h2><slot name="heading"></slot></h2>
    <p><strong><slot name="desc"></slot></strong></p>
    <slot name="link"></slot>
  </li>
</template>

<script>
export default {};
</script>
