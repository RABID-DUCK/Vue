export const postModule = {
    state: () =>({
        posts: [],
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
    }),
    getters: {
        sortedPosts(state){
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },
        sortedAndSearhPosts(state, getters){
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        },
        setLoading(state, bool){
            state.isPostLoading = bool;
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort;
        },
        setPage(state, page){
            state.page = page;
        },
        setTotalPage(state, totalPages){
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery;
        }
    },
    actions: {
        async fetchPosts({state, commit}){
            try{
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data);
            }
            catch (e){
                console.log(e);
            } finally{
                commit('setLoading', false);
            }
        }
    },
    namespaced: true
}