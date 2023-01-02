<template>
  <form @submit.prevent>
                <input 
                v-model="post.title"
                class="name-post" type="text" placeholder="Titile">
                <input 
                v-model="post.body"
                class="name-post" type="text" placeholder="Description">
                <button class="btn-create-post" 
                @click="createPost">Create</button>
            </form>
</template>

<script>
export default {
    data() {
        return{
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style>

form{
    display: flex;
    flex-direction: column;
    padding-right: 15px;
}

.name-post{
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin: 15px;
}

.btn-create-post{
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>