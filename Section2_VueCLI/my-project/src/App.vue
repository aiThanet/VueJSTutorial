<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar />
    <nav>
      <ul>
        <li>
          <a href>Home</a>
        </li>
        <li>
          <a href>About</a>
        </li>
        <li>
          <a href>Contact Us</a>
        </li>
      </ul>
    </nav>
    <Blogs />

    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllFriends from "./AllFriends";
import OnlineFriends from "./OnlineFriends";
import Blogs from "./Blogs";

export default {
  name: "app",
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "My first Vue app",
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Toad", online: true },
        { name: "Bowser", online: false }
      ]
    };
  },
  methods: {
    deleteFriend(payload) {
      this.friends = this.friends.filter(
        friend => friend.name !== payload.name
      );
    }
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
