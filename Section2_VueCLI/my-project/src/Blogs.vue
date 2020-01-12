<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <button @click="changeTitle">Change Title</button>
    <input type="text" v-model="searchTerm" />
    <!-- <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blogs",
      posts: [],
      searchTerm: ""
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle = "Amazing Blogsite";
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.searchTerm));
    }
  },
  beforeCreate() {},
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => {
        this.posts = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  beforeUpdate() {}
};
</script>

<style></style>
