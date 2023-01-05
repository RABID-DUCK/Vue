<template>
    <div class="post">
        <div>
            <div><strong>ID: {{ post.id }}</strong></div>
            <div><strong>Title: {{ post.title }}</strong></div>
            <div><strong>Desc: {{ post.body }}</strong></div>
        </div>
        <div class="post__btns">
            <my-button
            @click="$router.push(`/posts/${post.id}`)"
            >Open</my-button>
            <my-button
            @click="$emit('remove', post)"
            >Delete</my-button>
        </div>   
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.post{
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.post__btns{
    display: flex;
}
</style>