<template>
  <div class="navbar">
    <div @click="$router.push('/')">BOARD</div>
    <div class="navbar_btns">
        <my-button @click="$router.push('/posts')">Posts</my-button>
        <my-button @click="$router.push('/about')">About us</my-button>
        <my-button @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar_btns{
    margin-left: auto;
}
</style>