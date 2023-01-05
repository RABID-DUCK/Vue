<template>
    <div>
        <div>
            <h1>Page with posts</h1>
            <my-input 
                v-model="searchQuery"
                v-focus
                placeholder="Search..."
            />
            <div class="app__btns">
                <my-button 
                >Create post</my-button>
                <my-select 
                    v-model="selectedSort"
                    :options="sortOptions"
                />
            </div>
            <div></div>
            <my-dialog  v-model:show="dialogVisible">
                <post-form
                />
            </my-dialog>
            <post-list 
            :posts="sortedAndSearhPosts"
            v-if="!isPostLoading"
            />
            <div v-else>Loading ...</div>
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
import {ref} from 'vue'
import {usePost} from '@/hooks/usePost'
import useSortedPost from '@/hooks/useSortedPost'
import useSortedAndSearchPosts from '@/hooks/useSortedAndSearchPosts'

    export default{
        components: {
            PostForm, PostList, MyDialog,
                MyButton,
                MySelect,
                MyInput
        },
        data(){
            return {
                dialogVisible: false,
                sortOptions: [
                    {value: 'title', name: 'by name'},
                    {value: 'body', name: 'by content'}
                ]
            }
        },
        setup(props){
            const {posts, totalPages, isPostLoading} = usePost(10);
            const {sortedPosts, selectedSort} = useSortedPost(posts);
            const {searchQuery, sortedAndSearchPosts} = useSortedAndSearchPosts(sortedPosts);
 
            return {
                posts,
                totalPages,
                isPostLoading,
                sortedPosts, 
                selectedSort,
                searchQuery,
                sortedAndSearchPosts
            }
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