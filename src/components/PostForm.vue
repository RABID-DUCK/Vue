<template>
  <form @submit.prevent>
                <my-input 
                v-focus
                v-model="post.title"
                 type="text" placeholder="Titile" />
                <my-input 
                v-model="post.body"
                 type="text" placeholder="Description" />
                <my-button
                class="create-post"
                @click="createPost">Создать</my-button>
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

.create-post{
    align-self: flex-end;
}


</style>