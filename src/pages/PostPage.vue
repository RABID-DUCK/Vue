<template>
    <div>
        <div>
            <h1>Page with posts</h1>
            <my-input 
                v-model="searchQuery"
                placeholder="Search..."
            />
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
            :posts="sortedAndSearhPosts"
            @remove="removePost"
            v-if="!isPostLoading"
            />
            <div v-else>Loading ...</div>
            <div class="page-wrapper">
                <div
            class="page"
            v-for="pageNum in totalPages"
            :key="pageNum"
            :class="{
                'current-page': page === pageNum
            }"
            @click="changePage(pageNum)"
            >
            {{ pageNum }}
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from '@/components/UI/MyDialog.vue';
import MyButton from '@/components/UI/MyButton.vue';
import axios from 'axios'
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';

    export default{
        components: {
            PostForm, PostList, MyDialog,
                MyButton,
                MySelect,
                MyInput
        },
        data(){
            return {
                posts: [],
                dialogVisible: false,
                isPostLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0, 
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
            changePage(pageNum) {
                this.page = pageNum;
                this.fetchPosts();
            },
            async fetchPosts(){
                try{
                    this.isPostLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
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
        },
        computed: {
            sortedPosts(){
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
            },
            sortedAndSearhPosts(){
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }
        },
        watch: {
            
        }
    }
</script>
<style>


.app button{
    margin: 15px 10px 15px 0;
    cursor: pointer;
}

.app__btns{
    display: flex;
    justify-content: space-between;
}

.page-wrapper{
    display: flex;
}

.page{
    border: 1px solid black;
    padding: 10px;
    margin-top: 15px;
}

.current-page{
    border: 2px solid teal;
    background-color: lightgray;
}
</style>