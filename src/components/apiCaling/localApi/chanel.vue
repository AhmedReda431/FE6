<template>
  <div class="holder">
    <div class="container">
      <div class="firstExamp">
        <h4 class="mb-4">example of local file</h4>
        <existing-api
          v-for="post in posts"
          :key="post.id"
          :views="post.views"
          :title="post.title"
          :date="post.date"
          :content="post.content"
          :author="post.author"
          :category="post.category"
        ></existing-api>
      </div>
    </div>
  </div>
</template>

<script>
import jsonPosts from "@/json/blog_posts";
import ExistingApi from './existingApi';
export default {
    data:function(){
        return {
            posts:jsonPosts
        }
    },
    components:{
        ExistingApi
    }
};
</script>

<style>
</style>