<template>
   <div v-if="posts.length > 0">
    <h3>List posts: </h3>
    <transition-group name="post-list">
        <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
    </transition-group>
   </div>
   <h2 v-else style="color: red;">
    List posts is clear
   </h2>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.post-list-item{
    display: inline-block;
}

.post-list-enter-active, 
.post-list-leave-active{
    transition: 0.3s all ease;
}

.post-list-enter-from,
.post-list-leave-to{
    opacity: 0;
    transform: translateX(130px);
}

.post-list-move{
    transition: transform 0.3s ease;
}
</style>