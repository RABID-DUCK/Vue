<template>
    <div>
        <div class="app">
            <post-form
            @create="createPost"
             />
            <post-list :posts="posts" />
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

    export default{
        components: {
            PostForm, PostList
        },
        data(){
            return {
                posts: [
                    {id: 1, title: 'JavaScript', body: 'Description post'},
                    {id: 2, title: 'JavaScript 2', body: 'Description post 2'},
                    {id: 3, title: 'JavaScrip 3', body: 'Description post 3'},
                ],
            }
        },
        methods: {
            createPost(post){
                this.posts.push(post);
            },
        }
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app{
    padding: 20px;
}

</style>