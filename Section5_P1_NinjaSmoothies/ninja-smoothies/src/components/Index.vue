<template>
  <div class="index container">
    <div v-for="smoothie in smoothies" class="card" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmootie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name:'EditSmoothie',params:{smoothie_id:smoothie.id}}">
          <i class="material-icons">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Index",
  methods: {
    deleteSmootie(smoothieId) {
      db.collection("Smoothie")
        .doc(smoothieId)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(
            smoothie => smoothie.id != smoothieId
          );
        });
    }
  },
  created() {
    db.collection("Smoothie")
      .get()
      .then(snapshot => {
        console.log("loading doc", snapshot.size);
        snapshot.forEach(doc => {
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        });
      });
  },
  data() {
    return {
      smoothies: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  font: size 1.4em;
  color: #aaa;
}
</style>
