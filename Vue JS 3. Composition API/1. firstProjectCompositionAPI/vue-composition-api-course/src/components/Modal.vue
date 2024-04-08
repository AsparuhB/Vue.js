<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint unde
        fuga officia atque! Natus dolore amet repellendus perferendis
        accusantium, enim delectus at eum vitae iste facere, nobis, itaque
        voluptatibus!
      </p>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<style>
.modal {
  background: beige;
  color: black;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
