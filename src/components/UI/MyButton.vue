<template>
  <button class="btn-create-post">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn-create-post{
    padding: 10px 15px;
    background: none;
    align-self: flex-end;
    color: teal;
    border: 1px solid teal;
}
</style>