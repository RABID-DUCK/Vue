<template>
    <div>
        <div class="app">
            <h1>Page with posts</h1>
            <div class="app__btns">
                <my-button 
                @click="showDialog"
                >Create post</my-button>
                <my-select 
                    v-model="selectedSort"
                    :options="sortOptions"
                />
            </div>
            <my-dialog  v-model:show="dialogVisible">
                <post-form
                @create="createPost"
                />
            </my-dialog>
            <post-list 
            :posts="posts"
            @remove="removePost"
            v-if="!isPostLoading"
            />
            <div v-else>Loading ...</div>
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from './components/UI/MyDialog.vue';
import MyButton from './components/UI/MyButton.vue';
import axios from 'axios'
import MySelect from './components/UI/MySelect.vue';

    export default{
        components: {
            PostForm, PostList, MyDialog,
                MyButton,
                MySelect
        },
        data(){
            return {
                posts: [],
                dialogVisible: false,
                isPostLoading: false,
                selectedSort: '',
                sortOptions: [
                    {value: 'title', name: 'by name'},
                    {value: 'body', name: 'by content'}
                ]
            }
        },
        methods: {
            createPost(post){
                this.posts.push(post);
                this.dialogVisible = false;
            },
            removePost(post){
                this.posts = this.posts.filter(p => p.id !== post.id);
            },
            showDialog(){
                this.dialogVisible = true;
            },
            async fetchPosts(){
                try{
                    this.isPostLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;
                }
                catch (e){
                    alert("Error");
                } finally{
                    this.isPostLoading = false;
                }
            }
        },
        mounted() {
            this.fetchPosts();
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

.app button{
    margin: 15px 10px 15px 0;
    cursor: pointer;
}

.app__btns{
    display: flex;
    justify-content: space-between;
}
</style>