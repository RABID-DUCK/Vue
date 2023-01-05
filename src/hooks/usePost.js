import axios from "axios"
import {ref, onMounted} from 'vue'

export function usePost(limit){
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostLoading = ref(true);
    const fetching = async () => {
        try{
            isPostLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });
            totalPages = Math.ceil(response.headers['x-total-count'] / limit)
            posts = response.data;
        }
        catch (e){
            alert("Error");
        } finally{
            isPostLoading.value = false;
        }
    }
    onMounted(fetching)
    return {
        posts, totalPages, isPostLoading
    }
}