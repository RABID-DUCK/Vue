<template>
    <div class="post">
        <div>
            <div><strong>Title: {{ post.title }}</strong></div>
            <div><strong>Desc: {{ post.body }}</strong></div>
        </div>
        <div class="post__btns">
            <button>Delete</button>
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
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>